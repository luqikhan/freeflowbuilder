import React from 'react'
import Browser from './Browser'
import { Download as DownloadSection, Footer, Navigation } from './sections'

const Download = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <DownloadSection/>
      <Footer/>
    </Browser>
  )
}


export default Download