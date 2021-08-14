import company_logo from "../../assets/img/company_logo.png";


export function Card(){
    return (
        <div className="card gy-5">
        <div className="d-flex align-items-center justify-content-between">
          <div className="card__price">13 400 Р</div>
          <div className="card__logo">
            <img src={company_logo} alt="" />
          </div>
        </div>
        
        <div className="flight-option-list">
          <div className="d-flex flight-option">
            <div className="col flight">
              <div className="flight-option__header">MOW – HKT</div>
              <div className="flight-option__value">10:45 – 08:00</div>
            </div>
            <div className="flight_time col">
              <div className="flight-option__header">В пути</div>
              <div className="flight-option__value">21ч 15м</div>
            </div>
            <div className="col transfer-count">
              <div className="flight-option__header">2 пересадки</div>
              <div className="flight-option__value">HKG, JNB</div>
            </div>
          </div>
        </div>
      </div>
    )
}