import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Brain's Blog",
  description: "A VitePress Site",
  srcDir: 'src',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'VitePress', link: '/vite/VitePress' },
      { text: 'WSL2安装Ubuntu', link: '/ubuntu/WSL2安装Ubuntu' }
    ],

    sidebar: [
      {
        text: 'vite',
        items: [
          { text: 'VitePress', link: '/vite/VitePress' }
        ]
      },
      {
        text: 'ubuntu',
        items: [
          { text: 'WSL2安装Ubuntu', link: '/ubuntu/WSL2安装Ubuntu' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://www.cnblogs.com/link233' }
    ]
  }
})
