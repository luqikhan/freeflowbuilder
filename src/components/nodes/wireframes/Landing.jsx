import React from 'react'
import Browser from './Browser'
import {Footer, Hero, Hero2, Navigation} from './sections'

const Landing = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <Hero2 />
      <Footer />
    </Browser>
  )
}

export default Landing