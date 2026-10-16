import type { VercelRequest, VercelResponse } from '@vercel/node'

type CareerjetJob = {
  title?: string
  company?: string
  locations?: string
  salary?: string
  url?: string
  date?: string
}

type CareerjetResponse = {
  type?: string
  hits?: number
  jobs?: CareerjetJob[]
}

export type LiveJob = {
  id: string
  title: string
  company: string
  location: string
  salary: string
  url: string
  postedDate: string
}

export type JobsApiResponse = {
  configured: boolean
  jobs: LiveJob[]
  error?: string
}

const CAREERJET_ENDPOINT = 'https://search.api.careerjet.net/v4/query'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600')

  const apiKey = process.env.CAREERJET_API_KEY
  const localeCode = process.env.CAREERJET_LOCALE_CODE || 'en_NG'
  const location = process.env.CAREERJET_LOCATION || 'Lagos, Nigeria'

  if (!apiKey) {
    const body: JobsApiResponse = { configured: false, jobs: [] }
    res.status(200).json(body)
    return
  }

  const userIp =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || '127.0.0.1'
  const userAgent = (req.headers['user-agent'] as string) || 'Mozilla/5.0'

  const params = new URLSearchParams({
    locale_code: localeCode,
    location,
    sort: 'date',
    page_size: '12',
    user_ip: userIp,
    user_agent: userAgent,
  })

  try {
    const authValue = Buffer.from(`${apiKey}:`).toString('base64')

    const upstream = await fetch(`${CAREERJET_ENDPOINT}?${params.toString()}`, {
      headers: {
        Authorization: `Basic ${authValue}`,
      },
    })

    if (!upstream.ok) {
      const body: JobsApiResponse = {
        configured: true,
        jobs: [],
        error: `Careerjet responded with ${upstream.status}`,
      }
      res.status(200).json(body)
      return
    }

    const data = (await upstream.json()) as CareerjetResponse

    const jobs: LiveJob[] = (data.jobs || []).map((job, index) => ({
      id: `${job.url ?? index}`,
      title: job.title || 'Untitled role',
      company: job.company || 'Company not listed',
      location: job.locations || location,
      salary: job.salary || '',
      url: job.url || '',
      postedDate: job.date || '',
    }))

    const body: JobsApiResponse = { configured: true, jobs }
    res.status(200).json(body)
  } catch (error) {
    const body: JobsApiResponse = {
      configured: true,
      jobs: [],
      error: error instanceof Error ? error.message : 'Unknown error',
    }
    res.status(200).json(body)
  }
}
