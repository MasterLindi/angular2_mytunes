System.register(['angular2/core', "./services/music.srv", "angular2/router", "../common/pipes/ellpipsis.pipe"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, music_srv_1, router_1, ellpipsis_pipe_1;
    var AlbumsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (music_srv_1_1) {
                music_srv_1 = music_srv_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ellpipsis_pipe_1_1) {
                ellpipsis_pipe_1 = ellpipsis_pipe_1_1;
            }],
        execute: function() {
            AlbumsComponent = (function () {
                function AlbumsComponent(musicService) {
                    this.musicService = musicService;
                    this.albums = [];
                }
                AlbumsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.musicService.albumSearch("linkin", 1)
                        .subscribe(function (results) {
                        _this.albums = results.albums;
                    });
                };
                AlbumsComponent = __decorate([
                    core_1.Component({
                        selector: 'albums-component',
                        template: "\n    <h1>Albums</h1>\n    <ul>\n        <li *ngFor=\"#album of albums\" [routerLink]=\"['Album', {id : album.id, page: 0}]\">\n        {{ album.name | ellipsis:5 }}\n        </li>\n    </ul>\n    ",
                        directives: [router_1.RouterLink],
                        providers: [music_srv_1.MusicService],
                        pipes: [ellpipsis_pipe_1.EllipsisPipe]
                    }), 
                    __metadata('design:paramtypes', [music_srv_1.MusicService])
                ], AlbumsComponent);
                return AlbumsComponent;
            }());
            exports_1("AlbumsComponent", AlbumsComponent);
        }
    }
});
//# sourceMappingURL=albums.component.js.map