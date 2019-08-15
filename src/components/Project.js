import React, {Component} from 'react';
import Block from './Block';
import ContentDetail from './ContentDetail';
import '../assets/style/style.less';

class Target extends Component {
    render() {
        const { project, title } = this.props;
        return (
            <Block title={title} block='project'>
                <div className="content">
                    <ContentDetail>
                        {
                            project.map((item, index) => (
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
