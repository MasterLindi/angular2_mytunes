import {IAlbum,AlbumSize} from "./ialbum";

export class Album implements IAlbum{
    name:string;
    artist:string;
    id:number;
    url:string;

    constructor(id:number, name:string, artist: string, url:string){
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.url = url;
    }

    getImage(size:AlbumSize) {
    }
}