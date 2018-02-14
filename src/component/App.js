/**
 * Created by intelligrape on 3/5/17.
 */


import React from 'react';


class App extends React.Component {
   
    render() {
   // const data =[1,2,3,4];
     const data =[{"name":"test1"},{"name":"test2"}];
     const list = [
    {name: 'John', age: 25, avatar: 'https://randomuser.me/api/portraits/men/15.jpg'},
    {name: 'Joe', age: 35, avatar: 'https://randomuser.me/api/portraits/men/13.jpg'},
    {name: 'Andrei', age: 45, avatar: 'https://randomuser.me/api/portraits/men/10.jpg'},
    {name: 'Ted', age: 29, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    {name: 'Ben', age: 30, avatar:'https://randomuser.me/api/portraits/men/2.jpg' }
      ];
      var divStyle = {
        wrapper:{
        "width" :"100%",
        "border": "1px solid black",
        "borderCollapse": "collapse",
        },
        other:{
        	"border": "1px solid black",
            "borderCollapse": "collapse",

        }
        };

    const listItems = list.map((d) => <tr style = {divStyle.other}><td style = {divStyle.other} key={d.name}>{d.name}</td>
        <td style = {divStyle.other} key={d.age}>{d.age}</td>
        <td style = {divStyle.other} key={d.avatar}><img src = {d.avatar}/></td>
        </tr>);
    //const listItems = data.map((d) => <li key={d}>{d}</li>);

    return (
      <table style = {divStyle.wrapper}>
      {listItems }
      </table>
    );
}
}
export default App;