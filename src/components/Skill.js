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
                        <div>1. 熟悉 HTML5、CSS3、ES6,了解 HTTP 协议及浏览器的兼容特性</div>
                        <div>2. 擅长使用 Vue / React / React Native / jQuery 进行项目开发</div>
                        <div>3. 对微信小程序、WebApp 有一定的开发经验</div>
                        <div>4. 熟悉 Git Flow 规范</div>
                        <div>5. 有一定的 Node.js 基础, 有 Express 框架使用经验</div>
                        <div>6. 了解 Nginx 基本配置</div>
                    </ContentDetail>
                </div>
            </Block>
        );
    }
}

export default Target;
