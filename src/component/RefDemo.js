import React from 'react';
import ReactDOM from 'react-dom';
import LogButton from './LogButton.js';

class RefDemo extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         data: '',
         inp: '',
         quan: 1,
         sum: 0,
      }
    //  this.state = {isLoggedIn: false};
    //  this.updateState = this.updateState.bind(this);
      this.onSubmited = this.onSubmited.bind(this);
     // this.clearInput = this.clearInput.bind(this);
   };

   updateState(e) {
      this.setState({inp: e.target.value});
   }
   updateStatess(e) {
     // console.log('Heloo');
   }
   handleLogClick() {
      this.setState({inp: ''});
      this.input.focus();
      this.input.select();     
   }
   onSubmited(e) {
      var i ,sum =0;
      var str=this.state.inp,mats=[];
      this.setState({data:this.state.inp+' '+this.state.quan+' +/- x '+this.state.data});
      this.setState({inp: ''});
     // console.log(str.match(/\d+/g));
      str.match(/\d+/g).forEach(function(i,j){mats[j]=parseInt(i);});
      for (i = 0; i < mats.length; i++) {
             this.state.sum += parseInt(mats[i]);
      }
      const quan = this.state.quan;
      let button = null;
      if(quan) {
         button = <LogButton onClick={this.handleLogClick} />;
      }
   }

   clearInput() {
      this.setState({inp: ''});
      this.input.focus();
      this.input.select();
   }  

   render() {
      let button = null;
      return (
         <div>
         <h2>My Cart</h2>
            <input value = {this.state.inp} onChange = {(e) => this.updateState(e)}
               ref={(myInput) => {this.input = myInput}}></input>   
            <button onClick = {(e) => this.onSubmited(e)}>ENTER</button>
            <button onClick = {(e) => this.clearInput(e)}>CLEAR</button>
            <h4>{this.state.data}</h4>
             {button}
            <h4>Total Amount : {this.state.sum}</h4>
         </div>
      );
   }
}
export default RefDemo;