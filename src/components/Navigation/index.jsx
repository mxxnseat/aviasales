import { observer, inject } from "mobx-react";

import cn from "classnames";

const Navigation = inject('options')(observer(function ({ options }) {
    const cheapest = { active: options.flight_type === "cheapest" };
    const faster = { active: options.flight_type === "faster" };
    const optimal = { active: options.flight_type === "optimal" };

    return (
        <div className="navigation">
            <div
                className={cn('navigation__link col', cheapest)}
                onClick={() => options.setFlightType("cheapest")}
                >Самый дешевый</div>

            <div
                className={cn('navigation__link col', faster)}
                onClick={() => options.setFlightType("faster")}
            >Самый быстрый</div>

            <div
                className={cn('navigation__link col', optimal)}
                onClick={() => options.setFlightType("optimal")}
            >Оптимальный</div>
        </div>
    )
}))

export { Navigation };