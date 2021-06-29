
import {Child} from './internal'

export class Parent{
    hello(){
        console.log('Hello, I am parent!');
    }
    static createChild(){
        return new Child();
    }
}