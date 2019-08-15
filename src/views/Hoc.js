import React, {Component} from 'react';

// const Demo = (props) => {
//     return (
//         <div>
//             My name is {props.name}
//         </div>
//     )
// };
//
// const HOC = (WrapperComponent) => {
//     return class Permission extends Component {
//
//         // constructor (props) {
//         //     super(props);
//         // }
//
//         render(){
//             return (
//                 <div>
//                     <header>nihao</header>
//                     <WrapperComponent {...this.props} />
//                 </div>
//             )
//         }
//     }
// };
//
// const WithDemo = HOC(Demo);
//
// class Dem extends Component {
//     render () {
//         return <WithDemo name={'aaa'} />
//     }
// }
//
// export default Dem;

const Demo = (props) => {
    return (
        <div>
            反转值：<span>{ props.text.split('').reverse().join('') }</span>
        </div>
    )
};

const HOC = (WrapperComponent) => {
    return class Permission extends Component {
        render(){
            return (
                <div>
                    <WrapperComponent { ...this.props }  />
                </div>
            )
        }
    }
};

const WithDemo = HOC(Demo);

class Clock extends Component {
    constructor (props) {
        super(props);

        this.state = {};
        console.log(this);
    }
    render () {
        console.log(this);
        return <div>{this.props.text}</div>
    }
}

const FancyButton = React.forwardRef((props, ref) => {
    return <div ref={ref}>Click me!</div>
});

const ref = React.createRef();

// console.log(ref);

export default class Test1 extends Component {

    state = {
        text: ''
    };

    render () {
        return (
            <div>
                <input type='text' value={ this.state.text }
                       onChange={ (e) => { this.setState({ text: e.target.value }) } } />
                <div>输入值：{ this.state.text }</div>
                <WithDemo text={this.state.text} />
                <Clock text={this.state.text} />
                <FancyButton ref={ref} />
            </div>
        );
    }
}