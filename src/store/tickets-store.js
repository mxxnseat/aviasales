import { makeAutoObservable, action, observable, reaction, toJS, configure, runInAction } from "mobx";
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
    }

    sortByOptions(options) {
        return this.clear_list.filter(ticket => {
            return options.has(ticket.segments[0].stops.length) &&
                options.has(ticket.segments[1].stops.length)
        });;
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

    @action recieveTickets() {
        const searchString = `https://front-test.beta.aviasales.ru/tickets?searchId=${this.searchID}`;

        axios.get(searchString)
            .then(({ data }) => {
                runInAction(() => {
                    this.list = this.clear_list = cheapestTickets(data.tickets);
                });
            })
            .catch(e => {
                this.recieveTickets();
            })
    }
    @action reciveSearchID() {
        axios.get('https://front-test.beta.aviasales.ru/search')
            .then(({ data }) => this.searchID = data.searchId);
    }

    @action sortTickets(o) {
        this.list = this.sortByType(o.type,this.sortByOptions(o.options));
    }

}

const tickets = new Tickets();


reaction(
    () => tickets.searchID !== null,
    () => {
        tickets.recieveTickets()
    }
)

reaction(
    () => ({
        type: Options.flight_type,
        options: Options.optionsSet
    }),
    (o) => {
        tickets.sortTickets(o);
    }
)

export default tickets;