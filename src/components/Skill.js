import React, {Component} from 'react';
import Block from './Block';
import ContentDetail from './ContentDetail';
import '../assets/style/style.less';

class Target extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <Block title={this.props.title} block='skill'>
                <div className="content">
                    <ContentDetail>
                        <div>1.熟悉HTML5 Canvas/SVG, CSS3, JS 新特性,了解 HTTP 协议及浏览器的兼容特性</div>
                        <div>2.对微信小程序、WebApp 有一定的开发经验</div>
                        <div>3.擅长使用 Vue/Vuex/jQuery 进行项目开发，对前端的异步工作内容有一定了解</div>
                        <div>4.了解Nginx代理机制、Git项目管理工具</div>
                        <div>5.了解 SASS/LESS</div>
                        <div>6.有一定的 Node.js 基础, 有 Express 框架使用经验</div>
                        <div>7.了解 MySQL/MongoDB</div>
                    </ContentDetail>
                </div>
            </Block>
        );
    }
}

export default Target;
