import React, {Component} from 'react';
import '../assets/style/style.less';

class Header extends Component {

    render() {
        const { name, items } = this.props.basic;
        this.filterItem(items[0]);
        return (
            <div className="header line-bold">
                <div className="header-name">
                    <p>{ name }</p>
                </div>
                {
                    items.map(item => {
                        let filterItem = this.filterItem(item);
                        return (
                            <div key={item.top_text} className="header-detail">
                                <p className={filterItem.top.className}>{ filterItem.top.text }</p>
                                <p className={filterItem.bottom.className}>{ filterItem.bottom.text }</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    filterItem = (item) => {

        function splitText(key) {
            let ary = item[key].split(':');
            const [className, text] = ary;
            return {
                className,
                text
            }
        }

        return {
            top: splitText('top_text'),
            bottom: splitText('bottom_text'),
        }
    }
}

export default Header;
