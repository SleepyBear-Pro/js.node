const User = {
    _email : 'h@hc.com',
    _password : 'abcd',

    get email() {
        return this._email.toUpperCase(0)
    },
    set email (value){
        this._email = value
    }
}


console.log(User.email);


const tea = Object.create(User)
console.log(tea.email);




