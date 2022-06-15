import React, {Component} from 'react';
import Block from './Block';
import Company from './Company';
import '../assets/style/style.less';

class Job extends Component {

    render() {
        const { data, title, dataClassName } = this.props;
        return (
            <Block title={title} block='job'>
                <div className={'content ' + dataClassName}>
                    <Company data={data} />
                </div>
            </Block>

        );
    }
}

export default Job;


