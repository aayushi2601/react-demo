import React from 'react';

export default class FunctionComponent extends React.Component {
constructor(props) {
    super(props);

    this.updateState = this.updateState.bind(this);

}
updateState(e) {
    
this.props.goo(e.target.value)
   }
    render() {
     const _btns=["+","-","*","/"];
    //    const listItems = _btns.map((d) =><button key={d} value = {d} onClick = {(e)=> this.props.foo(d)}>{d}</button>);
         const listItems = _btns.map((d) =><button key={d} value = {d} onClick = {this.updateState}>{d}</button>);
    return (
      <div>
      {listItems}
      </div>
    );
    }
    
}