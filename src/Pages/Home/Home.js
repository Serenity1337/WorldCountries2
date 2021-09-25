import React, { useState, useEffect } from 'react'
import CountriesCard from '../../Components/CountriesCard'
import FilterControl from '../../Components/FilterControl'
import { countries } from '../../Utils/CountryList'
export const Home = () => {
  const [values, setValues] = useState({
    filteredData: [],
    basedOnIncluded: false,
  })
  useEffect(() => {
    const valuesCopy = { ...values }
    valuesCopy.filteredData = countries
    setValues(valuesCopy)
  }, [])

  return (
    <div>
      <FilterControl
        values={values}
        setValues={setValues}
        countries={countries}
      />
      <CountriesCard filteredData={values.filteredData} />
    </div>
  )
}
