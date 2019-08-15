import React, {Component} from 'react';
import Block from './Block';
import ContentTitle from './ContentTitle';
import '../assets/style/style.less';

class Target extends Component {
    render() {
        const { education, title } = this.props;
        return (
            <Block title={title} block='education'>
                <div className="content">
                    <ContentTitle>
                        {
                            education.map(item => (
                                <div key={item}>{item}</div>
                            ))
                        }
                    </ContentTitle>
                </div>
            </Block>

        );
    }
}

export default Target;
