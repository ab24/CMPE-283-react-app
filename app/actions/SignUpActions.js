import alt from '../alt';

class SignUpActions{

    constructor(){
        this.generateActions(
            'signUpSuccess',
            'signUpFail',
            'updateUsername',
            'updatePassword'
        );
    }

    userSignUp(username,password){
        console.log('Trying to signup!!!');
        $.ajax({
                type:'POST',
                url:'/register',
                data: { username: username, password: password }
            })
            .done((data)=>{
                this.actions.signUpSuccess(data);
            })
            .fail((jqXhr) => {
                this.actions.signUpFail(jqXhr.responseJSON.message)
            });

    }

}

export default alt.createActions(SignUpActions);