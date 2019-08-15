import React, {Component} from 'react';
import '../assets/style/style.less';

class Header extends Component {

    render() {
        const { name, items } = this.props.basic;
        return (
            <div className="header line-bold">
                <div className="header-name">
                    <p>{ name }</p>
                </div>
                {
                    items.map(item => (
                        <div key={item.top_text} className="header-detail">
                            <p className="brith">{ item.top_text }</p>
                            <p className="phone">{ item.bottom_text }</p>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Header;
