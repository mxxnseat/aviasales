import { inject, observer } from "mobx-react"

const Options = inject('options')(observer(() => {
  return (
    <div className="col-md-3 options">
      <div className="options__header">Количество пересадок</div>
      <label className="options__item">
        <input type="checkbox" />
        <div className="custom_checkbox"></div>
        <div className="options__name">Все</div>
      </label>
      <label className="options__item">
        <input type="checkbox" />
        <div className="custom_checkbox"></div>
        <div className="options__name">Без пересадок</div>
      </label>
      <label className="options__item">
        <input type="checkbox" />
        <div className="custom_checkbox"></div>
        <div className="options__name">1 пересадка</div>
      </label>
      <label className="options__item">
        <input type="checkbox" />
        <div className="custom_checkbox"></div>
        <div className="options__name">2 пересадки</div>
      </label>
      <label className="options__item">
        <input type="checkbox" />
        <div className="custom_checkbox"></div>
        <div className="options__name">3 пересадки</div>
      </label>
    </div>
  )
}));

export { Options };