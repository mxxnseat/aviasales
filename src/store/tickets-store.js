import { makeAutoObservable, action, observable, reaction, configure, runInAction } from "mobx";
import axios from "../helpers/overAxios";
import Options from "./options-store";

import { cheapestTickets, fasterTickets, optimalTickets } from "../helpers/sort";

configure({
    enforceActions: "observed"
});

class Tickets {
    clear_list = [];

    @observable
    list = [];

    searchID = null;

    constructor() {
        makeAutoObservable(this);

        this.isStop = false;
    }

    sortByOptions(options, array) {
        return array.filter(ticket => {
            return options.has(ticket.segments[0].stops.length) && options.has(ticket.segments[1].stops.length);
        });
    }
    sortByType(type, array) {
        let result = []
        switch (type) {
            case 'cheapest': {
                result = cheapestTickets(array);
                break;
            }
            case 'faster': {
                result = fasterTickets(array);
                break;
            }
            case 'optimal': {
                result = optimalTickets(array);
                break;
            }
            default: {
                result = cheapestTickets(array);
            }
        }

        return result;
    }
    sortTickets(o, array) {
        return this.sortByType(o.type, this.sortByOptions(o.options, array));
    }
    @action recieveTickets(o) {
        if(this.isStop){
            this.list = this.sortTickets(o, this.clear_list);

            return;
        }

        const searchString = `https://front-test.beta.aviasales.ru/tickets?searchId=${this.searchID}`;

        axios.get(searchString)
            .then(({ data }) => {
                if(data.stop){
                    this.isStop = true;
                    runInAction(()=>{
                        this.clear_list = data.tickets;
                        this.list = this.sortTickets(o, data.tickets);
                    });
                    return;
                }

                runInAction(() => {
                    this.list = this.sortTickets(o, data.tickets);
                });
            })
            .catch(e => {
                this.recieveTickets(o);
            })
    }
    reciveSearchID(o = {
        type: 'cheapest',
        options: new Set([0,1,2,3])
    }) {
        axios.get('https://front-test.beta.aviasales.ru/search')
            .then(({ data }) => {
                this.searchID = data.searchId;

                this.recieveTickets(o);
            });
    }
}

const tickets = new Tickets();

reaction(
    () => ({
        type: Options.flight_type,
        options: Options.optionsSet
    }),
    (o) => {
        tickets.recieveTickets(o);
    }
)

export default tickets;