import component from '@glimmer/component';
import { action } from '@ember/object';

export default class CustomInputComponent extends component{
    @action
    onInput(ev){
        this.args.onInput(ev.target.value);
    }
}