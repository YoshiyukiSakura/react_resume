import React, {Component} from 'react';
import Block from './Block';
import '../assets/style/style.less';

class Target extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <Block title={this.props.title}>
                <div className="content">
                    <div className='content-title'>Web前端开发工程师</div>
                </div>
            </Block>

        );
    }
}

export default Target;
