import React, {Component} from 'react';
import Header from './../components/Header';
import Target from './../components/Target';
import Education from './../components/Education';
import Skill from './../components/Skill';
import Job from './../components/Job';
import Project from './../components/Project';
import JSON from './../Json-Yizhou-English';

import '../assets/style/style.less';

class Home extends Component {
    render() {
        const {
            fileName,
            basic,
            target,
            education,
            skill,
            project,
            companies: {
                opensquare,
                zeroconf: minusOne,
                dbapp: zero,
                dongjiu: first,
                newdun: second,
                fengyuan: third,
                zhongche: four,
            }
        } = JSON;
        document.title = fileName;
        return (
            <div>
                <Header basic={basic}/>
                <Target target={target} title='Brief'/>
                <Education education={education} title='Education'/>
                <Skill skill={skill} title='Skills'/>
                <Project project={project} title='Open Source'/>
                <Job data={opensquare} title='Experiences' refs='opensquare'/>
                <Job data={minusOne} title='Experiences' refs='zeroconf'/>
                <Job data={zero} title='Experiences' refs='dbapp'/>
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
