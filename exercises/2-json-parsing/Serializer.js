import React, { Component } from 'react'
import Heading from './blocks/heading'
import Image from './blocks/image'
import Paragraph from './blocks/paragraph'

const Serializer = (props) => {
  const { data } = props

  // We have some incoming data, presumibly containing all the information we need
  // can you call the sub-components based off from the _type coming from the JSON?

  // Implement your logic here :)

  return (
    <p>
      Whoops, you should display one of the sub components
      here but it&apos;s not rendering properly, check
      {' '}
      <code>Serializer.js!</code>
    </p>
  )
}

export default Serializer
