import {toJS} from "mobx";
import { Option } from "./Option";

export function Card(props){
    const segments = toJS(props.segments);

    return (
        <div className="card gy-5">
        <div className="d-flex align-items-center justify-content-between">
          <div className="card__price">{props.price} Р</div>
          <div className="card__logo">
            <img src={`//pics.avs.io/99/36/${props.carrier}.png`} alt="" />
          </div>
        </div>
        
        <div className="flight-option-list">
          {
            segments.map((segment, index)=>{
              return <Option key={index} {...segment} />
            })
          }
        </div>
      </div>
    )
}