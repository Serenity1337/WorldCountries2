import React, { useState, useEffect } from 'react'
import FilterControl from '../../Components/FilterControl'
import { countries } from '../../Utils/CountryList'
export const Home = () => {
  const [values, setValues] = useState({
    population: true,
    filteredData: [],
  })

  return (
    <div>
      <FilterControl
        values={values}
        setValues={setValues}
        countries={countries}
      />
    </div>
  )
}
