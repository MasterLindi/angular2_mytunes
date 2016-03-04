import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {WelcomeComponent} from "./common/welcome.component";
import {LoginComponent} from "./user/login.component";
import {RegisterComponent} from "./user/register.component";
import {AlbumsComponent} from "./music/albums.component";
import {AlbumComponent} from "./music/album.component";
import {HeaderComponent} from "./common/header.component";
import {FooterComponent} from "./common/footer.component";

@Component({
    selector: 'my-app',
    template: `
    <header-component></header-component>
    <router-outlet></router-outlet>
    <footer-component></footer-component>
    `,
    directives: [WelcomeComponent, LoginComponent, RegisterComponent, AlbumComponent, AlbumsComponent, HeaderComponent, FooterComponent, RouterOutlet]
})
@RouteConfig([
    {path: "/", name: "Home", component: WelcomeComponent, useAsDefault: true},
    {path: "/login", name: "Login", component: LoginComponent},
    {path: "/register", name: "Register", component: RegisterComponent},
    {path: "/albums", name: "Albums", component: AlbumsComponent},
    {path: "/album/:id", name: "Album", component: AlbumComponent}
])
export class AppComponent {

}