import React from 'react'
import Caroussel from '../../Caroussel/Carousell'
import Screen1 from './Screen1/Screen1'
import Screen2 from './Screen2/Screen2'

export default function Container() {
  return (
    <div>
      {Caroussel(Screen1,Screen2)}
    </div>
  )
}
