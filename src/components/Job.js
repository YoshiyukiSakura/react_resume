import React, {Component} from 'react';
import Block from './Block';
import Company from './Company';
import '../assets/style/style.less';

class Target extends Component {

    render() {
        const { data, title } = this.props;
        return (
            <Block title={title} block='job'>
                <div className="content">
                    <Company data={data} />
                </div>
            </Block>

        );
    }
}

export default Target;
