export interface IAlbum {
    name: string;
    artist: string;
    id: number;
    url: string;
    getImage(size:AlbumSize);
}

export enum AlbumSize{
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}