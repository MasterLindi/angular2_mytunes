import {Component, OnInit} from 'angular2/core';
import {MusicService} from "./services/music.srv";
import {IAlbum} from "./models/ialbum";

@Component({
    selector: 'albums-component',
    template: `
    <h1>Albums</h1>
    <ul>
        <li *ngFor="#album of albums">
        {{ album.name }}
        </li>
    </ul>
    `,
    providers: [MusicService]
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