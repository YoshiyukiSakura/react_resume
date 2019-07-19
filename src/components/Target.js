import React, {Component} from 'react';
import Block from './Block';
import ContentTitle from './ContentTitle';
import ContentDetail from './ContentDetail';
import JSON from './../Json'
import '../assets/style/style.less';

class Target extends Component {
    render() {
        return (
            <Block title={this.props.title} block='target'>
                <div className="content">
                    <ContentTitle>
                        <div>Web前端开发工程师</div>
                        <div></div>
                    </ContentTitle>
                    <ContentDetail>
                        {
                            JSON.target.map((item, index) => (
                                <div key={index}>{ item }</div>
                            ))
                        }
                    </ContentDetail>
                </div>
            </Block>

        );
    }
}

export default Target;
