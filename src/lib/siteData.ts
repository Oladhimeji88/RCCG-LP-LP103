import { siteContent } from '../content/siteContent'

export type NavItem = {
  label: string
  href: string
  external?: boolean
}

export type Service = {
  title: string
  description: string
  schedule: string
  location: string
  image: string
}

export type AudioSermon = {
  id: number
  name: string
  source: string
  description: string
  link: string
}

export type SermonCard = {
  id: number
  title: string
  label: string
  description: string
  image: string
  link: string
}

export type HistoryEntry = {
  id: number
  year: string
  text: string
  image: string
}

export type Pastor = {
  id: number
  name: string
  position: string
  image: string
}

export type Department = {
  id: number
  name: string
  description: string
  type: string
  leader: {
    name: string
    position: string
    image: string
  }
}

export type Branch = {
  id: number
  name: string
  address: string
  details: string
}

export type QuickLink = {
  label: string
  href: string
  description: string
}

export type GivingOption = {
  id: number
  title: string
  detail: string
  note: string
  href: string
  cta: string
}

const siteAssetBase = 'https://www.rccgthebridge.com'
type SiteLinkKey = keyof typeof siteContent.links

export const lp103Address = siteContent.brand.address

export const asset = (path: string) => `${siteAssetBase}${path}`

const resolveLink = (value: string) =>
  value in siteContent.links
    ? siteContent.links[value as SiteLinkKey]
    : value

const resolveImage = (value: string) =>
  value.startsWith('http') || value.startsWith('/brand/')
    ? value
    : asset(value)

export const navItems: NavItem[] = [...siteContent.navigation.items]

export const ctaLinks = { ...siteContent.links }

export const homeHeroPhrases = [...siteContent.home.hero.phrases]

export const livestream = {
  previewImage: resolveImage(siteContent.home.livestream.previewImage),
  title: siteContent.home.livestream.title,
  serviceLabel: siteContent.home.livestream.serviceLabel,
  serviceName: siteContent.home.livestream.serviceName,
  subtitle: siteContent.home.livestream.subtitle,
}

export const services: Service[] = siteContent.home.services.items.map((item) => ({
  ...item,
  image: resolveImage(item.image),
}))

export const audioSermons: AudioSermon[] =
  siteContent.home.officialResources.items.map((item) => ({
    ...item,
    link: resolveLink(item.link),
  }))

export const sundaySermons: SermonCard[] = siteContent.home.focusCards.items.map((item) => ({
  ...item,
  image: resolveImage(item.image),
  link: resolveLink(item.link),
}))

export const historyEntries: HistoryEntry[] = siteContent.about.history.items.map((item) => ({
  ...item,
  image: resolveImage(item.image),
}))

export const pastorates: Pastor[] = siteContent.about.leadership.items.map((item) => ({
  ...item,
  image: resolveImage(item.image),
}))

export const departments: Department[] = siteContent.departments.items.map((item) => ({
  ...item,
  leader: {
    ...item.leader,
    image: resolveImage(item.leader.image),
  },
}))

export const departmentShowcaseImages = siteContent.departments.showcaseImages.map(
  resolveImage,
)

export const branches: Branch[] = [...siteContent.zones.items]

export const givingOptions: GivingOption[] = siteContent.giving.options.map((item) => ({
  ...item,
  href: resolveLink(item.href),
}))

export const footerContacts = [
  {
    label: 'Email',
    value: siteContent.brand.email,
    icon: asset('/icons/email-icon.svg'),
  },
  {
    label: 'Location',
    value: siteContent.brand.address,
    icon: asset('/icons/location-pin-icon.svg'),
  },
  {
    label: 'Support',
    value: siteContent.brand.supportText,
    icon: asset('/icons/phone-icon.svg'),
  },
]

export const quickLinks: QuickLink[] = siteContent.footer.quickLinks.map((item) => ({
  ...item,
  href: resolveLink(item.href),
}))

export const connectOptions = [...siteContent.connect.requestOptions]
