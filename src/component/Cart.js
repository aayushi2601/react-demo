/**
 * Created by intelligrape on 4/5/17.
 */
import React from 'react';
class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        }

    }

    changeValue = (key, e) => {
        this.setState({
            [key]: e.target.value
        });
    };

    signupHandler = () => {
        this.setState({
            name: '',
            email: '',
            password: ''
        });
    };

    render() {
        return (<div>
            <form>
                <table>
                    <tr>
                        <td>
                            <label>Name: </label>
                        </td>
                        <td>
                            <input onChange={(e) => this.changeValue('name', e)} value={this.state.name}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Email: </label>
                        </td>
                        <td>
                            <input onChange={(e) => this.changeValue('email', e)} value={this.state.email}/>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Password: </label>
                        </td>
                        <td>
                            <input type="password" onChange={(e) => this.changeValue('password', e)}
                                   value={this.state.password}/>

                        </td>
                    </tr>
                </table>
                <button className="button" onClick={this.signupHandler} type="button">Sign Up</button>


            </form>
        </div>)
    }
}

export default Cart;

