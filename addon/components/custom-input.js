import component from '@glimmer/component';
export default class CustomInputComponent extends component{
    constructor(){
        super(...arguments);
        console.log("hello")
    }
}