import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-fetch'
import JsonParsingExercise from 'exercises/2-json-parsing'

const JsonParsing = (props) => {
  const { data } = props

  return (
    <div>
      <Head>
        <title>JsonParsing</title>
      </Head>
      <main className="wrapper">
        <JsonParsingExercise data={data} />
      </main>
    </div>
  )
}

JsonParsing.getInitialProps = async () => {
  const simple = await fetch('http://localhost:3000/static/json/simple.json').then((res) => res.json())
  const hard = await fetch('http://localhost:3000/static/json/hard.json').then((res) => res.json())
  const malformed = await fetch('http://localhost:3000/static/json/malformed.json').then((res) => res.json())
  return { simple, hard, malformed }
}

export default JsonParsing
