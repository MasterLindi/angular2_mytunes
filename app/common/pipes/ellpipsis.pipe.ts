import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

    transform(value:string, args:any[]):any {
        return value.substring(0, args[0]); //TODO add better logic here
    }
}