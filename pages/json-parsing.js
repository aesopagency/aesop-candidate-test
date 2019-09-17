import React, { Component } from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-fetch'
import JsonParsingExercise from 'exercises/2-json-parsing'

export default class JsonParsing extends Component {
  static getInitialProps = async () => {
    const simple = await fetch('http://localhost:3000/static/json/simple.json').then((res) => res.json())
    const hard = await fetch('http://localhost:3000/static/json/hard.json').then((res) => res.json())
    const malformed = await fetch('http://localhost:3000/static/json/malformed.json').then((res) => res.json())
    return { simple, hard, malformed }
  }

  constructor(props) {
    super(props)
    this.state = {
      choice: null,
    }
  }

  selectJson(selector) {
    const { simple, hard, malformed } = this.props

    const map = {
      simple,
      hard,
      malformed,
    }

    this.setState({
      choice: map[selector],
    })
  }

  render() {
    const { choice } = this.state
    const labels = [
      'simple',
      'hard',
      'malformed',
    ]

    return (
      <div>
        <Head>
          <title>JsonParsing</title>
        </Head>
        <main className="wrapper">
          {labels.map((item) => <button type="button" onClick={() => this.selectJson(item)}>{`Select ${item}.json`}</button>)}
          {choice ? <JsonParsingExercise data={choice} /> : null}
        </main>
      </div>
    )
  }
}
