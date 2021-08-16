import { inject, observer } from "mobx-react";

const Options = inject('options')(observer(({options}) => {
  return ( 
    <div className="col-md-3 options">
      <div className="options__header">Количество пересадок</div>
      <label className="options__item"> 
        <input type="checkbox" checked={options.options.all.value} value onChange={()=>options.toggleOption('all')} />
        <div className="custom_checkbox"></div>
        <div className="options__name">Все</div>
      </label>
      <label className="options__item">
        <input type="checkbox" checked={options.options.without.value} onChange={()=>options.toggleOption('without')} />
        <div className="custom_checkbox"></div>
        <div className="options__name">Без пересадок</div>
      </label>
      <label className="options__item">
        <input type="checkbox" checked={options.options._1.value} onChange={()=>options.toggleOption('_1')} />
        <div className="custom_checkbox"></div>
        <div className="options__name">1 пересадка</div>
      </label>
      <label className="options__item">
        <input type="checkbox" checked={options.options._2.value} onChange={()=>options.toggleOption('_2')} />
        <div className="custom_checkbox"></div>
        <div className="options__name">2 пересадки</div>
      </label>
      <label className="options__item">
        <input type="checkbox" checked={options.options._3.value} onChange={()=>options.toggleOption('_3')} />
        <div className="custom_checkbox"></div>
        <div className="options__name">3 пересадки</div>
      </label>
    </div>
  )
}));

export { Options };