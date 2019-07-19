import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/style.less';

class App extends Component {
    render() {
        return (
            <div className='navWrapper'>
                <Link to="/Home">第一封</Link>
                <Link to="/Hoc">第二封</Link>
                <Link to="/">第三封</Link>
            </div>
        );
    }
}

export default App;