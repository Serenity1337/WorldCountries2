import React from 'react'
import classes from './CountriesCard.module.scss'
export const CountriesCard = (props) => {
  console.log(props)
  const calculatePercentage = (currCountry, worldCountry) => {
    return Math.round((currCountry / worldCountry) * 100)
  }
  return (
    <div className={classes.populationContainer}>
      {props.filteredData.map((country, index) => (
        <div className={classes.dataContainer} key={country.name}>
          <div className={classes.country}>{country}</div>
        </div>
      ))}
    </div>
  )
}
