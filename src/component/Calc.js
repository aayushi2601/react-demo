import React from 'react';
import NumbersComponent from './NumbersComponent.js';
import EquationComponent from './EquationComponent.js';
import FunctionComponent from './FunctionComponent.js';
class Calc extends React.Component
{
      constructor() {
        super();
        this.state = {
            currentItem:""
        }
this.clearInput = this.clearInput.bind(this);
    }
clearInput() {
      this.setState({currentItem: ''});
      this.input.focus();
      this.input.select();
   }
//<FunctionComponent goo={(w) => { this.setState({'currentItem': w})}}/> 
    render() {
        
        return (

            <div className="calculatorWrapper">
                <div className="display">
                <input value = {this.state.currentItem} ></input>
                </div>
                <section className="controlArea">
                    <div>
                        <NumbersComponent foo = {(v) => { this.setState({'currentItem': this.state.currentItem+v})}}/>
                        <EquationComponent goo = {this.state.currentItem} koo = {(h) => { this.setState({'currentItem':h})}}/>
                        <button onClick = {this.clearInput}>Clr</button>
                    </div>
                </section>
            </div>
        )
	}

}
export default Calc;


