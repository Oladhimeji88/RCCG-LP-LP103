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
export const lp103Address =
  '11 Odu Onikosi Avenue, opposite LASUED, Otto Awori, Lagos State'

export const asset = (path: string) => `${siteAssetBase}${path}`

export const navItems: NavItem[] = [
  { label: 'Connect', href: '/connect' },
  { label: 'Zones', href: '/branches' },
  { label: 'About Us', href: '/about' },
  { label: 'Counseling', href: '/counseling' },
]

export const ctaLinks = {
  giving: '/giving',
  watchLive: 'https://rccgworld.org/',
  counseling: '/counseling',
  rccgHome: 'https://www.rccg.org/',
  missionVision: 'https://www.rccg.org/mission-and-vision/',
  beliefs: 'https://www.rccg.org/our-beliefs/',
  history: 'https://www.rccg.org/our-history/',
  goLifestyle: 'https://go.rccg.org/',
  yayaGlobal: 'https://rccgyayaglobal.org/',
  yayaPrayer: 'https://rccgyayaglobal.org/prayer',
  yayaCounsel: 'https://rccgyayaglobal.org/counsel',
  onlineGiving: 'https://rccgpayments.trccg.org/',
  youtubeChannel: 'https://www.youtube.com/@RCCG-1',
}

export const homeHeroPhrases = [
  'To Make Heaven',
  'Take Many With Us',
  'Holiness Our Lifestyle',
  'Become A Witness',
]

export const livestream = {
  previewImage: asset('/livescream/livestream.png'),
  title: 'WATCH RCCG LIVE',
  serviceLabel: 'Official RCCG broadcast',
  serviceName: 'Streams, congresses and special services',
  subtitle:
    'Follow official RCCG and YAYA channels for current live services, congresses, and youth-focused gatherings.',
}

export const services: Service[] = [
  {
    title: 'Bible Teaching',
    description:
      'RCCG teaches that the Scriptures were written by holy men as they were inspired by the Holy Spirit, so LP 103 gives the Word a central place in every gathering.',
    schedule: 'Weekly study rhythms',
    location: lp103Address,
    image:
      'https://res.cloudinary.com/ducds3dmu/image/upload/v1757115358/udxz9bnwqj2tftp7ttnd.jpg',
  },
  {
    title: 'Prayer and Holiness',
    description:
      'The RCCG mission calls believers to live in holiness and carry God\'s presence everywhere, so prayer remains one of the strongest cultures shaping LP 103.',
    schedule: 'Weekly prayer gatherings and special prayer calls',
    location: lp103Address,
    image:
      'https://res.cloudinary.com/ducds3dmu/image/upload/v1757115383/mmzxfpzq6zx5qiidap8i.jpg',
  },
  {
    title: 'Witness and Outreach',
    description:
      'From Go A Fishing to Vision 2032, RCCG keeps evangelism at the center. LP 103 exists to raise young believers who live and speak the gospel boldly.',
    schedule: 'Seasonal outreaches and community action',
    location: lp103Address,
    image:
      'https://res.cloudinary.com/ducds3dmu/image/upload/v1757115413/svfx1nqtxo5qmgqwbsjf.jpg',
  },
]

export const audioSermons: AudioSermon[] = [
  {
    id: 1,
    name: 'RCCG Mission and Vision',
    source: 'Official RCCG',
    description:
      'See the church\'s core mission points around heaven, discipleship, holiness, and church planting.',
    link: ctaLinks.missionVision,
  },
  {
    id: 2,
    name: 'RCCG Statement of Belief',
    source: 'Official RCCG',
    description:
      'Review the church\'s public teaching on Scripture, salvation, the Holy Spirit, prayer, and Christian living.',
    link: ctaLinks.beliefs,
  },
  {
    id: 3,
    name: 'RCCG YAYA Global',
    source: 'Official RCCG YAYA',
    description:
      'Explore youth and young adult discipleship, prayer, training, and community from the official YAYA platform.',
    link: ctaLinks.yayaGlobal,
  },
]

