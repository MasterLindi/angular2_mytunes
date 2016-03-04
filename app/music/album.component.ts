import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'album-component',
    template: `
    <h1>Album</h1>
    `
})

export class AlbumComponent {
    constructor(private routeParams:RouteParams) {
        alert("page: " + this.routeParams.get("page") + " id: " + this.routeParams.get("id"));
    }
}