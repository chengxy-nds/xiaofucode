const {defineHopeConfig} = require("vuepress-theme-hope");
const {comment} = require("vuepress-plugin-comment2");

module.exports = defineHopeConfig({
    // 网站访问根路径
    base: '/xiaofu',
    // 网站名称
    title: '程序员小富',
    // SEO
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: 'https://firebook.oss-cn-beijing.aliyuncs.com/62fcad23e4b09067d4d31df8.png'
            }
        ],
        [
            'script',
            {
                src: '/js/love-me.js'
            }
        ],
    ],
    markdown: {
        lineNumbers: true,
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN',
        },
    },
    // 主题的配置  报错header 和 侧边栏
    themeConfig: {
        repo: "https://github.com/dromara/fast-request",
        repoLabel: "GitHub",
        plugins: {
            mdEnhance: {
                align: true,
                tasklist: true,
                container: true,
                lazyLoad: true,
                codegroup: true,
                mark: true,
                chart: true,
                flowchart: true,

            },
            comment: {
                type: 'giscus',
                repo: 'kings1990/giscus-fastrequest',
                repoId: 'R_kgDOHLlUsg',
                category: 'fastRequest',
                categoryId: 'DIC_kwDOHLlUss4COlsW'
            }
        },
        displayFooter: true,
        copyright: "Copyright © 2021-present Kings",
        themeColor: {
            blue: "#087CFA",
            red: "#FE2857",
            green: "#21D789",
            orange: "#FC801D",
            pink: "#FF318C",
            lightBlue: "#07C3F2"
        },
        iconPrefix: 'iconfont icon-',
        logo: 'https://firebook.oss-cn-beijing.aliyuncs.com/62fcad23e4b09067d4d31df8.png',
        lastUpdated: 'Last Updated',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
//      docsRepo: 'kings1990/restful-fast-request-doc',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        locales: {
            '/': {
                footer: "Theme by <a target='blank' href='https://vuepress-theme-hope.github.io/v2/zh/'>vuepress-theme-hope</a>",
                // 多语言下拉菜单的标题
                selectText: 'Languages',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                navbar: [
                    {
                        text: '首页',
                        link: '/',
                        icon: "number"
                    },
                    {
                        text: '快速开始',
                        link: '/guide/getstarted/start',
                        icon: "start1"
                    },
                    {
                        text: '电子书',
                        link: '/guide/feature',
                        icon: "tools"
                    },
                    {
                        text: '优质文章',
                        link: '/guide/script',
                        icon: "code-box-fill"
                    },
                    {
                        text: '开源项目',
                        link: '/guide/teachingVideo',
                        icon: "bilibili"
                    },
                    {
                        text: '加群学习',
                        link: '/guide/concatGroup',
                        icon: "contactGroup"
                    }
                ],
                sidebar: {
                    '/guide/': [
                        "introduce",
                        // {
                        //     text: "快速上手",
                        //     icon: "leibie",
                        //     prefix: "getstarted/",
                        //     collapsable: true,
                        //     children: [
                        //         "start",
                        //         "projectEnv",
                        //         "dataMapping",
                        //         "stringGenerationStrategy",
                        //         "icon",
                        //         "otherConfig",
                        //         "shortcut"
                        //     ],
                        // },
                        "install",
                        "feature",
                        "script",
                        "whatsnew",
                        "history",
                        "buy",
                        "concatGroup",
                        "faq"
                    ],
                }
            }
        }
    },
    // 插件配置 现在有一个全文检索插件
    plugins: [
        [
            '@vuepress/docsearch',
            {
                appId: "8FRYEU6KK8",
                apiKey: '84f513df1e83406ba42179da778d87b4',
                indexName: 'dromara-fast-request',
                locales: {
                    '/': {
                        placeholder: '搜索',
                        translations: {
                            button: {
                                buttonText: '搜索',
                            },
                        },
                    },
                },
            },
        ],

    ]
})
