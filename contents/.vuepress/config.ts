import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { path } from '@vuepress/utils'


export default defineUserConfig<DefaultThemeOptions>({
    lang: 'zh-CN',
    title: '韩忠康的文档们',
    description: '韩忠康的文档们',

    base: '/docs/',
    dest: `./docs`,
    head: [
        [
            'link', 
            { 
                rel: 'icon', 
                href: '/docs/favicon.ico' 
            }
        ]
    ],
    themeConfig: {
        logo: '/images/avatar.png',
        contributors: false,
        lastUpdatedText: '更新时间',
        notFound: [
            '天可补，海可填，南山可移。日月既往，不可复追。——曾国藩',
        ],
        backToHome: '返回首页',
        navbar: [
            {
                text: 'Go',
                children: [
                    {
                        text: 'Go',
                        link: '/go/',
                    },
                    {
                        text: 'Modules',
                        children: [
                            {
                                text: 'GORM',
                                link: '/gorm/',
                            },
                            {
                                text: 'GRPC',
                                link: '/grpc/',
                            },
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
                        text: 'Redis',
                        link: '/redis',
                    },
                ],
            },
            {
                text: '工具部署',
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
                        link: '/k8s/',
                    },
                    {
                        text: '高可用',
                        link: '/high-avaliable/',
                    },
                    {
                        text: '负载均衡',
                        link: '/load-blance/',
                    },
                    {
                        text: "Let's Encrypt",
                        link: '/tools/lets-encrypt.md',
                    },
                    {
                        text: "mkcert",
                        link: '/tools/mkcert.md',
                    },
                    {
                        text: "Wireshark",
                        link: '/tools/wireshark.md',
                    },
                ],
            },
            {
                text: '协议算法',
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
                        text: 'HTTP',
                        link: '/protocol/http.md',
                    },
                    {
                        text: 'TCP',
                        link: '/protocol/tcp.md',
                    },

                ],
            },
            // NavbarItem
            {
                text: 'About',
                link: '/about',
            },
        ],
        sidebarDepth: 1,
        sidebar: {
            '/go/': [
                { 
                    text: 'Go', 
                    children: [
                        '/go/README.md',
                        '/go/install.md',
                        '/go/type-string.md',
                    ],
                },
            ],
            '/gin/': [
                { 
                    text: 'Gin', 
                    children: [
                        '/gin/README.md',
                    ],
                },
            ],
            '/gorm/': [
                { 
                    text: 'GORM', 
                    children: [
                        '/gorm/README.md',
                    ],
                },
            ],
            '/grpc/': [
                { 
                    text: 'GRPC', 
                    children: [
                        '/grpc/README.md',
                    ],
                },
            ],
            '/beego/': [
                { 
                    text: 'Beego', 
                    children: [
                        '/beego/README.md',
                    ],
                },
            ],
            '/php': [
                {
                    text: 'PHP',
                    children: [
                        '/php/README.md',
                    ]
                }
            ],
            '/laravel/': [
                { 
                    text: 'Laravel', 
                    children: [
                        '/laravel/README.md',
                    ],
                },
            ],
            '/protocol/': [
                {
                    text: '协议',
                    children: [
                        '/protocol/http.md',
                        '/protocol/tcp.md',
                        '/protocol/udp.md',
                        '/protocol/ip.md',
                    ]
                }
            ],
            '/tools/':[
                {
                    text: 'Tools',
                    children: [
                        '/tools/mkcert.md',
                        '/tools/lets-encrypt.md',
                        '/tools/wireshark.md',
                    ]
                }
            ],
            '/about': [
                '/about.md',
            ],
        },
    },
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                  '/': {
                    placeholder: 'Search',
                  },
                },
              },
        ],
    
        // [
        //     'vuepress-plugin-comment',
        //     {
        //         choosen: 'valine',
        //         // options选项中的所有参数，会传给Valine的配置
        //         options: {
        //             el: '#valine-vuepress-comment',
        //             appId: 'iIfHxFIJJVlgNohEu3SqNyOO-gzGzoHsz',// your appId
        //             appKey: 'GY0DMFiVCmakTPcypUL8IFIr', // your appKey
        //             placeholder: '雁过留声，人过留名',
        //             visitor: true,
        //         }
        //     }
        // ]
    ]
})