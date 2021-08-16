import sortBy from "lodash/sortBy";

function cheapestTickets(list) {
    return sortBy(list, [(o) => o.price]);
}
function fasterTickets(list) {
    return list.sort((cur, next) => {

        const averageCurrentSegment = cur.segments.reduce((acc, el) => el.duration + acc, 0);
        const averageNextSegment = next.segments.reduce((acc, el) => el.duration + acc, 0);


        return averageCurrentSegment - averageNextSegment;
    });;
}

function optimalTickets(list) {
    function triSquare(time, price){
        return Math.abs(0.5*(0-(time-0)*(price)))
    }
    const res = list.sort((cur, next) => {
        const averageCurrentSegment = cur.segments.reduce((acc, el) => el.duration + acc, 0);
        const averageNextSegment = next.segments.reduce((acc, el) => el.duration + acc, 0);

        return (
            triSquare(averageCurrentSegment, cur.price) - triSquare(averageNextSegment, next.price)
        );
    });

    return res;
}

export {
    cheapestTickets,
    fasterTickets,
    optimalTickets
}

