import React from 'react'
import classes from './Header.module.scss'
export const Header = (props) => {
  return (
    <header>
      <h1 className={classes.heading}>World Countries List</h1>
      <div className={classes.subHeading}>
        Total number of countries: {props.countries.length}
      </div>
    </header>
  )
}
