import React, {Component} from 'react';
import Block from './Block';
import ContentTitle from './ContentTitle';
import '../assets/style/style.less';

class Target extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <Block title={this.props.title} block='education'>
                <div className="content">
                    <ContentTitle>
                        <div>浙江科技学院</div>
                        <div>计算机科学与技术</div>
                        <div>2013 - 2017</div>
                    </ContentTitle>
                </div>
            </Block>

        );
    }
}

export default Target;
