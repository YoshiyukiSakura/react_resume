import React, {Component} from 'react';
import '../assets/style/style.less';

class Block extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        const {children} = this.props;
        return (
            <div className="block">
                <div className='title'>{this.props.title}</div>
                <div className="container">
                    <div className='logo'>
                        <div className={`img ${this.props.block}`}></div>
                    </div>
                    {children}
                </div>
            </div>
        );
    }
}

export default Block;
