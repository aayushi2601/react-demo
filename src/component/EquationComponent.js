import React from 'react';

export default class EquationComponent extends React.Component {
constructor(props) {
    super(props);
     this.state = {
            text: 0
        }
    this.handleClick = this.handleClick.bind(this);
}
handleClick(e) {
    var i;
    if (this.props.goo.indexOf('+')> -1) {
        var a =this.props.goo.split(/[.\-+/*]/);
        for (i = 0; i < a.length; i++) {
             this.state.text += parseInt(a[i]);
}
    }
     if (this.props.goo.indexOf('-')> -1) {
        var a =this.props.goo.split(/[.\-+/*]/);
        for (i = 0; i < a.length; i++) {
             this.state.text -= parseInt(a[i]);
             this.state.text = -(this.state.text);
} 
    }
     if (this.props.goo.indexOf('*')> -1) {
        this.state.text=1;
        var a =this.props.goo.split(/[.\-+/*]/);
        for (i = 0; i < a.length; i++) {
             this.state.text *= parseInt(a[i]);
}

    }
     if (this.props.goo.indexOf('/')> -1) {
        this.state.text=1;
        var a =this.props.goo.split(/[.\-+/*]/);
        for (i = 0; i < a.length; i++) {
             this.state.text = parseInt(a[i])/this.state.text;
}
    }
     this.props.koo(this.state.text)
   }
    render() {
//         var substrings = ['+','-','*','/'],
//     length = substrings.length;
//  while(length--) {
//    if (this.props.goo.indexOf(substrings[length])!=-1) {
//        console.log('Hello');
//    }
// }   
        return (
            <div className="buttonBoxLeft">
                <button value="=" onClick={this.handleClick}>=</button>
            </div>
        )
    }
}