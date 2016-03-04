import {IAlbum,AlbumSize} from "./ialbum";

export class Album implements IAlbum{
    name:string;
    artist:string;
    id:number;
    url:string;

    getImage(size:AlbumSize) {
    }
}