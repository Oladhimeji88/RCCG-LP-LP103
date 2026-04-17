// Edit this file to update the Jobs page and the monthly Lagos jobs tracker.

export type LagosJobEntry = {
  id: number
  rank: number
  title: string
  sector: string
  hiringScore: number
  monthlyChange: number
  workMode: 'On-site' | 'Hybrid' | 'Remote'
  salaryBand: string
  summary: string
}

export type LagosJobsMonth = {
  id: string
  label: string
  month: string
  year: number
  lastUpdated: string
  note: string
  jobs: LagosJobEntry[]
}

export type JobsContent = {
  eyebrow: string
  title: string
  description: string
  updateTitle: string
  updateDescription: string
  updatePath: string
  cadenceLabel: string
  sampleNotice: string
  months: LagosJobsMonth[]
}

export const jobsContent: JobsContent = {
  eyebrow: 'Jobs',
  title: 'Top Lagos job roles tracked month by month.',
  description:
    'This page gives LP 103 a simple monthly jobs board for Lagos. Each month keeps 10 ranked roles with demand scores, hiring movement, work mode, and quick notes so the list stays easy to update.',
  updateTitle: 'Where to update this page',
  updateDescription:
    'Edit the jobs content file below, replace the sample monthly entries with your verified data, and add a new month whenever you are ready.',
  updatePath: 'src/content/jobsContent.ts',
  cadenceLabel: 'Monthly top 10 jobs tracker',
  sampleNotice:
    'The entries below are starter tracking data for the new jobs section. Replace them with your own verified monthly Lagos job data whenever you want.',
  months: [
    {
      id: '2026-04',
      label: 'April 2026',
      month: 'April',
      year: 2026,
      lastUpdated: 'April 17, 2026',
      note:
        'Starter snapshot focused on roles that usually stay visible across Lagos hiring conversations in tech, operations, finance, media, and client-facing teams.',
      jobs: [
        {
          id: 1,
          rank: 1,
          title: 'Sales Executive',
          sector: 'Sales',
          hiringScore: 95,
          monthlyChange: 5,
          workMode: 'On-site',
          salaryBand: 'N250k - N450k / month',
          summary:
            'Strong demand across retail, real estate, logistics, and business services teams that need aggressive customer acquisition.',
        },
        {
          id: 2,
          rank: 2,
          title: 'Customer Support Specialist',
          sector: 'Customer Experience',
          hiringScore: 92,
          monthlyChange: 4,
          workMode: 'Hybrid',
          salaryBand: 'N180k - N320k / month',
          summary:
            'Banks, fintechs, and service businesses keep hiring support staff who can manage calls, tickets, and client retention.',
        },
        {
          id: 3,
          rank: 3,
          title: 'Frontend Developer',
          sector: 'Technology',
          hiringScore: 90,
          monthlyChange: 3,
          workMode: 'Hybrid',
          salaryBand: 'N350k - N700k / month',
          summary:
            'Product companies still need frontend talent for dashboards, web apps, landing pages, and customer-facing platforms.',
        },
        {
          id: 4,
          rank: 4,
          title: 'Digital Marketing Executive',
          sector: 'Marketing',
          hiringScore: 88,
          monthlyChange: 2,
          workMode: 'Hybrid',
          salaryBand: 'N220k - N420k / month',
          summary:
            'Performance marketing, paid ads, content distribution, and brand growth remain high-priority work for Lagos teams.',
        },
        {
          id: 5,
          rank: 5,
          title: 'Operations Officer',
          sector: 'Operations',
          hiringScore: 86,
          monthlyChange: 2,
          workMode: 'On-site',
          salaryBand: 'N200k - N380k / month',
          summary:
            'Operations roles stay important for schools, hospitals, logistics providers, and fast-moving businesses.',
        },
        {
          id: 6,
          rank: 6,
          title: 'Data Analyst',
          sector: 'Analytics',
          hiringScore: 84,
          monthlyChange: 3,
          workMode: 'Hybrid',
          salaryBand: 'N300k - N600k / month',
          summary:
            'Teams want people who can clean data, build reports, and support better decisions across product and finance units.',
        },
        {
          id: 7,
          rank: 7,
          title: 'Account Officer',
          sector: 'Finance',
          hiringScore: 82,
          monthlyChange: 1,
          workMode: 'On-site',
          salaryBand: 'N220k - N400k / month',
          summary:
            'Finance teams continue to hire for reconciliations, reporting, collections, and cash-flow coordination.',
        },
        {
          id: 8,
          rank: 8,
          title: 'Social Media Manager',
          sector: 'Media',
          hiringScore: 80,
          monthlyChange: 2,
          workMode: 'Hybrid',
          salaryBand: 'N180k - N350k / month',
          summary:
            'Community growth, content calendars, and creator-led campaigns keep social roles active in Lagos.',
        },
        {
          id: 9,
          rank: 9,
          title: 'HR Officer',
          sector: 'Human Resources',
          hiringScore: 78,
          monthlyChange: 1,
          workMode: 'On-site',
          salaryBand: 'N220k - N380k / month',
          summary:
            'Growing teams still need HR support for recruitment coordination, onboarding, compliance, and people operations.',
        },
        {
          id: 10,
          rank: 10,
          title: 'Business Development Associate',
          sector: 'Growth',
          hiringScore: 76,
          monthlyChange: 2,
          workMode: 'Hybrid',
          salaryBand: 'N220k - N420k / month',
          summary:
            'Relationship-building, partnerships, and pipeline development keep this role on many Lagos hiring lists.',
        },
      ],
    },
    {
      id: '2026-03',
      label: 'March 2026',
      month: 'March',
      year: 2026,
      lastUpdated: 'March 31, 2026',
      note:
        'Starter snapshot for a month with steady demand across commercial roles, support functions, and product delivery teams.',
      jobs: [
        {
          id: 11,
          rank: 1,
          title: 'Customer Support Specialist',
          sector: 'Customer Experience',
          hiringScore: 91,
          monthlyChange: 4,
          workMode: 'Hybrid',
          salaryBand: 'N180k - N320k / month',
          summary:
            'High-volume service teams kept support roles near the top as businesses pushed for retention and faster response times.',
        },
        {
          id: 12,
          rank: 2,
          title: 'Sales Executive',
          sector: 'Sales',
          hiringScore: 90,
          monthlyChange: 3,
          workMode: 'On-site',
          salaryBand: 'N250k - N430k / month',
          summary:
            'Commercial teams stayed aggressive about new revenue, especially in B2B services and distribution-heavy businesses.',
        },
        {
          id: 13,
          rank: 3,
          title: 'Digital Marketing Executive',
          sector: 'Marketing',
          hiringScore: 87,
          monthlyChange: 2,
          workMode: 'Hybrid',
          salaryBand: 'N220k - N400k / month',
          summary:
            'Brand visibility and lead generation kept digital marketers highly visible across Lagos businesses.',
        },
        {
          id: 14,
          rank: 4,
          title: 'Frontend Developer',
          sector: 'Technology',
          hiringScore: 86,
          monthlyChange: 2,
          workMode: 'Hybrid',
          salaryBand: 'N350k - N680k / month',
          summary:
            'Web platform demand stayed strong, especially for teams improving product UX and customer onboarding flows.',
        },
        {
          id: 15,
          rank: 5,
          title: 'Operations Officer',
          sector: 'Operations',
          hiringScore: 84,
          monthlyChange: 1,
          workMode: 'On-site',
          salaryBand: 'N190k - N360k / month',
          summary:
            'Operations staff stayed important for organizations tightening delivery quality and process coordination.',
        },
        {
          id: 16,
          rank: 6,
          title: 'Data Analyst',
          sector: 'Analytics',
          hiringScore: 82,
          monthlyChange: 2,
          workMode: 'Hybrid',
          salaryBand: 'N300k - N580k / month',
          summary:
            'Demand remained steady for analytics support in finance, digital products, and reporting-focused teams.',
        },
        {
          id: 17,
          rank: 7,
          title: 'Administrative Officer',
          sector: 'Administration',
          hiringScore: 80,
          monthlyChange: 1,
          workMode: 'On-site',
          salaryBand: 'N170k - N300k / month',
          summary:
            'Administrative roles stayed open in education, health, and service businesses that needed reliable office coordination.',
        },
        {
          id: 18,
          rank: 8,
          title: 'Account Officer',
          sector: 'Finance',
          hiringScore: 79,
          monthlyChange: 1,
          workMode: 'On-site',
          salaryBand: 'N210k - N390k / month',
          summary:
            'Accounting demand held steady for reporting, collections, reconciliations, and vendor payment support.',
        },
        {
          id: 19,
          rank: 9,
          title: 'UI Designer',
          sector: 'Design',
          hiringScore: 77,
          monthlyChange: 2,
          workMode: 'Remote',
          salaryBand: 'N280k - N500k / month',
          summary:
            'Product and creative teams still wanted interface designers who can ship clear layouts and usable screens.',
        },
        {
          id: 20,
          rank: 10,
          title: 'HR Officer',
          sector: 'Human Resources',
          hiringScore: 75,
          monthlyChange: 1,
          workMode: 'On-site',
          salaryBand: 'N210k - N360k / month',
          summary:
            'People operations roles stayed relevant as companies kept improving hiring flow and internal structure.',
        },
      ],
    },
    {
      id: '2026-02',
      label: 'February 2026',
      month: 'February',
      year: 2026,
      lastUpdated: 'February 28, 2026',
      note:
        'Starter snapshot for an early-year hiring cycle with strong emphasis on growth roles, delivery teams, and operational stability.',
      jobs: [
        {
          id: 21,
          rank: 1,
          title: 'Sales Executive',
          sector: 'Sales',
          hiringScore: 93,
          monthlyChange: 4,
          workMode: 'On-site',
          salaryBand: 'N240k - N420k / month',
          summary:
            'Sales teams stayed active as businesses pushed first-quarter pipeline targets and customer expansion goals.',
        },
        {
          id: 22,
          rank: 2,
          title: 'Operations Officer',
          sector: 'Operations',
          hiringScore: 89,
          monthlyChange: 3,
          workMode: 'On-site',
          salaryBand: 'N190k - N350k / month',
          summary:
            'Companies hiring early in the year usually prioritized operations staff to steady systems and delivery.',
        },
        {
          id: 23,
          rank: 3,
          title: 'Customer Support Specialist',
          sector: 'Customer Experience',
          hiringScore: 88,
          monthlyChange: 3,
          workMode: 'Hybrid',
          salaryBand: 'N170k - N300k / month',
          summary:
            'Support roles remained strong as more digital businesses needed better client response and issue resolution.',
        },
        {
          id: 24,
          rank: 4,
          title: 'Business Development Associate',
          sector: 'Growth',
          hiringScore: 86,
          monthlyChange: 3,
          workMode: 'Hybrid',
          salaryBand: 'N210k - N400k / month',
          summary:
            'Teams stayed focused on partnerships, pipeline generation, and market expansion opportunities.',
        },
        {
          id: 25,
          rank: 5,
          title: 'Digital Marketing Executive',
          sector: 'Marketing',
          hiringScore: 84,
          monthlyChange: 2,
          workMode: 'Hybrid',
          salaryBand: 'N210k - N390k / month',
          summary:
            'Performance-led campaigns and content distribution kept marketing roles in strong demand.',
        },
        {
          id: 26,
          rank: 6,
          title: 'Frontend Developer',
          sector: 'Technology',
          hiringScore: 82,
          monthlyChange: 2,
          workMode: 'Hybrid',
          salaryBand: 'N340k - N650k / month',
          summary:
            'Tech teams were still hiring frontend talent to polish user-facing products and internal platforms.',
        },
        {
          id: 27,
          rank: 7,
          title: 'Logistics Coordinator',
          sector: 'Supply Chain',
          hiringScore: 80,
          monthlyChange: 1,
          workMode: 'On-site',
          salaryBand: 'N180k - N320k / month',
          summary:
            'Delivery-heavy businesses needed coordination talent to manage schedules, movement, and dispatch performance.',
        },
        {
          id: 28,
          rank: 8,
          title: 'Account Officer',
          sector: 'Finance',
          hiringScore: 78,
          monthlyChange: 1,
          workMode: 'On-site',
          salaryBand: 'N200k - N370k / month',
          summary:
            'Finance hires remained visible where reconciliations, collections, and month-end reporting were priorities.',
        },
        {
          id: 29,
          rank: 9,
          title: 'Social Media Manager',
          sector: 'Media',
          hiringScore: 77,
          monthlyChange: 2,
          workMode: 'Hybrid',
          salaryBand: 'N170k - N330k / month',
          summary:
            'Brands looking for quick audience growth still hired social managers to plan, publish, and engage consistently.',
        },
        {
          id: 30,
          rank: 10,
          title: 'HR Officer',
          sector: 'Human Resources',
          hiringScore: 74,
          monthlyChange: 1,
          workMode: 'On-site',
          salaryBand: 'N200k - N350k / month',
          summary:
            'HR roles rounded out the list as businesses recruited, onboarded, and formalized internal processes.',
        },
      ],
    },
  ],
}
