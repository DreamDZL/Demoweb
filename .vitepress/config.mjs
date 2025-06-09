import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Demoweb/",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  title: "NATUS-VINCERE",
  description: "天生赢家",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    outlineTitle: "文章目录",
    outline:[2,6],

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "查找",
            buttonAriaLabel:"查找",
          },
          modal: {
            noResultsText: "无法搜索到",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText:"切换",
            },
          },
        },
      },
    },

    nav: [
      {
        text: 'Services', items: [
          { text: '党员之家', link: '/api-examples.md' },
          { text: '学院工作', link: '/api-examples.md' },
          { text: '支部工作', link: '/api-examples.md' },
          { text: '班级工作', link: '/api-examples.md' }
      ] },
      { text: 'Studies', items: [
        { text: '选课', link: '/api-examples.md' },
        { text: '基础课', link: '/api-examples.md' },
        { text: '专业课', link: '/api-examples.md' },
        { text: '公选课', link: '/api-examples.md' }
      ] },
      { text: 'Develops', items: [
        { text: '学科竞赛', link: '/api-examples.md' },
        { text: '创新创业', link: '/api-examples.md' },
        { text: '评奖评优', link: '/api-examples.md' },
        { text: '兴趣', link: '/api-examples.md' }
      ] }
    ],

    sidebar: false,
    aside:"left",


    socialLinks: [
      { icon: 'github', link: 'https://github.com/DreamDZL' }
    ],

    footer: {
      copyright: "Copyright © 2025-present DreamZL"
    }
  }
})
