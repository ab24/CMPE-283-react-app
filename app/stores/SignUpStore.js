import alt from '../alt';
import SignUpActions from '../actions/SignUpActions';

class SignUpStore{

    constructor(){
        this.bindActions(SignUpActions);
        this.username='';
        this.password='';
        this.isRegistered=false;
    }

    onSignUpSuccess(data){
        this.isRegistered = true;
    }

    onSignUpFail(errorMessage){
        alert('Registration Failed' + errorMessage);
        console.log('Please try again.')
    }

    onUpdateUsername(event){
        this.username = event.target.value;
    }

    onUpdatePassword(event){
        this.password = event.target.value;
    }

}

export default alt.createStore(SignUpStore)
