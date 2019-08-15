import React, {Component} from 'react';
import Block from './Block';
import ContentDetail from './ContentDetail';
import JSON from './../Json'
import '../assets/style/style.less';

class Target extends Component {
    render() {
        return (
            <Block title={this.props.title} block='project'>
                <div className="content">
                    <ContentDetail>
                        {
                            JSON.project.map((item, index) => (
                                <div key={index}>● { item.name } <a className="grey" href={item.href}>{item.href}</a></div>
                            ))
                        }
                    </ContentDetail>
                </div>
            </Block>
        );
    }
}

export default Target;
