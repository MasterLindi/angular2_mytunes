import {Component, OnInit} from 'angular2/core';
import {MusicService} from "./services/music.srv";
import {IAlbum} from "./models/ialbum";
import {RouterLink} from "angular2/router";
import {EllipsisPipe} from "../common/pipes/ellpipsis.pipe";

@Component({
    selector: 'albums-component',
    template: `
    <h1>Albums</h1>
    <ul>
        <li *ngFor="#album of albums" [routerLink]="['Album', {id : album.id, page: 0}]">
        {{ album.name | ellipsis:5 }}
        </li>
    </ul>
    `,
    directives: [RouterLink],
    providers: [MusicService],
    pipes: [EllipsisPipe]
})
export class AlbumsComponent implements OnInit {
    constructor(private musicService:MusicService) {

    }

    public albums:Array<IAlbum> = [];

    ngOnInit() {
        this.musicService.albumSearch("linkin", 1)
            .subscribe(results => {
                this.albums = results.albums;
            });
    }
}