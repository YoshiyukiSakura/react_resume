import React, {Component} from 'react';
import ContentTitle from './ContentTitle';
import ContentDetail from './ContentDetail';
import SingleDotted from './SingleDotted';
import '../assets/style/style.less';

class NewDun extends Component {
    render() {
        return (
            <div className="">
                <ContentTitle>
                    <div>牛盾网络</div>
                    <div>2017.10 - 2018.05</div>
                    <div>前端开发工程师</div>
                </ContentTitle>
                <SingleDotted />

                <ContentTitle name="project">
                    <div>云管家购买模块</div>
                    <div> 2018.04 - 2018.05</div>
                </ContentTitle>
                <ContentDetail>
                    <div>工作内容：代理云主机购买页面、购物车页面</div>
                    <div>改进：抽象小型组件实现复用、构建Ajax缓冲队列改善性能。</div>
                    <div>通过Vuex进行同级非兄弟组件之间的状态通信。</div>
                </ContentDetail>

                <ContentTitle name="project">
                    <div>云管家项目</div>
                    <div> 2018.03 - 2018.05</div>
                </ContentTitle>
                <ContentDetail>
                    <div>工作内容：负责网站整体框架的搭建。借助Element-UI实现前端页面与业务逻辑代码的快速编写。</div>
                    <div>改进：通过自己封装的页面组件和逻辑组件实现代码的复用。提高工作效率。</div>
                    <div>提出在前端小组使用Git Flow协作并落实。</div>
                </ContentDetail>

                <ContentTitle name="project">
                    <div>牛盾私有云</div>
                    <div>2017.11 - 2018.05</div>
                </ContentTitle>
                <ContentDetail>
                    <div>工作内容：完成私有云一期二期控制台的页面展示，数据交互，逻辑处理，以及购买页面的编写。</div>
                    <div>改进：将部分数据运算转移至前端，替代重新请求API。用@media适配三屏。</div>
                </ContentDetail>

                <ContentTitle name="project">
                    <div>短信群发</div>
                    <div>2017.11 - 2017.12</div>
                </ContentTitle>
                <ContentDetail>
                    <div>工作内容：上传Excel至后端，解析后预览任务，创建短信群发任务。</div>
                    <div>改进：异步多任务读取后端的Excel解析手机号结果，达到类似多线程的效果。</div>
                </ContentDetail>
            </div>
        );
    }
}

export default NewDun;
