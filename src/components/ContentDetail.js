import React, {Component} from 'react';
import '../assets/style/style.less';

class ContentDetail extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="content-detail">
                {children}
            </div>
        );
    }
}

export default ContentDetail;
