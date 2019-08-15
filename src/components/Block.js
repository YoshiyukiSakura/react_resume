import React, {Component} from 'react';
import '../assets/style/style.less';

class Block extends Component {
    render() {
        const {children, title, block} = this.props;
        return (
            <div className="block">
                <div className='title'>{title}</div>
                <div className="container">
                    <div className='logo'>
                        <div className={`img ${block}`}></div>
                    </div>
                    {children}
                </div>
            </div>
        );
    }
}

export default Block;
