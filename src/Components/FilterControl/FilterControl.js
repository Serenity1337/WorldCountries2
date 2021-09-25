import React from 'react'
import classes from './FilterControl.module.scss'
import Header from '../Header'
export const FilterControl = (props) => {
  const sequentialCountryFilterHandler = (countries) => {
    const valuesClone = { ...props.values }
    valuesClone.basedOnIncluded = false
    props.setValues(valuesClone)
  }
  const includedValueCountryFilterHandler = (countries) => {
    const valuesClone = { ...props.values }
    valuesClone.basedOnIncluded = true
    props.setValues(valuesClone)
  }
  const searchBarFilterHandler = (event) => {
    // const testFilter = filterBasedOnIncludedLetter(
    //   event.target.value,
    //   props.countries
    // )
    const testFilter2 = filteredBasedOnSequentialLetters(
      event.target.value,
      props.countries
    )
    console.log(testFilter2)
  }
  const filterBasedOnIncludedLetter = (searchValue, countries) => {
    const countriesCopy = [...countries]
    return countriesCopy.filter((country) => {
      return country.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    })
  }
  const filteredBasedOnSequentialLetters = (searchValue, countries) => {
    // console.log(searchValue)
    const countriesCopy = [...countries]
    if (searchValue.length < 1) {
      return countries
    } else {
      return countriesCopy.filter((country) => {
        for (let index = 0; index < searchValue.length; index++) {
          if (
            `${country[index]}`.toLowerCase() !==
            `${searchValue[index]}`.toLowerCase()
          ) {
            return false
          }
        }
        return true
      })
    }
  }

  return (
    <div className={classes.filterControlContainer}>
      <Header countries={props.countries} />
      <div className={classes.btnContainer}>
        <button
          className={classes.startingWordBtn}
          onClick={() => sequentialCountryFilterHandler(props.countries)}
        >
          Starting Word
        </button>
        <button
          className={classes.includedLetterBtn}
          onClick={() => includedValueCountryFilterHandler(props.countries)}
        >
          Search With Any Word
        </button>
      </div>
      <input
        type='text'
        name='searchBar'
        id='searchBar'
        className={classes.searchBar}
        onChange={searchBarFilterHandler}
      />
      {/* {props.values.population ? (
        <span className={classes.filterControlSubheading}>
          10 most populated countries in the world
        </span>
      ) : (
        <span className={classes.filterControlSubheading}>
          10 most spoken languages in the world
        </span>
      )} */}
    </div>
  )
}
