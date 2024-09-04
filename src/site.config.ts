import type { SiteConfig, MenuLinks, SocialLinks } from '@/types'

export const siteConfig: SiteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: '杨沛东',
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: 'Mcflurry\'s Blog',
  // Meta property used to generate your sitemap and canonical URLs in your final build
  site: 'https://theme-astro-pure.vercel.app/',
  // Meta property used as the default description meta property
  description: 'Stay hungry, stay foolish',
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: 'zh-CN, en-US',
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: 'en_US',
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: 'en-US',
    options: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  // Customize
  pageSize: 8,
  /*
  registration: {
    url: 'https://icp.gov.moe/?keyword=APTX4869',
    text: '萌ICP备APTX4869号'
  },*/
  walineServerUrl: 'https://astro-theme-pure-waline.arthals.ink',
  applyFriendTip: {
    name: 'Mcflurry\'s Blog',
    slogan: '我们还有太多未完成的梦想。',
    url: 'https://www.pdyang.com/',
    avatar: 'https://postimg.cc/4n8c1d2S'
  }
}

// will be used in Footer.astro
export const socialLinks: SocialLinks = [
  {
    name: 'github',
    url: 'https://github.com/ypd666'
  }
]

export const menuLinks: MenuLinks = [
  {
    link: '/blog',
    label: 'Blog'
  },
  {
    link: '/projects',
    label: 'Projects'
  },
  {
    link: '/links',
    label: 'Links'
  },
  {
    link: '/about',
    label: 'About'
  }
]
