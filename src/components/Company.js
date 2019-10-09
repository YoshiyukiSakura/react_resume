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
            duty,
            project
        } = this.props.data;
        return (
            <div className="co-company-container">
                <ContentTitle name="company">
                    <div>{ name }</div>
                    <div>{ duty }</div>
                    <div>{ date }</div>
                </ContentTitle>
                {/*<div>技术栈：{ tech_stack }</div>*/}
                <SingleDotted />

                {
                    project.map((item, index) => (
                        <div key={index}>
                            {
                                !!item.name &&
                                <ContentTitle name="project">
                                    <div>{ item.name }</div>
                                    <div>{ item.date }</div>
                                </ContentTitle>
                            }
                            <ContentDetail>
                                {
                                    item.detail.map((i, n) => {
                                        let className;
                                        if (i.description) {
                                            className = 'project-description';
                                        } else if (i.content) {
                                            className = 'project-content';
                                        } else {
                                            className = 'project-results';
                                        }
                                        return (
                                            <div key={n} className={className}>{ i.description || i.content || i.results }</div>
                                        )
                                    })
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
