
import {Child} from './Child'

export class Parent{
    hello(){
        console.log('Hello, I am parent!');
    }
    static createChild(){
        return new Child();
    }
}