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
  date: string
  link: string
}

export type SermonCard = {
  id: number
  title: string
  date: string
  description: string
  image: string
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

export type GivingAccount = {
  id: number
  name: string
  bank: string
  accountNumber: string
}

export type GivingCategory = {
  name: string
  accounts: GivingAccount[]
}

const siteAssetBase = 'https://www.rccgthebridge.com'

export const asset = (path: string) => `${siteAssetBase}${path}`

export const navItems: NavItem[] = [
  { label: 'Connect', href: '/connect' },
  { label: 'Zones', href: '/branches' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Counseling',
    href: 'https://counseling.rccgthebridge.com/',
    external: true,
  },
]

export const ctaLinks = {
  giving: '/giving',
  watchLive: 'https://www.youtube.com/channel/UCcar23Or-AmJIGZZTEZZS1A',
  counseling: 'https://counseling.rccgthebridge.com/',
  spotifyShow: 'https://open.spotify.com/show/7km452Z7IIKxa2sbYDfKng',
  youtubeChannel: 'https://www.youtube.com/@rccgthebridge',
}

export const homeHeroPhrases = [
  'Connecting the Word to the world',
  'Connect to Collect',
  'NIBI NI JESU WA',
  'WELCOME YOUR EXCELLENCY',
]

export const livestream = {
  previewImage: asset('/livescream/livestream.png'),
  title: 'LIVE STREAM SERVICE',
  serviceLabel: 'Sunday Service',
  serviceName: 'Thankgiving Service',
  date: 'Nov 1, 2025 • 8:00 AM',
  embedUrl:
    'https://www.youtube.com/embed/jEOExsOvtSA?si=RLcr98Hg-hb_KIkA&autoplay=1&rel=0&modestbranding=1',
}

export const services: Service[] = [
  {
    title: 'Sunday School',
    description: 'Guided by the RCCG Sunday School Manual...',
    schedule: 'Every Sunday • 7:30 AM',
    location: 'Lagos Airport Hotel, Ikeja, Lagos',
    image:
      'https://res.cloudinary.com/ducds3dmu/image/upload/v1757115358/udxz9bnwqj2tftp7ttnd.jpg',
  },
  {
    title: 'Sunday Service',
    description: "At The Bridge, Sunday isn't just a routine...",
    schedule: 'Every Sunday • 8:00 AM',
    location: 'Lagos Airport Hotel, Ikeja, Lagos',
    image:
      'https://res.cloudinary.com/ducds3dmu/image/upload/v1757115383/mmzxfpzq6zx5qiidap8i.jpg',
  },
  {
    title: 'Midweek Service',
    description: 'Midweek at The Bridge is your spiritual pit stop...',
    schedule: 'Every Wednesday • 6:00 PM - 7:30PM',
    location: 'Lagos Airport Hotel, Ikeja, Lagos',
    image:
      'https://res.cloudinary.com/ducds3dmu/image/upload/v1757115413/svfx1nqtxo5qmgqwbsjf.jpg',
  },
]

export const audioSermons: AudioSermon[] = [
  {
    id: 7,
    name: 'CONTENDING FOR THE FAITH OF THE FATHERS',
    date: '2025-09-01',
    link: 'https://open.spotify.com/episode/5wrEJjySJD3cyiifk9B4YI',
  },
  {
    id: 6,
    name: 'THE MANDATE TO TAKE GOSPEL EVERYWHERE',
    date: '2025-09-01',
    link: 'https://open.spotify.com/episode/0jNozikoWlRVEDbkwAwM0X?si=NZBQwErqRs-7L4-fqR0cDA',
  },
  {
    id: 5,
    name: 'A WINNING MENTALITY',
    date: '2025-09-09',
    link: 'https://open.spotify.com/episode/5WLUOCZAIzGQyBX98fcTSZ?si=7c5rQ6lnSMKWHFHv84G-EA',
  },
  {
    id: 4,
    name: 'SPIRITUAL INTELLEGENCE',
    date: '2025-09-15',
    link: 'https://open.spotify.com/episode/6FtANP6dJBYOFejbJOHTKW?si=THFefvgRQQ2rocJuwiaaxA',
  },
  {
    id: 3,
    name: 'SPIRITUAL HALFTIME',
    date: '2025-09-22',
    link: 'https://open.spotify.com/episode/1YLJPEtENzbW9tfnfATbGZ?si=_JWo5PixSJuWxcHKF0i8fw',
  },
  {
    id: 2,
    name: 'THE NEW SEASON PRAYER & SERMON',
    date: '2025-09-29',
    link: 'https://open.spotify.com/episode/2CVj3ZIeGpfnzw0afyc2Hs?si=o22o8IVnQnudDJ0W4dTsUA',
  },
]

export const sundaySermons: SermonCard[] = [
  {
    id: 6,
    title: 'First Sunday School',
    date: 'July 20, 2025',
    description:
      'We are called not just to steward God’s presence, but to influence systems and structures of this world for God’s glory, according to His patterns.',
    image:
      'https://res.cloudinary.com/ducds3dmu/image/upload/v1757115688/ifcxxwdrjcx7lpghtnf0.png',
  },
  {
    id: 7,
    title: 'Second Sunday Service',
    date: 'July 27, 2025',
    description:
      'Every Power Service at The Bridge, we experience changes in paradigms and realities. It’s never just a service, but a portal through which we enter new seasons.',
    image:
      'https://res.cloudinary.com/ducds3dmu/image/upload/v1757115794/xwj88efa2wd56exhf2p1.png',
  },
  {
    id: 8,
    title: 'Third Sunday Service',
    date: 'August 04, 2025',
    description:
      'This isn’t just another service, it’s a divine appointment to say “Thank You” for the seen and unseen, for the victories, the valleys, and the waiting rooms.',
    image:
      'https://res.cloudinary.com/ducds3dmu/image/upload/v1757115875/scl6zkozzpqabcq8mtcd.png',
  },
  {
    id: 9,
    title: 'Fourth Sunday Service',
    date: 'August 10, 2025',
    description:
      'Becoming an OVERCOMER is one thing, remaining in that state is another thing entirely.',
    image:
      'https://res.cloudinary.com/ducds3dmu/image/upload/v1757116132/rizok7v0z2pthidjew4c.png',
  },
]

export const historyEntries: HistoryEntry[] = [
  {
    id: 1,
    year: '2021',
    text: 'We began with a small team committed to transforming lives through faith and leadership.',
    image: asset('/gallery/bridge1.png'),
  },
  {
    id: 2,
    year: '2022',
    text: 'Our outreach expanded to multiple cities, bridging new communities together.',
    image: asset('/gallery/bridge2.png'),
  },
  {
    id: 3,
    year: '2023',
    text: 'We embraced digital platforms to extend our mission globally.',
    image: asset('/gallery/bridge3.png'),
  },
  {
    id: 4,
    year: '2024',
    text: 'A community of servant-leaders emerged, now influencing every sector of society.',
    image: asset('/gallery/bridge4.png'),
  },
]

export const pastorates: Pastor[] = [
  {
    id: 1,
    name: 'Pastor Oluwafemi Oyewunmi',
    position: 'Lead Pastor',
    image:
      'https://res.cloudinary.com/ducds3dmu/image/upload/v1757117102/iual2aa5iuydze23ambp.png',
  },
  {
    id: 2,
    name: 'Pastor (Mrs) Life Oyewunmi',
    position: 'Assistant Pastor',
    image:
      'https://res.cloudinary.com/ducds3dmu/image/upload/v1757117120/echibo61rai16bmhkzhu.png',
  },
  {
    id: 3,
    name: 'Pastor Olushola Oladejo',
    position: 'Assistant Pastor',
    image:
      'https://res.cloudinary.com/ducds3dmu/image/upload/v1757117134/d1pytirzwh7mwtycyni6.jpg',
  },
  {
    id: 4,
    name: 'Pastor (Mrs) Aderayo Oladejo',
    position: 'Assistant Pastor',
    image:
      'https://res.cloudinary.com/ducds3dmu/image/upload/v1757117148/oa5xazxvioqx2qao9w40.jpg',
  },
  {
    id: 5,
    name: 'Pastor Bolaji Asifat',
    position: 'Associate Pastor',
    image:
      'https://res.cloudinary.com/ducds3dmu/image/upload/v1757117163/olyai2xrwbjxwg0gdjco.png',
  },
  {
    id: 6,
    name: 'Pastor (Mrs) Asifat',
    position: 'Associate Pastor',
    image:
      'https://res.cloudinary.com/ducds3dmu/image/upload/v1757117175/teihpssacu7pifu75fno.jpg',
  },
]

export const departments: Department[] = [
  {
    id: 1,
    name: 'Sunday School',
    description: 'This is a department that handles sunday school.',
    type: 'Training',
    leader: {
      name: 'Dns Anuoluwapo',
      position: 'HOD Sunday School',
      image:
        'https://res.cloudinary.com/ducds3dmu/image/upload/v1756931970/gzrpwumgs6pg3esb0rad.png',
    },
  },
  {
    id: 2,
    name: 'Workers in Training / Believers Class',
    description: 'The unit administers the workers in training programme.',
    type: 'Training',
    leader: {
      name: 'Dns Oluwatobiloba O',
      position: 'HOD Trainings',
      image:
        'https://res.cloudinary.com/ducds3dmu/image/upload/v1756932072/dn8gdzrf7icje0iswray.png',
    },
  },
  {
    id: 3,
    name: 'School of Disciples (SOD)',
    description: 'Administers the School of Disciples programme.',
    type: 'Training',
    leader: {
      name: 'Dns Oluwatobiloba O',
      position: 'HOD Trainings',
      image:
        'https://res.cloudinary.com/ducds3dmu/image/upload/v1756932072/dn8gdzrf7icje0iswray.png',
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
    name: 'Main Branch',
    address: 'Lagos Airport Hotel, Ikeja, Lagos',
    details: 'Sunday Services 9AM',
  },
  {
    id: 2,
    name: 'The Solution Centre (Yaba)',
    address: '69 Ikorodu Rd, Fadeyi, Lagos 102215, Lagos',
    details: 'Thursdays: 6:00pm and Sundays: 2:30pm',
  },
  {
    id: 3,
    name: 'The City of God’s Delight (Somolu)',
    address: 'The Mine Studios, 40 Fola-Agoro, Somolu, Lagos',
    details: 'Thursdays: 6:00pm and Sundays: 2:30pm',
  },
  {
    id: 4,
    name: 'RCCG The Bridge (Paris)',
    address: '1 Place Martin Levasseur, 93400 Saint-Ouen-sur-Seine',
    details: 'Sunday Services 9AM',
  },
]

export const givingCategories: GivingCategory[] = [
  {
    name: 'Offering',
    accounts: [
      {
        id: 1,
        name: 'Access Bank',
        accountNumber: '1625197566',
        bank: 'RCCG The Bridge',
      },
      {
        id: 5,
        name: 'Premium Trust Bank',
        accountNumber: '0040086345',
        bank: 'RCCG THE BRIDGE',
      },
      {
        id: 6,
        name: 'Access Bank (USD)',
        accountNumber: '1507110616',
        bank: 'RCCG The Bridge',
      },
    ],
  },
  {
    name: 'Tithe',
    accounts: [
      {
        id: 2,
        name: 'Access Bank',
        accountNumber: '1625457237',
        bank: 'RCCG The Bridge',
      },
    ],
  },
  {
    name: 'Welfare',
    accounts: [
      {
        id: 4,
        name: 'Access Bank',
        accountNumber: '1507110616',
        bank: 'RCCG The Bridge',
      },
    ],
  },
  {
    name: 'Project',
    accounts: [
      {
        id: 3,
        name: 'Access Bank',
        accountNumber: '1506317164',
        bank: 'RCCG The Bridge',
      },
    ],
  },
]

export const footerContacts = [
  {
    label: 'Phone',
    value: '234-913-422-2220',
    icon: asset('/icons/phone-icon.svg'),
  },
  {
    label: 'Email',
    value: 'rccglp103yaya@gmail.com',
    icon: asset('/icons/email-icon.svg'),
  },
  {
    label: 'Location',
    value: 'Lagos Airport Hotel, Ikeja.',
    icon: asset('/icons/location-pin-icon.svg'),
  },
]

export const socialLinks = [
  {
    label: 'YouTube',
    href: 'https://youtube.com/@rccgthebridge',
    icon: asset('/icons/social-icon-1.svg'),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/rccgthebridge',
    icon: asset('/icons/social-icon-2.svg'),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/rccgthebridge',
    icon: asset('/icons/social-icon-3.svg'),
  },
]

export const connectOptions = [
  'Prayer Request',
  'Need Counseling',
  'Join the Community',
] as const
