import React, {Component} from 'react';
import Header from './../components/Header';
import Target from './../components/Target';
import Education from './../components/Education';
import Skill from './../components/Skill';
import Job from './../components/Job';

import '../assets/style/style.less';

class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Target title='求职目标'></Target>
                <Skill title='专业技能'></Skill>
                <Education title='教育背景'></Education>
                <Job title='工作经历' refs='dasouche'></Job>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Job title='' refs='newdun'></Job>
                <Job title='' refs='yuncheng'></Job>
            </div>
        );
    }
}

export default Home;
