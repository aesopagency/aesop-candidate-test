import React from 'react'

const Image = (props) => {
  const { attributes } = props
  const {
    classes, src, id, alt,
  } = attributes

  return (
    <img
      id={id}
      className={classes}
      src={src}
      alt={alt}
    />
  )
}

export default Image