export const sundaySermons: SermonCard[] = [
  {
    id: 1,
    title: 'Born in 1952',
    label: 'Our history',
    description:
      'RCCG began in Lagos in 1952 under Pa Josiah Akindayomi and has grown into a worldwide movement of churches and ministries.',
    image: asset('/gallery/bridge1.png'),
    link: ctaLinks.history,
  },
  {
    id: 2,
    title: '50,000+ Parishes',
    label: 'Global footprint',
    description:
      'RCCG says the church now serves more than 50,000 parishes across 197 countries and territories.',
    image: asset('/gallery/bridge2.png'),
    link: ctaLinks.rccgHome,
  },
  {
    id: 3,
    title: 'Youth and Young Adults',
    label: 'YAYA Global',
    description:
      'RCCG YAYA focuses on discipleship, prayer, training, collaboration, and leadership development for young adults and youth.',
    image: asset('/gallery/bridge3.png'),
    link: ctaLinks.yayaGlobal,
  },
  {
    id: 4,
    title: 'Vision 2032',
    label: 'Evangelism',
    description:
      'The Go A Fishing emphasis and Vision 2032 call believers to become intentional witnesses who reach souls everywhere.',
    image: asset('/gallery/bridge4.png'),
    link: ctaLinks.goLifestyle,
  },
]

export const historyEntries: HistoryEntry[] = [
  {
    id: 1,
    year: '1952',
    text:
      'RCCG began as the Glory of God Fellowship in Ebute-Metta, Lagos, and soon became The Redeemed Christian Church of God.',
    image: asset('/gallery/bridge1.png'),
  },
  {
    id: 2,
    year: '1973',
    text:
      'Pastor E.A. Adeboye joined the church as a young university lecturer, marking the beginning of a new chapter in its expansion.',
    image: asset('/gallery/bridge2.png'),
  },
  {
    id: 3,
    year: '1981',
    text:
      'Pastor E.A. Adeboye became General Overseer, and the church entered a season of rapid local and global growth.',
    image: asset('/gallery/bridge3.png'),
  },
  {
    id: 4,
    year: 'Today',
    text:
      'RCCG reports more than 50,000 parishes in 197 countries and territories, with youth movements like YAYA mobilizing discipleship and outreach across generations.',
    image: asset('/gallery/bridge4.png'),
  },
]

export const pastorates: Pastor[] = [
  {
    id: 1,
    name: 'Pastor E.A. Adeboye',
    position: 'General Overseer, RCCG Worldwide',
    image: '/brand/rccg-logo.png',
  },
  {
    id: 2,
    name: 'Pastor Babasola Olukoya',
    position: 'Pastor in Charge, Young Adults and Youth Affairs',
    image: 'https://rccgyayaglobal.org/images/leaders/iyp.jpeg',
  },
  {
    id: 3,
    name: 'Pastor Sola Akinbile',
    position: 'Assistant Pastor in Charge, Young Adults and Youth Affairs',
    image: 'https://rccgyayaglobal.org/images/leaders/sola.jpeg',
  },
]

export const departments: Department[] = [
  {
    id: 1,
    name: 'Discipleship and Bible Study',
    description:
      'Spaces for Scripture, doctrine, and steady spiritual growth grounded in the public beliefs of RCCG.',
    type: 'Formation',
    leader: {
      name: 'LP 103 Team',
      position: 'Bible and discipleship leads',
      image: '/brand/rccg-logo.png',
    },
  },
  {
    id: 2,
    name: 'Prayer and Counseling',
    description:
      'Prayer support, counseling, and compassionate follow-up for real-life seasons that require wisdom, healing, and care.',
    type: 'Care',
    leader: {
      name: 'LP 103 Team',
      position: 'Prayer and care coordinators',
      image: '/brand/rccg-logo.png',
    },
  },
  {
    id: 3,
    name: 'Evangelism and Outreach',
    description:
      'Community action, witness, and soul-winning aligned with the Go A Fishing mandate and Vision 2032 emphasis.',
    type: 'Mission',
    leader: {
      name: 'LP 103 Team',
      position: 'Outreach coordinators',
      image: '/brand/rccg-logo.png',
    },
  },
  {
    id: 4,
    name: 'Creative and Media',
    description:
      'Music, media, storytelling, and digital expression that help the gospel travel well across physical and online spaces.',
    type: 'Service',
    leader: {
      name: 'LP 103 Team',
      position: 'Creative and media coordinators',
      image: '/brand/rccg-logo.png',
    },
  },
  {
    id: 5,
    name: 'Training and Capacity Building',
    description:
      'Leadership growth, mentoring, and practical training opportunities for young believers preparing to serve well.',
    type: 'Formation',
    leader: {
      name: 'LP 103 Team',
      position: 'Training and mentoring leads',
      image: '/brand/rccg-logo.png',
    },
  },
  {
    id: 6,
    name: 'Events and Fellowship',
    description:
      'Gatherings that strengthen belonging, collaboration, and healthy Christian community among youth and young adults.',
    type: 'Community',
    leader: {
      name: 'LP 103 Team',
      position: 'Fellowship coordinators',
      image: '/brand/rccg-logo.png',
    },
  },
]

