import React, {Component} from 'react';
import Header from './../components/Header';
import Target from './../components/Target';
import '../assets/style/style.less';

class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Target title='求职目标'></Target>
                <Target title='求职目标'></Target>
                <Target title='求职目标'></Target>
            </div>
        );
    }
}

export default Home;
