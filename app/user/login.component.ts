import {Component} from 'angular2/core';

@Component({
    selector: 'login-component',
    template: `
    <h1>Login</h1>
    <form #loginForm="ngForm">
        <input type="text" required #email="ngForm" ngControl="email">
        <input type="password">
        <button type="submit" value="Submit"
        [disabled]="!loginForm.form.valid"
        (click)="doLogin(email.value)">Submit</button>
    </form>
      `
})
export class LoginComponent {
    public email:string;

    doLogin(email:string){
        alert("Login email is: " + email);
    }
}