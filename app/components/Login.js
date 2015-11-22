var React = require('react');
var LoginStore = require('../stores/LoginStore');
var LoginAction = require('../actions/LoginActions');
var Home = require('./home');

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = LoginStore.getState();
        this.onChange = this.onChange.bind(this);
    }


    componentDidMount(){
        LoginStore.listen(this.onChange);
    }

    componentWillUnmount() {
        LoginStore.unlisten(this.onChange);
    }

    onChange(state){
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();

        var username = this.state.username.trim();
        var password = this.state.password;

        if (username && password) {
            LoginAction.postLogin(username, password);
        }
    }


    render() {

        if(this.state.isAuthenticated)
            return(
                <Home/>
            );
        else
        return (
            <div className="top-content">

                    <div className="inner-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8 col-sm-offset-2 text">
                                    <h1><strong>Move To Cloud</strong></h1>
                                    <div className="description">
                                        <p>
                                            Your gateway to private cloud using <a href="https://www.openstack.org/"><strong>Openstack</strong></a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-sm-offset-3 form-box">
                                    <div className="form-top">
                                        <div className="form-top-left">
                                            <h3>Login to our site</h3>
                                            <p>Enter your username and password to log on:</p>
                                        </div>
                                        <div className="form-top-right">
                                            <i className="fa fa-key"></i>
                                        </div>
                                    </div>
                                    <div className="form-bottom">
                                        <form role="form" className="login-form" onSubmit={this.handleSubmit.bind(this)}>
                                            <div class="form-group">
                                                <label class="sr-only" for="form-username">Username</label>
                                                <input type="text" name="form-username" placeholder="Username..." className="form-username form-control" id="form-username" onChange={LoginAction.updateUsername}/>
                                            </div>
                                            <div className="form-group">
                                                <label className="sr-only" for="form-password">Password</label>
                                                <input type="password" name="form-password" placeholder="Password..." className="form-password form-control" id="form-password" onChange={LoginAction.updatePassword}/>
                                            </div>
                                            <button type="submit" className="btn">Sign in!</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

        );
    }
}

export default Login;