export const departmentShowcaseImages = [
  asset('/department/1.png'),
  asset('/department/2.png'),
  asset('/department/3.png'),
  asset('/department/4.png'),
]

export const branches: Branch[] = [
  {
    id: 1,
    name: 'Main Venue',
    address: lp103Address,
    details: 'Use the Connect page for the latest service times and zone details.',
  },
  {
    id: 2,
    name: 'Nearest RCCG Parish',
    address:
      'RCCG says the church now has more than 50,000 parishes across 197 countries and territories.',
    details: 'Start with the official RCCG website for broader parish information.',
  },
  {
    id: 3,
    name: 'YAYA Global Community',
    address:
      'RCCG YAYA Global provides prayer, youth discipleship, and connection opportunities online.',
    details: 'Join youth-focused community while you connect locally.',
  },
  {
    id: 4,
    name: 'Counseling and Care',
    address:
      'LP 103 can walk with you through prayer needs, counseling, and your next practical step.',
    details: 'Reach out through the connect page or by email.',
  },
]

export const givingOptions: GivingOption[] = [
  {
    id: 1,
    title: 'LP 103 Giving Details',
    detail: 'Request the current local giving instructions',
    note:
      'Public LP 103 bank details were not available online, so the safest route is to request the latest verified instructions directly from the team.',
    href: 'mailto:rccglp103yaya@gmail.com',
    cta: 'Email LP 103',
  },
  {
    id: 2,
    title: 'RCCG Online Giving',
    detail: 'Use the official RCCG payments portal',
    note:
      'For mission-wide giving, support, and official church donations, use the public RCCG giving page.',
    href: ctaLinks.onlineGiving,
    cta: 'Open Giving Portal',
  },
  {
    id: 3,
    title: 'YAYA Global',
    detail: 'Stay connected with youth-focused programs and updates',
    note:
      'RCCG YAYA Global shares youth discipleship, prayer, training, and collaboration opportunities online.',
    href: ctaLinks.yayaGlobal,
    cta: 'Visit YAYA Global',
  },
]

export const footerContacts = [
  {
    label: 'Email',
    value: 'rccglp103yaya@gmail.com',
    icon: asset('/icons/email-icon.svg'),
  },
  {
    label: 'Location',
    value: lp103Address,
    icon: asset('/icons/location-pin-icon.svg'),
  },
  {
    label: 'Support',
    value: 'Use Connect or Counseling to request current zone and meeting details.',
    icon: asset('/icons/phone-icon.svg'),
  },
]

export const quickLinks: QuickLink[] = [
  {
    label: 'Official RCCG',
    href: ctaLinks.rccgHome,
    description: 'Worldwide website and public church information',
  },
  {
    label: 'Watch Live',
    href: ctaLinks.watchLive,
    description: 'Streams, broadcasts, and major RCCG events',
  },
  {
    label: 'YAYA Global',
    href: ctaLinks.yayaGlobal,
    description: 'Youth and young adult discipleship and community',
  },
  {
    label: 'Online Giving',
    href: ctaLinks.onlineGiving,
    description: 'Official RCCG giving portal',
  },
]

export const connectOptions = [
  'Find My Zone',
  'Need Counseling',
  'Prayer Request',
  'Serve With LP 103',
] as const
