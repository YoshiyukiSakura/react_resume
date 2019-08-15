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
        const {
            fileName,
            target,
            education,
            skill,
            project,
            companies: {
                dasouche: first,
                newdun: second,
                yuncheng: third
            }} = JSON;
        document.title = fileName;
        return (
            <div>
                <Header></Header>
                <Target target={target} title='求职目标' />
                <Education education={education} title='教育背景' />
                <Skill skill={skill} title='专业技能' />
                <Project project={project} title='开源项目' />
                <Job data={first} title='工作经历' refs='dasouche' />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Job data={second} title='' refs='newdun' />
                <Job data={third} title='' refs='yuncheng' />
            </div>
        );
    }
}

export default Home;
