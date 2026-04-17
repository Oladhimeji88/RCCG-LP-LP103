// Edit this file to update the website's content in one place.
// Change names, links, address, events, page copy, contact info, and major section text here.
import {
  bannerImage,
  picture1,
  picture2,
  picture3,
  picture4,
  picture5,
  picture6,
  picture7,
} from './pictureAssets'

const churchName = 'Province 103 Youth, LP 103'
const shortName = 'LP 103'
const email = 'rccglp103yaya@gmail.com'
const address = '11 Odu Onikosi Avenue, opposite LASUED, Otto Awori, Lagos State'

export const siteContent = {
  brand: {
    churchName,
    shortName,
    email,
    address,
    supportText: 'Use Connect or Counseling to request current zone and meeting details.',
    footerDescription:
      `${churchName} is a youth-focused community rooted in the wider RCCG mission, shaped by prayer, discipleship, service, and witness.`,
    footerTaglineLines: [
      'This is not just church.',
      `This is ${shortName}.`,
      'This is home.',
    ],
  },
  navigation: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Jobs', href: '/jobs' },
      { label: 'Connect', href: '/connect' },
      { label: 'Zones', href: '/branches' },
      { label: 'About Us', href: '/about' },
      { label: 'Counseling', href: '/counseling' },
    ],
  },
  links: {
    giving: '/giving',
    watchLive: 'https://www.youtube.com/@rccglive/streams',
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
    youtubeChannel: 'https://www.youtube.com/@rccglive',
  },
  home: {
    hero: {
      eyebrow: 'PROVINCE 103 YOUTH, LP 103',
      phrases: [
        'To Make Heaven',
        'Take Many With Us',
        'Holiness Our Lifestyle',
        'Become A Witness',
      ],
      description:
        'A youth expression rooted in the official RCCG mission: heaven in view, many souls reached, holiness at the center, and witnesses raised for every sphere of life.',
    },
    upcomingEvents: {
      eyebrow: 'Upcoming Events',
      title: `What is coming up at ${shortName}`,
      description:
        'A quick look at the recurring gatherings and community rhythms we want you to be part of.',
      ctaLabel: 'Get Event Updates',
      items: [
        {
          id: 1,
          label: 'This Sunday',
          title: 'Sunday Worship Gathering',
          schedule: 'Every Sunday',
          description:
            `Join the ${shortName} family for worship, the Word, prayer, and community.`,
          location: address,
          image: picture1,
        },
        {
          id: 2,
          label: 'Midweek',
          title: 'Word and Prayer Recharge',
          schedule: 'Weekly gathering',
          description:
            'A focused midweek moment for Bible teaching, prayer, and spiritual refreshment.',
          location: address,
          image: picture2,
        },
        {
          id: 3,
          label: 'Stay Connected',
          title: 'Youth Community Meetups',
          schedule: `Schedules shared through ${shortName} channels`,
          description:
            'Get updates on fellowships, youth hangouts, prayer moments, and special gatherings.',
          location: 'Use the Connect page for the latest event details.',
          image: picture3,
        },
      ],
    },
    livestream: {
      title: 'WATCH RCCG LIVE',
      serviceLabel: 'Official RCCG broadcast',
      serviceName: 'Streams, congresses and special services',
      subtitle:
        'Follow official RCCG and YAYA channels for current live services, congresses, and youth-focused gatherings.',
      previewImage: bannerImage,
      primaryCta: 'Watch Live',
      secondaryCta: 'YouTube Channel',
    },
    mission: {
      lines: [
        'We make heaven our priority,',
        'we take as many people with us as possible,',
        'holiness remains our lifestyle,',
        'and we stay ready to witness everywhere.',
      ],
      ctaLabel: `About ${shortName}`,
    },
    services: {
      title: 'How We Gather and Grow',
      description:
        `${shortName} is being shaped by the public teaching, mission, and youth emphasis of RCCG and RCCG YAYA.`,
      items: [
        {
          title: 'Bible Teaching',
          description:
            'RCCG teaches that the Scriptures were written by holy men as they were inspired by the Holy Spirit, so LP 103 gives the Word a central place in every gathering.',
          schedule: 'Weekly study rhythms',
          location: address,
          image: picture5,
        },
        {
          title: 'Prayer and Holiness',
          description:
            "The RCCG mission calls believers to live in holiness and carry God's presence everywhere, so prayer remains one of the strongest cultures shaping LP 103.",
          schedule: 'Weekly prayer gatherings and special prayer calls',
          location: address,
          image: picture6,
        },
        {
          title: 'Witness and Outreach',
          description:
            'From Go A Fishing to Vision 2032, RCCG keeps evangelism at the center. LP 103 exists to raise young believers who live and speak the gospel boldly.',
          schedule: 'Seasonal outreaches and community action',
          location: address,
          image: picture7,
        },
      ],
    },
    officialResources: {
      title: 'Official RCCG Resources',
      description:
        'These public resources shaped the LP 103 refresh and are a good place to understand the wider RCCG vision.',
      ctaLabel: 'Visit RCCG Official Site',
      items: [
        {
          id: 1,
          name: 'RCCG Mission and Vision',
          source: 'Official RCCG',
          description:
            "See the church's core mission points around heaven, discipleship, holiness, and church planting.",
          link: 'missionVision',
        },
        {
          id: 2,
          name: 'RCCG Statement of Belief',
          source: 'Official RCCG',
          description:
            "Review the church's public teaching on Scripture, salvation, the Holy Spirit, prayer, and Christian living.",
          link: 'beliefs',
        },
        {
          id: 3,
          name: 'RCCG YAYA Global',
          source: 'Official RCCG YAYA',
          description:
            'Explore youth and young adult discipleship, prayer, training, and community from the official YAYA platform.',
          link: 'yayaGlobal',
        },
      ],
    },
    focusCards: {
      title: `What Shapes ${shortName}`,
      description:
        `Public ${shortName} details online are limited, so the site now reflects verified RCCG and YAYA context instead of copied local specifics.`,
      ctaLabel: 'Explore YAYA Global',
      items: [
        {
          id: 1,
          title: 'Born in 1952',
          label: 'Our history',
          description:
            'RCCG began in Lagos in 1952 under Pa Josiah Akindayomi and has grown into a worldwide movement of churches and ministries.',
          image: picture1,
          link: 'history',
        },
        {
          id: 2,
          title: '50,000+ Parishes',
          label: 'Global footprint',
          description:
            'RCCG says the church now serves more than 50,000 parishes across 197 countries and territories.',
          image: picture2,
          link: 'rccgHome',
        },
        {
          id: 3,
          title: 'Youth and Young Adults',
          label: 'YAYA Global',
          description:
            'RCCG YAYA focuses on discipleship, prayer, training, collaboration, and leadership development for young adults and youth.',
          image: picture3,
          link: 'yayaGlobal',
        },
        {
          id: 4,
          title: 'Vision 2032',
          label: 'Evangelism',
          description:
            'The Go A Fishing emphasis and Vision 2032 call believers to become intentional witnesses who reach souls everywhere.',
          image: picture4,
          link: 'goLifestyle',
        },
      ],
    },
    counseling: {
      title: 'Soul care still matters here',
      description:
        'RCCG YAYA reminds young people that it is okay not to have all the answers. LP 103 wants to offer a listening ear, prayerful support, and wise next steps whenever life feels heavy.',
      primaryCta: 'Go to counseling',
      secondaryCta: 'YAYA counselor',
      backgroundImage: picture6,
      image: picture7,
    },
    contact: {
      title: 'How can we help?',
      description:
        'Need zone details, prayer support, counseling, or a next step into community? Drop us a note.',
      notice: 'Your request has been captured in this demo build.',
    },
  },
  about: {
    intro: {
      eyebrow: `About ${shortName}`,
      title: `${shortName} is a youth-focused expression rooted in the wider RCCG mission.`,
      description:
        `Public ${shortName} details online are limited, so this site now reflects verified RCCG and RCCG YAYA history, beliefs, leadership, and ministry direction.`,
      summary:
        'RCCG publicly teaches salvation in Jesus Christ, the authority of Scripture, the ministry of the Holy Spirit, prayer, holiness, and a life of witness. RCCG YAYA extends that heartbeat into the world of youth and young adults through discipleship, training, collaboration, and community.',
    },
    missionDirection: {
      missionTitle: 'RCCG Mission',
      missionText:
        'To make heaven, to take as many people with us as possible, to live in holiness, and to plant churches in ways that keep the gospel close to people everywhere.',
      directionTitle: 'YAYA Direction',
      directionText:
        'RCCG YAYA highlights discipleship, prayer, training, leadership development, collaboration, and even digital church planting as part of the church\'s youth movement.',
      image: picture5,
    },
    history: {
      title: 'RCCG History',
      description:
        'This timeline is based on the public history shared by RCCG, not inherited placeholder content.',
      items: [
        {
          id: 1,
          year: '1952',
          text:
            'RCCG began as the Glory of God Fellowship in Ebute-Metta, Lagos, and soon became The Redeemed Christian Church of God.',
          image: picture4,
        },
        {
          id: 2,
          year: '1973',
          text:
            'Pastor E.A. Adeboye joined the church as a young university lecturer, marking the beginning of a new chapter in its expansion.',
          image: picture5,
        },
        {
          id: 3,
          year: '1981',
          text:
            'Pastor E.A. Adeboye became General Overseer, and the church entered a season of rapid local and global growth.',
          image: picture6,
        },
        {
          id: 4,
          year: 'Today',
          text:
            'RCCG reports more than 50,000 parishes in 197 countries and territories, with youth movements like YAYA mobilizing discipleship and outreach across generations.',
          image: picture7,
        },
      ],
    },
    leadership: {
      title: 'Visible Leadership',
      description:
        'These names come from official RCCG and RCCG YAYA public pages.',
      items: [
        {
          id: 1,
          name: 'Pastor E.A. Adeboye',
          position: 'General Overseer, RCCG Worldwide',
          image: 'https://www.rccg.org/wp-content/uploads/2025/01/kj-799x1024.png',
        },
        {
          id: 2,
          name: 'Pastor Babasola Olukoya',
          position: 'Pastor in Charge, Young Adults and Youth Affairs',
          image: 'https://rccgyayaglobal.org/images/leaders/sola.jpg',
        },
        {
          id: 3,
          name: 'Pastor Sola Akinbile',
          position: 'Assistant Pastor in Charge, Young Adults and Youth Affairs',
          image: 'https://rccgyayaglobal.org/images/leaders/sola.jpeg',
        },
      ],
    },
    ministry: {
      title: 'Ministry Expressions',
      description:
        `These ministry expressions are written for ${shortName} using verified RCCG and YAYA themes, not copied local department lists.`,
      ctaLabel: 'Explore Service Areas',
    },
    join: {
      eyebrow: 'Join The Community',
      title: `Ready to find your place in ${shortName}?`,
      primaryCta: 'Connect with Us',
      secondaryCta: 'Explore Zones',
    },
  },
  connect: {
    eyebrow: 'Connect With Us',
    title: 'Need a zone, prayer support, or counseling?',
    description:
      `Reach ${shortName} for the latest meeting details and next steps. Where public local information is limited, we now point you to verified RCCG and RCCG YAYA resources as well.`,
    notice: 'Your message has been captured in this demo build.',
    requestOptions: [
      'Find My Zone',
      'Need Counseling',
      'Prayer Request',
      'Serve With LP 103',
    ],
  },
  zones: {
    eyebrow: 'Our Zones',
    title: `Find your next step into ${shortName}.`,
    description:
      `Public zone listings for ${shortName} are limited online, so this page points you toward the safest and most current ways to connect.`,
    ctaLabel: 'Connect with Us',
    items: [
      {
        id: 1,
        name: 'Main Venue',
        address,
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
    ],
  },
  departments: {
    eyebrow: 'Service Areas',
    title: 'Ministry expressions shaped by RCCG and YAYA.',
    description:
      'This page replaces copied local department listings with ministry areas grounded in official RCCG beliefs, youth discipleship, prayer, outreach, and service.',
    showcaseImages: [
      picture1,
      picture2,
      picture3,
      picture4,
    ],
    items: [
      {
        id: 1,
        name: 'Discipleship and Bible Study',
        description:
          'Spaces for Scripture, doctrine, and steady spiritual growth grounded in the public beliefs of RCCG.',
        type: 'Formation',
        leader: {
          name: 'LP 103 Team',
          position: 'Bible and discipleship leads',
          image: picture1,
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
          image: picture2,
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
          image: picture3,
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
          image: picture4,
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
          image: picture5,
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
          image: picture6,
        },
      },
    ],
  },
  counseling: {
    header: {
      eyebrow: 'Counseling',
      title: 'You do not have to walk through hard seasons alone.',
      description:
        'RCCG YAYA reminds young people that it is okay not to have all the answers. LP 103 offers a caring environment where people can be heard, supported, prayed with, and guided with wisdom.',
      primaryCta: 'Request Support',
      secondaryCta: 'Email Us',
      tertiaryCta: 'YAYA Counselor',
      image: picture7,
    },
    help: {
      title: 'How We Can Help',
      description:
        'Our counseling ministry is designed to offer soul care with empathy, confidentiality, and biblical perspective.',
      areas: [
        {
          title: 'Emotional Support',
          description:
            'A safe space to talk through pressure, fear, grief, or seasons that feel heavy.',
        },
        {
          title: 'Relationship Guidance',
          description:
            'Prayerful and practical support for friendships, family concerns, courtship, and marriage.',
        },
        {
          title: 'Purpose and Direction',
          description:
            'Encouragement for decisions around calling, education, work, and next steps.',
        },
        {
          title: 'Spiritual Care',
          description:
            'Biblical counsel rooted in compassion, discipleship, prayer, and renewed hope.',
        },
      ],
    },
    expectations: {
      title: 'What To Expect',
      description: 'We want the process to feel clear, kind, and safe from the first step.',
      steps: [
        {
          title: 'Reach Out',
          description:
            'Send us a message through the connect page and let us know how we can support you.',
        },
        {
          title: 'We Follow Up',
          description:
            'Our team reviews each request carefully and responds with the right next step.',
        },
        {
          title: 'Receive Care',
          description:
            'You will be guided with warmth, confidentiality, prayer, and practical counsel.',
        },
      ],
    },
    finalCta: {
      title: 'Ready to speak with someone?',
      description:
        'Reach out through the connect page, email us directly, or use the wider YAYA counseling route if you need another support option.',
      primaryCta: 'Go to Connect',
      secondaryCta: 'Send Email',
    },
  },
  giving: {
    title: 'Give with clarity and confidence',
    subtitle:
      'We removed unverified bank details and now point you to the safest current giving routes.',
    heroImage: picture5,
    options: [
      {
        id: 1,
        title: 'LP 103 Giving Details',
        detail: 'Request the current local giving instructions',
        note:
          'Public LP 103 bank details were not available online, so the safest route is to request the latest verified instructions directly from the team.',
        href: `mailto:${email}`,
        cta: 'Email LP 103',
      },
      {
        id: 2,
        title: 'RCCG Online Giving',
        detail: 'Use the official RCCG payments portal',
        note:
          'For mission-wide giving, support, and official church donations, use the public RCCG giving page.',
        href: 'onlineGiving',
        cta: 'Open Giving Portal',
      },
      {
        id: 3,
        title: 'YAYA Global',
        detail: 'Stay connected with youth-focused programs and updates',
        note:
          'RCCG YAYA Global shares youth discipleship, prayer, training, and collaboration opportunities online.',
        href: 'yayaGlobal',
        cta: 'Visit YAYA Global',
      },
    ],
  },
  footer: {
    backgroundImage: picture7,
    quickLinks: [
      {
        label: 'Official RCCG',
        href: 'rccgHome',
        description: 'Worldwide website and public church information',
      },
      {
        label: 'Watch Live',
        href: 'watchLive',
        description: 'Streams, broadcasts, and major RCCG events',
      },
      {
        label: 'YAYA Global',
        href: 'yayaGlobal',
        description: 'Youth and young adult discipleship and community',
      },
      {
        label: 'Online Giving',
        href: 'onlineGiving',
        description: 'Official RCCG giving portal',
      },
    ],
  },
} as const

export type SiteContent = typeof siteContent
