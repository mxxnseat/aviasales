function separateMinutes(duration){
    const hours = Number.parseInt(duration/60);
    const minutes = duration%60;

    return {
        hours,
        minutes
    }
}

function extractTime(date){
    const time = date.match(/(.*)T(.*)Z$/)[2];
    const matchGroup = time.match(/(?<h>\d+):(?<m>\d+)/).groups;

    
    return matchGroup
}

function calcDestinationComes(hours, minutes){
    let sumMinutes = Number.parseInt(minutes[0])+Number.parseInt(minutes[1]);
    let sumHours = Number.parseInt(hours[0])+Number.parseInt(hours[1]);
    if(sumMinutes>59){
        sumMinutes = sumMinutes % 60;
        sumHours = Number.parseInt(hours[0])+Number.parseInt(hours[1]) + 1;
    }
    if(sumHours>23){
        sumHours = (sumHours%24).toString().length === 1 ? `0${sumHours%24}` : sumHours%24;
    }
    // const sumHours = Number.parseInt(hours[0])+Number.parseInt(hours[1]);


    return `${sumHours}:${sumMinutes}`;
}


export {
    extractTime,
    separateMinutes,
    calcDestinationComes
}