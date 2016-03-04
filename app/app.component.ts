import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {WelcomeComponent} from "./common/welcome.component";

@Component({
    selector: 'my-app',
    template: `
    <h1>MyTunes</h1>
    `
})
@RouteConfig([
    {path: "/", name: "Home", component: WelcomeComponent}
])
export class AppComponent {

}