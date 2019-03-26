import React, {Component} from 'react';
import Block from './Block';
import ContentTitle from './ContentTitle';
import ContentDetail from './ContentDetail';
import '../assets/style/style.less';

class Target extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <Block title={this.props.title} block='target'>
                <div className="content">
                    <ContentTitle>
                        <div>Web前端开发工程师</div>
                        <div></div>
                    </ContentTitle>
                    <ContentDetail>
                        <div>熟练使用Vue框架，理解浏览器异步机制，了解WebSocket编程</div>
                        <div>能快速上手大部分前端项目，熟练前端工程化开发环境的搭建</div>
                    </ContentDetail>
                </div>
            </Block>

        );
    }
}

export default Target;
