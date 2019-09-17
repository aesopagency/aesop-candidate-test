/* eslint-disable max-len */
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from 'components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="heading">Welcome to the Aesop assessment test</h1>
      <p className="description">
        To get started, follow the readme and choose one of the exercises below.
      </p>

      <div className="row">
        <Link href="/dancing-element">
          <a className="card">
            <h3>1. Dancing Element &rarr;</h3>
            <p>
              The designer gave you a video reference to build a web component, can you replicate it?
            </p>
          </a>
        </Link>
        <Link href="/json-parsing">
          <a className="card">
            <h3>2. JSON Parsing &rarr;</h3>
            <p>
              Our third-party partner gave us access to their JSON feed, they would like to have a frontend working through it.
            </p>
          </a>
        </Link>
        <Link href="/troubleshoot">
          <a className="card">
            <h3>3. Troubleshoot existing code &rarr;</h3>
            <p>
              Sometimes you will need to dig through someone&apos;s else code, can you identify the problems and solve them?
            </p>
          </a>
        </Link>
      </div>
    </div>
  </div>
)

export default Home
