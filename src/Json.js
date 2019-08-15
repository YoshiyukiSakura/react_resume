const JSON = {
    fileName: '金相莉-大搜车-13588304302',
    basic: {
        name: '金相莉',
        items: [
            { top_text: '1993年', bottom_text: '13588304302' },
            { top_text: '杭州', bottom_text: 'jinxiangli1001@163.com' },
            { top_text: '本科', bottom_text: '3年工作经验' }
        ]
    },
    target: [
        '擅长使用 Vue / React / React Native / TypeScript 进行项目开发',
        // 了解WebSocket编程
        '对微信小程序、WebApp 有一定的开发经验',
        '有一定的 Node.js 基础, 有 Express / koa 框架使用经验',
    ],
    education: [
        '浙江科技学院',
        '计算机科学与技术',
        '2013 — 2017'
    ],
    skill: [
        '熟悉 HTML5、CSS3、ES6',
        '了解 HTTP 协议及浏览器的兼容特性，理解浏览器异步机制',
        '能快速上手大部分前端项目，熟练前端工程化开发环境的搭建',
        '熟练掌握 Git Flow 规范流程'
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
                        '用 RN 开发的工作台App，解决了混合App效率低体验差，原生App开发周期长，真机调试门槛高的问题。',
                        '负责用户中心、目标管理、用户管理三个模块，使用 mobx 进行状态管理。',
                    ]
                },
                {
                    name: '弹个车App',
                    date: '2018.06 — 2019.05',
                    detail: [
                        '弹个车App是三十多人协同参与，Web端、app端、RN、服务端联动的项目。',
                        '负责车主服务模块Web端的开发，设计稿还原度高。',
                        '与同事互相code review，提高了代码质量。'
                    ]
                },
                {
                    name: '保险App',
                    date: '2018.10 — 2019.05',
                    detail: [
                        '独立负责Web端的组件开发，业务逻辑开发。',
                        '效率敏捷，交付准时。'
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
                    name: '云管家购买模块',
                    date: '2018.04 — 2018.05',
                    detail: [
                        '工作内容：负责代理云主机购买页面、购物车页面的开发。',
                        '改进：抽象小型组件实现复用，构建Ajax缓冲队列改善性能。',
                        '通过Vuex进行同级非兄弟组件之间的状态通信。'
                    ]
                },
                {
                    name: '云管家项目',
                    date: '2018.03 — 2018.05',
                    detail: [
                        '工作内容：借助Element—UI实现前端页面与业务逻辑代码的快速编写。',
                        '改进：通过自己封装的页面组件和逻辑组件实现代码的复用。提高工作效率。',
                        '提出在前端小组使用Git Flow协作并落实。'
                    ]
                },
                {
                    name: '牛盾私有云',
                    date: '2017.11 — 2018.05',
                    detail: [
                        '工作内容：完成私有云一期二期控制台的页面展示、数据交互、逻辑处理，以及购买页面的编写。',
                        '改进：将部分数据运算转移至前端，替代重新请求API。',
                        '用@media适配三屏。'
                    ]
                },
                // { // 可以删掉，没有技术难点
                //     name: '短信群发',
                //     date: '2017.11 — 2017.12',
                //     detail: [
                //         '工作内容：上传Excel至后端，解析后预览任务，创建短信群发任务。',
                //         '改进：异步多任务读取后端的Excel解析手机号结果，达到类似多线程的效果。'
                //     ]
                // }
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
                        '用Vue开发的精简版网站，实现了组件复用和数据的懒加载'
                    ]
                },
                {
                    name: '衣订PC端',
                    date: '2017.04 — 2017.08',
                    detail: [
                        '这是一个小型企业的订货与客户管理软件。',
                        '用原生JS进行开发，开发了分页组件，更好地复用了代码。'
                    ]
                },
                {
                    name: '易账房',
                    date: '2016.10 — 2017.02',
                    detail: [
                        '这是一个针对小微企业的记账网站。',
                        '工作内容：使用公司框架开发的一套SPA项目，使用Ajax完成了与后端的配合，用模板引擎完成对页面的渲染。',
                        '运用继承机制解决了共同代码的复用问题。'
                    ]
                }
            ]
        }
    }
}

export default JSON