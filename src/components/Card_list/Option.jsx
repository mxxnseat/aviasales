import { extractTime, separateMinutes,calcDestinationComes } from "../../helpers/date";

export function Option({ date, destination, duration, origin, stops }) {
    const {hours, minutes} = separateMinutes(duration);
    const {h, m} = extractTime(date);
    const destinationTime = calcDestinationComes([hours,h], [minutes, m]);


    return (
        <div className="d-flex flight-option">
            <div className="col flight">
                <div className="flight-option__header">{origin} – {destination}</div>
                <div className="flight-option__value">{h}:{m} – {destinationTime} </div>
            </div>
            <div className="flight_time col">
                <div className="flight-option__header">В пути</div>
                <div className="flight-option__value">{hours}ч {minutes}м</div>
            </div>
            <div className="col transfer-count">
                <div className="flight-option__header">{stops.length === 0 ? 'Без пересадок' : `${stops.length} пересадки`}</div>
                <div className="flight-option__value">
                    {
                        stops.map((stop, index) => {
                            return index === stops.length - 1 ? stop : `${stop}, `
                        })
                    }
                </div>
            </div>
        </div>
    )
}