import React from 'react';

export default class NumbersComponent extends React.Component {
constructor(props) {
    super(props);

    this.updateState = this.updateState.bind(this);

}
updateState(e) {
this.props.foo(e.target.value)
   }
    render() {
         const _btns=["1","2","3","4","5","6","7","8","9","0","+","-","*","/"];
    //    const listItems = _btns.map((d) =><button key={d} value = {d} onClick = {(e)=> this.props.foo(d)}>{d}</button>);
         const listItems = _btns.map((d) =><button key={d} value = {d} onClick = {this.updateState}>{d}</button>);
    return (
      <div>
      {listItems}
      </div>
    );

    }
}