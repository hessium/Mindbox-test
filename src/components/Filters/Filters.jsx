import React, { useState } from 'react'
import cl from './Filters.module.scss'



const Filters = ({ setActiveFilter }) => {
    const [activeItem, setActiveItem] = useState(0)
    const filter = [
        { active: 0, name: 'Все' }, { active: 1, name: 'Завершенные' }, { active: 2, name: 'Активные' }
    ]

    const changeActiveFilter = (item) => {
        setActiveFilter(item)
        setActiveItem(item)
    }

    return (
        <div className={cl.filters}>
            {
                filter.map((item, id) => (
                    <div
                        className={cl.filters__item}
                        onClick={() => changeActiveFilter(item.active)}
                        key={id}
                        style={{
                            color: activeItem === item.active ? '#fff' : '',
                            borderColor: activeItem === item.active ? '#fff' : ''
                        }}
                    >
                        {item.name}
                    </div>
                ))
            }
        </div>
    )
}

export default Filters