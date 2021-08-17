import { observer, inject } from "mobx-react";
import { useEffect, useState } from "react";

import { Card } from "./Card";

const List = inject('tickets')(observer(function ({ tickets }) {
  let [page, setPage] = useState(1);

  useEffect(() => {
    setTimeout(()=>{
      tickets.reciveSearchID()
    }, 1500);
  }, []);

  useEffect(()=>setPage(1), [tickets.list]);

  const paginationList = () => {
    setPage(++page);
  }


  return (
    <>
      <div className="list">
        {
          tickets.list.length ? <>
            {tickets.list.slice(0, page * 5).map((ticket, index) => {
              return <Card key={index} {...ticket} />
            })}
            {
            page * 5 <= tickets.list.length ?
              <button onClick={paginationList} className="show-more col-12">Показать еще 5 билетов!</button>
              : ''
            }

          </>

            : <>
              <img alt="loading gif" className="list__loading" src={require("../../assets/img/loading.gif").default} />
            </>
        }
      </div>
    </>
  )
}));

export { List };