import React, {Component} from 'react';
import Block from './Block';
import ContentDetail from './ContentDetail';
import JSON from './../Json'
import '../assets/style/style.less';

class Target extends Component {
    render() {
        return (
            <Block title={this.props.title} block='skill'>
                <div className="content">
                    <ContentDetail>
                        {
                            JSON.skill.map((item, index) => (
                                <div key={index}>{index + 1}. { item }</div>
                            ))
                        }
                    </ContentDetail>
                </div>
            </Block>
        );
    }
}

export default Target;
