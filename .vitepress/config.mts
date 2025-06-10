import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Demoweb/",
  head: [["link", { rel: 'icon', href: '/logo.png' }]],
  title: "NATUS-VINCERE",
  description: "天生赢家",
  appearance:'dark', 
  
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    darkModeSwitchLabel: '深浅模式', 

    outline: {
      level: [2, 4],
      label: '当前页大纲',
    },

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
          { text: '党员之家', link: '/Pages/Services/DYZJ.md' },
          { text: '学院工作', link: '/Pages/Services/HZCU.md' },
          { text: '支部工作', link: '/Pages/Services/School.md' },
          { text: '班级工作', link: '/Pages/Services/Class.md' }
      ] },
      { text: 'Studies', items: [
        { text: '选课', link: '/Pages/Studies/Xk.md' },
        { text: '基础课', link: '/Pages/Studies/Jc.md' },
        { text: '专业课', link: '/Pages/Studies/Zy.md' },
        { text: '公选课', link: '/Pages/Studies/Gx.md' }
      ] },
      { text: 'Develops', items: [
        { text: '学科竞赛', link: '/Pages/Develops/Xkjs.md' },
        { text: '创新创业', link: '/Pages/Develops/Cxxl.md' },
        { text: '评奖评优', link: '/Pages/Develops/Pjpy.md' },
        { text: '兴趣', link: '/Pages/Develops/Xq.md' }
      ] }
    ],

    aside:'left',
      
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DreamDZL' }
    ],

    
    footer: {
      copyright: "Copyright © 2025-present DreamZL"
    }
  }
})
