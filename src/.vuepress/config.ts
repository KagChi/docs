import { defaultTheme } from "vuepress";
import { description } from "../../package.json";
import { docsearchPlugin, } from "@vuepress/plugin-docsearch";

export default {
  title: 'API Documentation',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  lang: 'en-US',
  theme: defaultTheme({
    repo: 'KagChi/docs',
    editLinks: true,
    lastUpdated: true,
    sidebar: {
      '/': [
        {
          text: "Home",
          children: [
              '/'
          ]
        },
        {
          text: "Rate Limits",
          children: [
              '/rate-limits/'
          ]
        },
        {
          text: "Routes",
          children: [
              '/routes/'
          ]
        }
      ]
    }
  }),
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    docsearchPlugin({
        appId: "Y0XFUMYGWX",
        apiKey: "833870ae918c791de17adb048010e306",
        indexName: 'Api Documentation'
    }),
  ]
}
