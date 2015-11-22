import alt from '../alt';
import LoginAction from '../actions/LoginActions';

class LoginStore {

    constructor() {
        this.bindActions(LoginAction);
        this.username='';
        this.password='';
        this.isAuthenticated=false;
    }

    onLoginSuccess(data){
        this.isAuthenticated = true;
    }


    onLoginFail(errorMessage){
        alert('Login Failed');
        console.log('Unable to login.Please try again.')
    }

    onUpdateUsername(event){
        //alert('changing name');
        this.username = event.target.value;
    }

    onUpdatePassword(event){
        //alert('changing pass');
        this.password = event.target.value;
    }

}

export default alt.createStore(LoginStore);

