import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline"; 
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Ex517', //站点标题
    description: 'Ex517',//mate标签description，多用于搜索引擎抓取摘要
    base: "",
    markdown: { 
        //行号显示
        lineNumbers: true, 
        //时间线
        config: (md) => {
        md.use(timeline);
        },
    }, 
    themeConfig:
    {
        nav:
        [
            {text: '517coding',link:"https://517coding.com"},
            {
                text: '开发人员',
                items:
                [
                    {
                        text: 'wsq127',
                        items:
                        [
                            { text: '主页', link: 'https://wsq127.top/' },
                            { text: 'Email', link: 'mailto:admin@wsq127.top' }
                        ]
                    },
                    {
                        text: 'zMr',
                        items:
                        [
                            { text: '博客', link: 'https://minecraftdream12345.github.io/' },
                            { text: 'Email', link: 'mailto:zhoumouren2010@outlook.com' }
                        ]
                    }
                ]
            },
            {
                text: '内测人员',
                items:
                [
                    {
                        text: 'sxr',
                        items:
                        [
                            { text: '主页', link: 'https://jiuci.top/' },
                            { text: 'Email', link: 'mailto:13625126063@163.com' }
                        ]
                    },
                    
                    {
                        text: 'yeyapro',
                        items:
                        [
                            { text: '主页', link: 'https://yeyanpro.cn/' },
                            { text: 'Email', link: 'mailto:wangletao123@163.com' }
                        ]
                    }
                ]
            }
        ],
        sidebar:
        [
            {
                text: '快速开始',
                items:
                [
                    { text: '简介', link: '/start' }
                ]
            },
            {
                text: '加载脚本',
                items:
                [
                    { text: 'Stylus 插件', link: '/stylus' },
                    { text: 'Tampermonkey 插件', link: '/tampermonkey' },
                    { text: '浏览器 userscript', link: '/userscript' }
                ]
            },
            {
                text: '开发日志', link: '/logs'
            }
        ]
    }
})
