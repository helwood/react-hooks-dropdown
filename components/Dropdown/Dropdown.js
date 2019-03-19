import React, {useState, useEffect} from 'react'

import './scss/dropdown.scss'

const Dropdown = (props) => {
    const [options, setOptions] = useState(props.options)
    const [isOpen, setIsOpen] = useState(false)

    function getSelectedOpt() {
        let selected = {"name":props.noneSelected}
        options.map((opt) => {
            if(opt.selected) {
                selected = opt
            }
        })
        return selected
    }

    return (
        <div className="dd-wrapper">
            <div className="dd-header">
                <span>{getSelectedOpt().name}</span>
                {isOpen ? 
                    <i className="material-icons">expand_less</i> :
                    <i className="material-icons">expand_more</i>
                }
            </div>
            <ul className="dd-list">
                {options.map((option, index) => (
                    <li className="dd-option" 
                        key={`opt${index}`} 
                        value={option.value} 
                        onClick={props.handleChange}>
                            {option.name}
                            {option.selected ? 
                                'x' : ''
                            }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Dropdown