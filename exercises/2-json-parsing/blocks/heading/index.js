import React from 'react'

const Heading = (props) => {
  const { attributes, data } = props
  const { id, classes, tag } = attributes
  const HeadingTag = tag || 'h1'

  return <HeadingTag id={id} className={classes}>{data}</HeadingTag>
}

export default Heading
