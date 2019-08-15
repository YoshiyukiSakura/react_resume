import React, {Component} from 'react';
import '../assets/style/style.less';

class Header extends Component {

    render() {
        return (
            <div className="header line-bold">
                <div className="header-name">
                    <p>金相莉</p>
                </div>
                <div className="header-detail">
                    <p className="brith">1993年</p>
                    <p className="phone">13588304302</p>
                </div>
                <div className="header-detail">
                    <p className="city">杭州</p>
                    <p className="email">jinxiangli1001@163.com</p>
                </div>
                <div className="header-detail">
                    <p className="educate">本科</p>
                    <p className="experience">3年工作经验</p>
                </div>
            </div>
        );
    }
}

export default Header;
