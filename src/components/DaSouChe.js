import React, {Component} from 'react';
import ContentTitle from './ContentTitle';
import ContentDetail from './ContentDetail';
import SingleDotted from './SingleDotted';
import '../assets/style/style.less';

class DaSouChe extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="">
                <ContentTitle>
                    <div>大搜车</div>
                    <div>2018.05 - 至今</div>
                    <div>前端开发工程师</div>
                </ContentTitle>
                <ContentDetail>
                    <div>相关技术：</div>
                </ContentDetail>
                <SingleDotted />
                <ContentTitle>
                    <div>大搜车</div>
                    <div>2018.05 - 至今</div>
                    <div>前端开发工程师</div>
                </ContentTitle>
                <ContentDetail>
                    <div>相关技术：</div>
                </ContentDetail>
            </div>
        );
    }
}

export default DaSouChe;
