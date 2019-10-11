const JSON = {
    fileName: '金相莉(前端)-大搜车-3年工作经验',
    basic: {
        name: '金相莉',
        items: [
            { top_text: 'brith:1993年', bottom_text: 'phone:13588304302' },
            { top_text: 'city:杭州', bottom_text: 'email:jinxiangli1001@163.com' },
            { top_text: 'educate:本科', bottom_text: 'experience:3年工作经验' }
        ]
    },
    target: {
        target: 'Web前端开发工程师',
        detail: [
            '熟练使用 Vue / React / React Native 进行项目开发，熟悉 Vue 源码',
            '有 微信小程序 开发经验，有Express / koa 框架使用经验',
            '熟悉ES6+、 TypeScript，基本的数据结构与算法、常用设计模式',
            '熟悉前端工程化开发环境的搭建，webpack配置，对网站的性能优化有一定的经验',
            '熟悉 HTTP 协议及浏览器的异步机制、渲染机制、缓存机制',
            '熟练掌握 Git Flow 规范流程',
        ]
    },
    education: {
        basic: [
            '浙江科技学院',
            '计算机科学与技术',
            '2013 — 2017'
        ]
    },
    skill: [
        '熟悉前端工程化开发环境的搭建，webpack配置，对网站的性能优化有一定的经验',
        '熟悉ES6+、 TypeScript，基本的数据结构与算法、常用设计模式',
        '熟悉 HTTP 协议及浏览器的异步机制、渲染机制、缓存机制',
        '熟练掌握 Git Flow 规范流程',
    ],
    project: [
        {
            name: '医生出诊界面 (React + TypeScript)： ',
            href: ' https://github.com/Sanily/doctor_react_ts'
        }, {
            name: '医生出诊界面后端API (Koa2)： ',
            href: ' https://github.com/Sanily/doctor_koa2'
        }, {
            name: '选择未来时间的选择器 (Vue)： ',
            href: ' https://github.com/Sanily/timer-select'
        }
    ],
    companies: {
        dasouche: {
            name: '大搜车',
            duty: '前端开发工程师',
            date: '2018.05 — 2019.05',
            tech_stack: 'Vue、React Native、hybrid',
            project: [
                {
                    name: '工作台App',
                    date: '2019.03 — 2019.05',
                    detail: [
                        {
                            description: '用 RN 开发的工作台App。负责用户中心、目标管理、用户管理三个模块的开发。',
                        },
                        {
                            content: '遵循单一职责原则，根据数据边界划分组件，充分利用组合。',
                        },
                        {
                            results: '引入 mobx 进行状态管理，根据页面功能模块划分不同的store来管理数据，' +
                                     '使页面之间数据解耦，开发效率提升50%以上。'
                        }
                    ]
                },
                {
                    name: '弹个车App',
                    date: '2018.06 — 2019.05',
                    detail: [
                        {
                            description: '基于 hybrid 技术开发的弹个车App，是由三十多人协同参与，Web端、app端、RN、服务端联动的项目。'
                        },
                        {
                            content: `用 Vue 开发的车主服务模块，
                            进行APP页面开发迭代、
                            参与业务讨论。`
                        },
                        {
                            content: '掌握大型项目协作开发的规范、技巧和经验。'
                        },
                        {
                            content: '通过调用原生App的方法，与App进行交互，提高了流畅性。'
                        },
                        {
                            content: '使用 Easy Mock 工具模拟接口数据格式，优化开发流程。'
                        },
                        {
                            results: '工作中注重页面交互逻辑方面的优化，以及设计稿的高度还原。'
                        },
                        {
                            results: '与同事互相code review，发现bug并避免了事故，优化了代码质量。'
                        },
                        {
                            results: '利用单例模式实现页面弹窗，改善用户体验。'
                        },
                        {
                            results: '利用策略模式优化表单校验工作，改善网络性能。'
                        }
                    ]
                }
            ]
        },
        newdun: {
            name: '牛盾网络',
            duty: '前端开发工程师',
            date: '2017.10 — 2018.05',
            tech_stack: 'Vue、vuex、echarts',
            project: [
                {
                    name: '云管家购买页面',
                    date: '2018.04 — 2018.05',
                    detail: [
                        {
                            description: `用 Vue 开发的代理云主机购买页面、购物车页面，实现对市面上主流云服务器的代理购买。`,
                        },
                        {
                            content: '通过Vuex进行同级非兄弟组件之间的状态通信，管理购物车内商品信息。',
                        },
                        {
                            results: '抽象小型组件实现复用，构建ajax缓冲队列改善性能。',
                        }
                    ]
                },
                {
                    name: '云管家跨云管理',
                    date: '2018.03 — 2018.05',
                    detail: [
                        {
                            description: `用 Vue 开发的云服务器管理网站，对接阿里云、腾迅云、AWS等厂商，实现一站式管理云服务器。借助 Element—UI 实现前端页面与业务逻辑代码的快速编写。`
                        },
                        {
                            content: '负责导入主机、图表信息展示、主机操作、安全组等模块。'
                        },
                        {
                            results: '通过自己封装的页面组件和逻辑组件实现代码的复用。提出在前端小组使用 Git Flow 协作并落实。'
                        },
                        {
                            results: '负责组织前端代码的code review，梳理前端项目工作内容，并尽己所能引入新的技术栈。'
                        },
                    ]
                },
                {
                    name: '牛盾私有云',
                    date: '2017.11 — 2018.05',
                    detail: [
                        {
                            content: '独立负责官网及后台的前端开发工作，完成私有云一期二期控制台的页面展示、数据交互、逻辑处理，以及购买页面的编写。'
                        },
                        {
                            results: '将部分数据运算转移至前端，以减少ajax请求。用@media适配三屏。'
                        },
                    ]
                }
            ]
        },
        yuncheng: {
            name: '昀橙网络',
            duty: '前端开发工程师',
            date: '2016.10 — 2017.10',
            tech_stack: 'Vue、JQuery',
            project: [
                {
                    name: '衣订Pad端',
                    date: '2017.08 — 2017.10',
                    detail: [
                        {
                            description: '用Vue开发的精简版网站。'
                        },
                        {
                            results: '实现了组件复用和数据的懒加载。'
                        }
                    ]
                },
                {
                    name: '衣订PC端',
                    date: '2017.04 — 2017.08',
                    detail: [
                        {
                            description: '这是一个小型企业的订货与客户管理软件。',
                        },
                        {
                            results: '用原生JS进行开发，开发了分页组件，更好地复用了代码。'
                        }
                    ]
                },
                {
                    name: '易账房',
                    date: '2016.10 — 2017.02',
                    detail: [
                        {
                            description: '这是一个针对小微企业的记账网站。',
                        },
                        {
                            content: '使用公司框架开发的一套SPA项目，使用Ajax完成了与后端的交互，用ejs模板引擎完成对页面的渲染。',
                        },
                        {
                            results: '运用继承机制解决了共同代码的复用问题。'
                        }



                    ]
                }
            ]
        }
    }
}

export default JSON