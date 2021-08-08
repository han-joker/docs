import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'zh-CN',
    title: '韩忠康的文档们',
    description: '韩忠康的文档们',

    base: '/docs/',
    dest: `./docs`,

    themeConfig: {
        logo: '/images/avatar.png',
        navbar: [
            {
                text: 'Go',
                children: [
                    {
                        text: 'Go',
                        link: '/go/',
                    },
                    {
                        text: '包',
                        children: [],
                    },
                    {
                        text: '框架',
                        children: [
                            {
                                text: 'Gin',
                                link: '/gin/',
                            },
                            {
                                text: 'Beego',
                                link: '/beego/',
                            },
                        ],
                    },
                ],
            },
            {
                text: 'PHP',
                children: [
                    {
                        text: 'PHP',
                        link: '/php/',
                    },
                    {
                        text: '框架',
                        children: [
                            {
                                text: 'Laravel',
                                link: '/laravel/',
                            },
                            {
                                text: 'Swoole',
                                link: '/swoole/',
                            },
                        ],
                    },
                ],
            },
            {
                text: '前端 JS',
                children: [
                    {
                        text: 'HTML',
                        link: '/html/',
                    },
                    {
                        text: 'CSS',
                        link: '/css/',
                    },
                    {
                        text: 'JavaScript',
                        link: '/js/',
                    },
                    {
                        text: 'TypeScript',
                        link: '/ts/',
                    },
                    {
                        text: 'NodeJS',
                        link: '/nodejs/',
                    },
                    {
                        text: '库',
                        children: [
                            {
                                text: 'JQuery',
                                link: 'https://jquery.com/',
                            },
                            {
                                text: 'Momment',
                                link: 'http://momentjs.cn/',
                            },
                            {
                                text: 'Lodash',
                                link: 'https://lodash.com/',
                            },
                        ],
                    },
                    {
                        text: '框架',
                        children: [
                            {
                                text: 'Vue',
                                link: '/vue/',
                            },
                            {
                                text: 'React',
                                link: '/react/',
                            },
                        ],
                    },
                    {
                        text: 'UI 组件',
                        children: [
                            {
                                text: 'Antd',
                                link: '/antd/',
                            },
                            {
                                text: 'element',
                                link: '/element/',
                            },
                        ],
                    },
                ],
            },
            {
                text: '存储',
                children: [
                    {
                        text: 'MySQL',
                        link: '/mysql/',
                    },
                    {
                        text: 'SQLite',
                        link: '/sqlite/',
                    },
                    {
                        text: 'Redis',
                        link: '/redis',
                    },
                ],
            },
            {
                text: '平台部署',
                children: [
                    {
                        text: 'Nginx',
                        link: '/nginx/',
                    },
                    {
                        text: 'Linux',
                        link: '/linux/',
                    },
                    {
                        text: 'Docker',
                        link: '/docker/',
                    },
                    {
                        text: 'K8S',
                        link: '/k8s',
                    },
                ],
            },
            {
                text: '基础架构',
                children: [
                    {
                        text: '数据结构',
                        link: '/data-structure/',
                    },
                    {
                        text: '算法',
                        link: '/algrithm/',
                    },
                    {
                        text: '设计模式',
                        link: '/design-pattern/',
                    },
                    {
                        text: '高可用',
                        link: '/high-avaliable',
                    },
                    {
                        text: '负载均衡',
                        link: '/load-blance',
                    },
                    {
                        text: 'HTTP',
                        link: '/http',
                    },
                    {
                        text: 'TCP/IP',
                        link: '/tcpip',
                    },

                ],
            },
            // NavbarItem
            {
                text: 'GitHub',
                link: 'https://github.com/han-joker/',
            },
        ],
        sidebar: {
            '/go/': [
                { text: '安装', link: 'install' },
            ]
        },
    },
    plugins: [
        [
            'vuepress-plugin-comment',
            {
                choosen: 'valine',
                // options选项中的所有参数，会传给Valine的配置
                options: {
                    el: '#valine-vuepress-comment',
                    appId: 'iIfHxFIJJVlgNohEu3SqNyOO-gzGzoHsz',// your appId
                    appKey: 'GY0DMFiVCmakTPcypUL8IFIr', // your appKey
                    placeholder: '雁过留声，人过留名',
                    visitor: true,
                }
            }
        ]
    ]
})