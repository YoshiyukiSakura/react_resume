import React, {Component} from 'react';
import '../assets/style/style.less';

class ContentTitle extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        const {children} = this.props;
        return (
            <div className={`flex-column-three content-title ${this.props.name}`}>
                {children}
            </div>
        );
    }
}

export default ContentTitle;
