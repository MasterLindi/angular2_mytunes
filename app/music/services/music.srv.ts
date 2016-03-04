import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {IAlbum} from "../models/ialbum";
import {Album} from "../models/album";

@Injectable()
export class MusicService {

    private apiKey:string = "b889cad9ae94e8dcf876aabd27f71ceb"; //TODO make const

    constructor(private http:Http) {
    }

    private getApiUrl(query:string, page:number) {
        return "http://ws.audioscrobbler.com/2.0/?method=album.search&album="
            + query + "&api_key=" + this.apiKey + "&page=" + page + "&format=json";
    }

    albumSearch(query:string, page:number = 0) {
        return new Observable(observable => {
            this.http.get(this.getApiUrl(query, page))  //returns an Observable (stream) not Promise like in angular 1
                .map(res => {               //like function(res)
                    res = res.json();
                    var albums:Array<IAlbum> = [];
                    let results = res.results;
                    results.albummatches.album.forEach(data => {
                        albums.push(new Album(data["mbid"], data["name"], data["artist"], data["url"]));
                    });
                    return ({
                        albums: albums
                    });
                })
                .subscribe(res => {
                observable.next(res);
            });
        });
    }
}