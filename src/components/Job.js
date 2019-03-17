import React, {Component} from 'react';
import Block from './Block';
import DaSouChe from './DaSouChe';
import NewDun from './NewDun';
import YunCheng from './YunCheng';
import '../assets/style/style.less';

const DASOUCHE = 'dasouche',
      NEWDUN = 'newdun',
      YUNCHENG = 'yuncheng';

class Target extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        console.log(this.props);
    }

    _render () {
        let component = '';
        if (this.props.refs === DASOUCHE) {
            component = <DaSouChe />;
        } else if (this.props.refs === NEWDUN) {
            component = <NewDun />;
        } else {
            component = <YunCheng />
        }
        return component;
    }

    render() {
        return (
            <Block title={this.props.title} block='job'>
                <div className="content">
                    { this._render() }
                </div>
            </Block>

        );
    }
}

export default Target;
