import React, {Component} from 'react';
import ContentTitle from './ContentTitle';
import ContentDetail from './ContentDetail';
import SingleDotted from './SingleDotted';
import '../assets/style/style.less';

class DaSouChe extends Component {
    render() {
        const {
            name,
            date,
            project
        } = this.props.data;
        return (
            <div className="">
                <ContentTitle name="company">
                    <div>{ name }</div>
                    {/*<div>{ duty }</div>*/}
                    <div>{ date }</div>
                </ContentTitle>
                {/*<div>技术栈：{ tech_stack }</div>*/}
                <SingleDotted />

                {
                    project.map((item, index) => (
                        <div key={index}>
                            <ContentTitle name="project">
                                <div>{ item.name }</div>
                                <div>{ item.date }</div>
                            </ContentTitle>
                            <ContentDetail>
                                {
                                    item.detail.map((i, n) => (
                                        <div key={n}>{ i }</div>
                                    ))
                                }
                            </ContentDetail>
                        </div>

                    ))
                }
            </div>
        );
    }
}

export default DaSouChe;
