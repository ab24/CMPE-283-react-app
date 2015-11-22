var React = require('react');
var SignUpStore = require('../stores/SignUpStore');
var SignUpAction = require('../actions/SignUpActions');
var Login = require('./Login');

class SignUp extends React.Component {

    constructor(props){
        super(props);
        this.state = SignUpStore.getState();
        this.onChange = this.onChange.bind(this);
    }


    componentDidMount(){
        SignUpStore.listen(this.onChange);
    }

    componentWillUnmount() {
        SignUpStore.unlisten(this.onChange);
    }

    onChange(state){
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();

        var username = this.state.username.trim();
        var password = this.state.password;

        if (username && password) {
            SignUpAction.userSignUp(username, password);
        }
    }


    render() {

        if(this.state.isRegistered)
            return(
                <Login/>
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
                                            <h3>Register to our site</h3>
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
                                                <input type="text" name="form-username" placeholder="Username..." className="form-username form-control" id="form-username" onChange={SignUpAction.updateUsername}/>
                                            </div>
                                            <div className="form-group">
                                                <label className="sr-only" for="form-password">Password</label>
                                                <input type="password" name="form-password" placeholder="Password..." className="form-password form-control" id="form-password" onChange={SignUpAction.updatePassword}/>
                                            </div>
                                            <button type="submit" className="btn">Sign Up!</button>
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

export default SignUp;