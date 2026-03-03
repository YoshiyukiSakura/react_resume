import React, {Component} from 'react';
import Header from './../components/Header';
import Target from './../components/Target';
import Education from './../components/Education';
import Job from './../components/Job';
import Project from './../components/Project';
import JSON from './../Json-Yizhou-Japanese';

import '../assets/style/style.less';

class Home extends Component {
    render() {
        const {
            fileName,
            basic,
            target,
            education,
            project,
            companies: {
                heima,
                opensquare,
                zeroconf,
                dbapp: zero,
                dongjiu: first,
                newdun: second,
                fengyuan: third,
                zhongche: four,
            },
        } = JSON;
        document.title = fileName;
        return (
            <div>
                <Header basic={basic}/>
                <Target target={target} title='概要'/>
                <Education education={education} title='学歴'/>
                <Project project={project} title='オープンソース'/>
                <Job data={heima} title='職務経歴' refs='heima'/>
                <Job data={opensquare} title='職務経歴' refs='opensquare'/>
                <Job data={zeroconf} title='職務経歴' refs='zeroconf'/>
                <Job data={zero} title='職務経歴' refs='dbapp'/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Job data={first} title='' refs='dongjiu'/>
                <Job data={second} title='' refs='newdun'/>
                <Job data={third} title='' refs='fengyuan'/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Job data={four} title='' refs='zhongche'/>
            </div>
        );
    }
}

export default Home;
