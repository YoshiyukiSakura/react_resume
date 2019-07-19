import React, {Component} from 'react';
import Block from './Block';
import DaSouChe from './DaSouChe';
import NewDun from './NewDun';
import YunCheng from './YunCheng';
import JSON from './../Json'
import '../assets/style/style.less';

const DASOUCHE = 'dasouche',
      NEWDUN = 'newdun';
      // YUNCHENG = 'yuncheng';

class Target extends Component {
    componentDidMount () {
        console.log(this.props);
    }

    _render () {
        let component = '';
        if (this.props.refs === DASOUCHE) {
            component = <DaSouChe data={JSON.companies.dasouche} />;
        } else if (this.props.refs === NEWDUN) {
            component = <NewDun data={JSON.companies.newdun} />;
        } else {
            component = <YunCheng data={JSON.companies.yuncheng} />
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
