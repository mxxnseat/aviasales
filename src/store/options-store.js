import { action, observable } from "mobx";


class Options{
    @observable options

    constructor(){
        this.options = [];
    }

    @action("set options")
    setOptions(option){
        this.options.push(option);
    }
}

const optionsStore = new Options();

export {optionsStore};