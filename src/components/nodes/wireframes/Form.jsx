import React from 'react'
import Browser from './Browser'
import { Form as FormSection, Footer, Navigation } from './sections'

const Form = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <FormSection/>
      <Footer/>
    </Browser>
  )
}

export default Form