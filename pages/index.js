import React, {useState} from 'react'
import Layout from "../components/Layout"
import Dropdown from "../components/Dropdown/Dropdown"

const Index = () => {
    const [options, setOptions] = useState([
        {
            "name": "Item 1",
            "value": "item1",
            "selected": false
        },
        {
            "name": "Item 2",
            "value": "item2",
            "selected": false
        },
        {
            "name": "Item 3",
            "value": "item3",
            "selected": false
        }
    ])

    const handleChange = (e) => {
        const selected = e.target.getAttribute('value')
        const updatedOpt = options.map((option) => {
            option.selected = false
            if (option.value == selected) {
                option.selected = true
            }
            return option
        })

        setOptions(updatedOpt)
    }

    return (
        <Layout pagetitle="Homepage">
            <Dropdown options={options} noneSelected="Select Item" handleChange={handleChange} />
        </Layout>
    )
}

export default Index