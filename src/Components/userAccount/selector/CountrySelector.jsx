//source: https://www.npmjs.com/package/react-select-country-list
//npm install react-select-country-list --save
//npm add react-select (npm complains that react-select module is  not found)

import React, { useState, useMemo } from "react"
import Select from "react-select"
import countryList from "react-select-country-list"

function CountrySelector() {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
    console.log(value)
  }

  return <Select options={options} value={value} onChange={changeHandler} />
}

export default CountrySelector