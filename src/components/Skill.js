import React, {Component} from 'react';
import Block from './Block';
import ContentDetail from './ContentDetail';
import '../assets/style/style.less';

class Target extends Component {
    render() {
        const { skill, title } = this.props;
        return (
            <Block title={title} block='skill'>
                <div className="content">
                    <ContentDetail>
                        {
                            skill.map((item, index) => (
                                <div key={index}>● { item }</div>
                            ))
                        }
                    </ContentDetail>
                </div>
            </Block>
        );
    }
}

export default Target;
