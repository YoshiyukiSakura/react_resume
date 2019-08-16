import React, {Component} from 'react';
import Block from './Block';
import ContentTitle from './ContentTitle';
import ContentDetail from './ContentDetail';
import SingleDotted from './SingleDotted';
import '../assets/style/style.less';

class Target extends Component {
    render() {
        const { education: { basic, detail }, title } = this.props;
        return (
            <Block title={title} block='education'>
                <div className="content">
                    <ContentTitle>
                        {
                            basic.map(item => (
                                <div key={item}>{item}</div>
                            ))
                        }
                    </ContentTitle>
                    {detail && <SingleDotted />}
                    {
                        detail && <ContentDetail>
                            {
                                detail.map((i, n) => (
                                    <div key={n}>{ i }</div>
                                ))
                            }
                        </ContentDetail>
                    }
                </div>
            </Block>

        );
    }
}

export default Target;
