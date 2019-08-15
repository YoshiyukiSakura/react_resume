import React, {Component} from 'react';
import Header from './../components/Header';
import Target from './../components/Target';
import Education from './../components/Education';
import Skill from './../components/Skill';
import Job from './../components/Job';
import Project from './../components/Project';
import JSON from './../Json';

import '../assets/style/style.less';

class Home extends Component {
    render() {
        document.title = JSON.fileName;
        return (
            <div>
                <Header></Header>
                <Target title='求职目标' />
                <Education title='教育背景' />
                <Skill title='专业技能' />
                <Project title='开源项目' />
                <Job title='工作经历' refs='dasouche' />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Job title='' refs='newdun' />
                <Job title='' refs='yuncheng' />
            </div>
        );
    }
}

export default Home;
