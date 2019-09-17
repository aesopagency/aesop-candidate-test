import React, { Component } from 'react'
import Heading from './blocks/heading'
import Image from './blocks/image'
import Paragraph from './blocks/paragraph'

const Serializer = (props) => {
  const { data } = props
  const { _type, attributes } = data

  // Build your element here
  return <p>{`The sub-component for ${_type} should be called here but instead there's this paragraph`}</p>
}

export default Serializer
