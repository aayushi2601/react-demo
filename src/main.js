/**
 * Created by intelligrape on 3/5/17.
 */


import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import App from './component/App.js';
import Calc from './component/Calc.js';
import RefDemo from './component/RefDemo.js';
import ProgressBar from './component/ProgressBar.js';
//import Cart from './component/Cart.js';
//render(<div><ProgressBar total={ 50 } download={ 25 }/></div>, document.getElementById('app'));
//render(<div><App/><Calc/></div>, document.getElementById('app1'));
 render(<Router>
    <div>
        <Link to="/appl">User List</Link> >>
        <Link to="/calc">Calculator</Link> >>
        <Link to="/bar">ProgressBar</Link> >>
        <Link to="/cart">Shoping Cart</Link>
        <Switch>
            <Route path="/appl" component={App}/>
            <Route path="/calc" component={Calc} />
            <Route path="/bar" render={(props) => (<ProgressBar {...props} total={520} download = {25} />)} />
 			<Route path="/cart" component={RefDemo} />       
        </Switch>
    </div>
</Router>, document.getElementById('app'));