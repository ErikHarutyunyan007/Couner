import { render } from "@testing-library/react";
import { Component } from "react";
let stepNumber = 1;
let minNumber = 0;
let maxNumber;
class Counter extends Component {
    constructor(props) {
        super(props);
        this.count = 0;
        this.state = {
            count: 0,
            disabled: false,
        };
    }
    minCount = (e) => {
        this.setState({count:this.state.count = +e.target.value});
        minNumber = +e.target.value ;
    }
    maxCount = (e) => {
      maxNumber = +e.target.value;
    }
    stepCount = (e) => {
      e.target.value > 0 ? stepNumber = +e.target.value :  stepNumber = 1
    }
    resetCount = () => {
        this.setState({count:this.state.count = 0 });
        minNumber = 0;
    } 
    addCount = () => {
        this.setState({count:this.state.count + stepNumber });
    };
    subtractCount = () => {
        this.setState({count:this.state.count - stepNumber });
    }

    render() {
        return(
            <>
            <div className="globalDiv">
            <span>{this.props.user} {this.state.count}</span>
            <button className="subtract" disabled={this.state.count === minNumber || 0 ? true : this.state.disabled  } onClick={this.subtractCount }>-</button>
            <button className="add" disabled={this.state.count == maxNumber ? true : this.state.disabled  } onClick={this.addCount}>+</button>
            <button className="res" onClick={this.resetCount}>res</button>
            <input onChange={this.minCount} type= 'number' placeholder = 'minvalue' className='minNumber'></input>
            <input onChange={this.stepCount}  type= 'number' className='step' placeholder='step'></input>
            <input onChange={this.maxCount} type= 'number' placeholder = 'maxvalue' className='maxNumber'></input>
            </div>
            </>
        )
    }
};

export default Counter;