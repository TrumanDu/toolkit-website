import { defineConfig } from 'dumi';

export default defineConfig({
  analytics: {
    // 百度统计的 key
    baidu: '8f79f3f88f9137e78282b173675fae25',
  },
  themeConfig: {
    name: 'Toolkit',
    logo: '/logo.png',
    footer: `Powered by  <a href="https://www.trumandu.top">TrumanDu</a>`,
    socialLinks: {
      github: 'https://github.com/TrumanDu/toolkit',
    },
  },
});
