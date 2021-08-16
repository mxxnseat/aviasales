import { action, makeObservable, observable, configure, computed } from "mobx";
configure({
    enforceActions: "observed"
})

class Options {
    @observable
    options = {
        all: {
            value: 1,
            transferOptions: [0, 1, 2, 3]
        },
        without: {
            value: 0,
            transferOptions: [0]
        },
        _1: {
            value: 0,
            transferOptions: [1]
        },
        _2: {
            value: 0,
            transferOptions: [2]
        },
        _3: {
            value: 0,
            transferOptions: [3]
        }
    };

    @observable
    flight_type = 'cheapest'

    constructor() {
        makeObservable(this);
    }

    @action
    toggleOption(option) {
        if (this.options[option].value === 1) { // Checking the selected option (toggle)
            this.options[option].value = 0;
            return true;
        }

        if (option === 'all') {           // Checking if selected option is all, then other options gones 0

            for (let k in this.options) {
                this.options[k].value = 0;
            }
            this.options['all'].value = 1;
            return true;
        } else {
            let counter = 0;            // variables for count options with value 1
            for (let k in this.options) {
                if (k === option) {
                    this.options[option].value = 1;
                }
                if (this.options[k].value === 1) counter++;
            }

            if (counter === Object.keys(this.options).length - 1) { // if all options equal 1 then options reset and option all goes 1
                for (let k in this.options) {
                    this.options[k].value = 0;
                }
                this.options['all'].value = 1;
            } else {
                this.options['all'].value = 0;
            }
            return true;
        }
    }

    @action
    setFlightType(type) {
        this.flight_type = type;
    }

    @computed get optionsSet(){
        const set = new Set();

        for(let k in this.options){
            if(this.options[k].value === 1){
                this.options[k].transferOptions.forEach(option=>{
                    set.add(option);
                });
            }
        }
        if(set.size === 0){
            this.options['all'].transferOptions.forEach(option=>{
                set.add(option);
            });
        }

        return set;
    }
}

export default new Options();