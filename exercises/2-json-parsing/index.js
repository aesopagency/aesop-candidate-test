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
          console.log(item)

          return <Serializer key={key} data={item} />
        })
      }
      <hr />
      <p>For extra debbugging comodity you can look at the incoming JSON below</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default JsonParsingExercise
