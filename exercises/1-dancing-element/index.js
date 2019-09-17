import { Component } from 'react'

import './style.scss'

export default class DancingElementExercise extends Component {
  componentDidMount() {
    // Nextjs precompiles components to render in server side wherever possible,
    // this means if you try to import libraries that work only on client-side
    // it will fail to compile your page.
    // (eg: if they interact with browser `window` global)

    // However componentDidMount only triggers on client side
    // so we can require our client-side only libraries in here
    // for example: const jQuery = require('jquery')
  }

  render() {
    // Build your element here
    return null
  }
}
