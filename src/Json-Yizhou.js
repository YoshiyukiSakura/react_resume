const JSON = {
    fileName: '辛一州-全栈开发-5年工作经验',
    basic: {
        name: '辛一州',
        items: [
            {top_text: 'brith:1994年', bottom_text: 'phone:17682319234'},
            {top_text: 'city:杭州', bottom_text: 'email:634554815@qq.com'},
            {top_text: 'educate:本科', bottom_text: 'experience:5年工作经验'}
        ]
    },
    target: {
        target: 'Web全栈开发岗位',
        detail: [
            '2013年开始接触Web开发，前、后端均有经验',
            '有带领团队经验，最多时10+人',
            '可流畅阅读英语文档、对话； 日语商务级水准',
            '技能：React ★★★★☆ | Vue ★★★★☆ | node.js ★★★★☆ | PHP ★★★★☆ | Golang ★★★★☆ | 数据结构与算法 ★★★☆☆ '
        ]
    },
    education: {
        basic: [
            '中国计量大学',
            '生物工程',
            '2013 — 2017'
        ],
        detail: [
            '在校期间作为社团技术负责人开发微信公众号后端服务',
            '参与学校组织的开发实验项目、比赛等，有若干开源上传至github.com/YoshiyukiSakura'
        ]
    },
    skill: [
        '熟悉现代前端工程化',
        '理解分布式系统的开发和部署，掌握docker使用',
        '了解 HTTP 协议及浏览器的兼容特性，理解浏览器异步机制',
        '熟练掌握 Git Flow 规范流程'
    ],
    project: [
        {
            name: "React 富文本编辑器",
            href: "https://github.com/opensquare-network/rich-text-editor",
        }, {
            name: 'jQuery grid',
            href: 'https://github.com/YoshiyukiSakura/grid'
        }
    ],
    companies: {
        zeroconf: {
            name: '国外远程兼职项目',
            duty: '全栈开发',
            date: '2020.06 — 2021.03',
            project: [
                {
                    name: 'bitcoin fee bot',
                    date: '2020.06 — 2020.06',
                    detail: [
                        {
                            description: '一个查询、订阅比特币、ETH手续费的tg机器人',
                        },
                        {
                            content: '基于node.js的tg包开发',
                        },
                        {
                            results: '有一定的用户订阅量'
                        }
                    ]
                },
                {
                    name: 'zero confirmation',
                    date: '2020.06 — 2020.08',
                    detail: [
                        {
                            description: '一套可以预计比特币到账时间的系统',
                        },
                        {
                            content: '基于koa2开发',
                        },
                        {
                            results: '项目公开API文档 https://docs.cryptopayments.io/blockchain-zeroconf'
                        }
                    ]
                },
                {
                    name: 'zero confirmation 管理后台',
                    date: '2019.12 — 2020.06',
                    detail: [
                        {
                            description: '多租户管理',
                        },
                        {
                            content: '前端基于React.js、后端基于fastify',
                        },
                        {
                            results: 'demo地址： https://cp.kirisamenana.com/'
                        }
                    ]
                },
            ]
        },
        opensquare: {
            name: 'OpenSquare (远程办公)',
            duty: '全栈开发',
            date: '2020.09 — 2022.06',
            project: [
                {
                    name: 'OpenSquare 为波卡生态创建体验良好的区块链应用',
                    date: '2020.09 — 2022.06',
                    detail: [
                        {description: '团队基于React.js和node技术栈为主',},
                        {content: 'coinask.io, 基于加密币的付费问答社区',},
                        {content: 'statescan.io, 资产 & NFT 浏览器',},
                        {content: 'subsquare.io, 民主治理工具平台',},
                        {
                            results: '所有项目均在计划预期时间完成开发并上线',
                        }
                    ]
                },
            ]
        },
        dbapp: {
            name: '安恒信息',
            duty: '后端开发&TL',
            date: '2019.11 — 2020.09',
            project: [
                {
                    name: 'eHR',
                    date: '2019.11 — 2020.09',
                    detail: [
                        {
                            description: '包含入转调离、合同、招聘等功能的人力资源信息化系统',
                        },
                        {
                            content: '带领2前端1后端同事工作，交付v1.0、v1.5版本，前端React，后端Golang自研框架',
                        },
                        {
                            results: '为本公司的HR业务基本实现了信息化、一定程度的自动化'
                        }
                    ]
                },
                {
                    name: '排序取号钉钉小程序',
                    date: '2019.12 — 2019.12',
                    detail: [
                        {
                            description: '用于公司内部员工办理业务时线上取号、叫号',
                        },
                        {
                            content: '全栈开发，前端uniapp，后端fastify.js',
                        },
                        {
                            results: '2个工作日完成了全部开发，由原本专人管理排队转为自助取号、叫号'
                        }
                    ]
                },
                {
                    name: '考试系统',
                    date: '2019.12 — 2020.06',
                    detail: [
                        {
                            description: '用于公司对渠道合作商的培训考核',
                        },
                        {
                            content: '全栈开发，前端vue，后端yii2(开源二开)',
                        },
                        {
                            results: '实现了Excel管理题库、指定难度随机组卷、客观题自动判分、管理后台主动评分等功能'
                        }
                    ]
                },
            ]
        },
        dongjiu: {
            name: '东九网络',
            duty: '后端开发',
            date: '2018.05 — 2019.05',
            project: [
                {
                    name: '17uoo网站重构',
                    date: '2018.05 — 2019.05',
                    detail: [
                        {
                            description: '一个游戏币交易网站，单日100w+PV，注册用户约60w，年流水数亿',
                        },
                        {
                            content: '主要接手长沙由创公司的游戏币交易平台www.17uoo.com，作为项目经理指挥技术团队10人工作。',
                        },
                        {
                            results: '将ASP.NET单机服务器端重构为php分布式，大幅度提升稳定性、功能迭代效率。'
                        }
                    ]
                },
            ]
        },
        newdun: {
            name: '牛盾网络',
            duty: '后端开发',
            date: '2017.11 — 2018.05',
            project: [
                {
                    name: '牛盾云管家',
                    date: '2018.03 — 2018.05',
                    detail: [
                        {
                            description: '后端4人协作；对接阿里云、腾迅云等厂商openApi，实现一站式管理做服务器。',
                        },
                        {
                            content: '负责公有云API的对接和架构设计。',
                        },
                        {
                            results: '实现了基于Yii的前后端异步通信架构。',
                        },
                        {
                            results: '实现了多线程处理任务队列提高效率。',
                        }
                    ]
                },
                {
                    name: '牛盾私有云',
                    date: '2017.11 — 2017.12',
                    detail: [
                        {
                            description: 'WEB前端一人、PHP后端两人、OpenStack端python开发一人。',
                        },
                        {
                            content: '负责Web后端订单逻辑、对接私有云API胶水层。',
                        },
                        {
                            results: '实现了牛盾云的自助下单购买、创建实例等'
                        }
                    ]
                },
                {
                    name: '佳桉短信群发',
                    date: '2017.11 — 2017.11',
                    detail: [
                        {
                            content: '用户在网站上传Excel或粘贴字符串，作为目标手机号码群发短信。',
                        },
                        {
                            results: '引入了多线程消费队列机制，实现5秒内解析40万行Excel；'
                        }
                    ]
                }
            ]
        },
        fengyuan: {
            name: '风远科技',
            duty: '后端开发',
            date: '2017.04 — 2017.11',
            project: [
                {
                    detail: [
                        {
                            content: '开发维护基础工程，制定代码规范、行为准则',
                        },
                        {
                            content: '统筹项目内部的进度安排',
                        },
                        {
                            content: '帮助梳理业务逻辑，协助同事解决疑难bug',
                        },
                        {
                            results: '作为后端开发完成多个项目，内部同比效率最高',
                        },
                        {
                            results: '在职后期任负责人，组织管理工作',
                        },
                        {
                            results: '为公司撰写文档，实现新人上手工作手册化'
                        }
                    ]
                }
            ]
        },
        zhongche: {
            name: '中车电商',
            duty: '前端开发',
            date: '2017.02 — 2017.03',
            project: [
                {
                    detail: [
                        {
                            content: '在校实习经历，主要内容为静态页的实现',
                        },
                        {
                            results: '99%还原设计，向下兼容至IE7'
                        }
                    ]
                }
            ]
        }
    }
}

export default JSON
