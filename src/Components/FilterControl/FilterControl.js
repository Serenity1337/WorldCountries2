import React from 'react'
import classes from './FilterControl.module.scss'
import Header from '../Header'
export const FilterControl = (props) => {
  const filteredBasedOnSequentialLetters = (countries) => {}
  const filterBasedOnIncludedLetter = (countries) => {}
  return (
    <div className={classes.filterControlContainer}>
      <Header countries={props.countries} />
      <div className={classes.btnContainer}>
        <button
          className={classes.startingWordBtn}
          onClick={() => filteredBasedOnSequentialLetters(props.countries)}
        >
          Starting Word
        </button>
        <button
          className={classes.includedLetterBtn}
          onClick={() => filterBasedOnIncludedLetter(props.countries)}
        >
          Search With Any Word
        </button>
      </div>
      <input
        type='text'
        name='searchBar'
        id='searchBar'
        className={classes.searchBar}
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
