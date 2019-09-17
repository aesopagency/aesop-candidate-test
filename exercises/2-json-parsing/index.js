import React from 'react'
import Serializer from './Serializer'

const JsonParsingExercise = (props) => {
  const { data } = props

  return (
    <>
      <h1>Welcome to your Json parsing exercise</h1>
      {
        data.map((item, index) => {
          const key = `${item._type}-${index}`

          return <Serializer key={key} data={item} />
        })
      }
    </>
  )
}

export default JsonParsingExercise
