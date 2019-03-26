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
                <SingleDotted />

                <ContentTitle name="project">
                    <div>工作台</div>
                    <div>2019.03 - 至今</div>
                </ContentTitle>
                <ContentDetail>
                    <div>用RN开发了工作台App，解决了混合App效率低体验差，原生App开发周期长，真机调试门槛高的问题。</div>
                    <br/>
                    <br/>
                    <br/>
                </ContentDetail>

                <ContentTitle name="project">
                    <div>弹个车App</div>
                    <div>2018.06 - 至今</div>
                </ContentTitle>
                <ContentDetail>
                    <div>弹个车App三十多人协同参与，Web端，app端，RN，服务端联动的项目。</div>
                    <br/>
                    <br/>
                    <br/>
                </ContentDetail>

                <ContentTitle name="project">
                    <div>保险App</div>
                    <div>2018.10 - 至今</div>
                </ContentTitle>
                <ContentDetail>
                    <div>弹个车App三十多人协同参与，Web端，app端，RN，服务端联动的项目。</div>
                    <br/>
                    <br/>
                    <br/>
                </ContentDetail>
            </div>
        );
    }
}

export default DaSouChe;
