import Head from 'next/head'
import React, {Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './header'

export default function Match() {
  return (
    <Fragment>
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
    <Head>
        <title>ByteLingo: Lesson</title>
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
      </Head>
      <Header />
      <main>
        <div className="text-center">
          What is an if statement?
          
        </div>
      </main>
    </div>
    </Fragment>
  )
}
