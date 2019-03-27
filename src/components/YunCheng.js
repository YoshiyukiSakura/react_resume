import React, {Component} from 'react';
import ContentTitle from './ContentTitle';
import ContentDetail from './ContentDetail';
import SingleDotted from './SingleDotted';
import '../assets/style/style.less';

class YunCheng extends Component {
    render() {
        return (
            <div className="">
                <ContentTitle name="company">
                    <div>昀橙网络</div>
                    <div>前端开发工程师</div>
                    <div>2016.10 — 2017.10</div>
                </ContentTitle>
                <SingleDotted />

                <ContentTitle name="project">
                    <div>衣订Pad端</div>
                    <div>2017.08 — 2017.09</div>
                </ContentTitle>
                <ContentDetail>
                    {/*<div>完成网站整体框架的搭建。完成前端页面与业务逻辑代码的编写。</div>*/}
                    <div>实现了组件复用和数据的懒加载</div>
                </ContentDetail>

                <ContentTitle name="project">
                    <div>衣订PC端</div>
                    <div>2017.04 — 2017.07</div>
                </ContentTitle>
                <ContentDetail>
                    <div>这是一个小型企业的订货与客户管理软件。</div>
                    {/*<div>完成网站整体框架的搭建。完成前端页面与业务逻辑代码的编写。</div>*/}
                    <div>开发了分页组件，更好地复用了代码; 使用Dns预解析提升了网站性能。</div>
                </ContentDetail>

                <ContentTitle name="project">
                    <div>易账房</div>
                    <div>2016.10 — 2017.02</div>
                </ContentTitle>
                <ContentDetail>
                    <div>这是一个针对小微企业的记账软件。</div>
                    {/*<div>完成了登录注册模块、业务员模块、后台模块的页面编写以及业务逻辑代码的实现。</div>*/}
                    <div>相关技术：用公司框架开发的一套SPA项目，使用Ajax完成了与后端的配合，用模板引擎完成对页面的渲染。</div>
                    <div>运用继承机制解决了共同代码的复用问题</div>
                </ContentDetail>
            </div>
        );
    }
}

export default YunCheng;
