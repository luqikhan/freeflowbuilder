import React from 'react'
import { Footer, Hero3, Navigation } from './sections';
import Browser from './Browser';

const Website = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <Hero3/>
      <Footer />
    </Browser>
  )
}

export default Website
