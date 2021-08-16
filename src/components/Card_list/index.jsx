import { observer, inject } from "mobx-react";
import { useEffect, useState } from "react";

import { Card } from "./Card";

const List = inject('tickets')(observer(function ({ tickets }) {
  let [page, setPage] = useState(1);

  useEffect(() => {
    tickets.reciveSearchID()
  }, []);

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
            <button onClick={paginationList} className="show-more col-12">Показать еще 5 билетов!</button>

          </>

            : "Loading...."
        }
      </div>
    </>
  )
}));

export { List };