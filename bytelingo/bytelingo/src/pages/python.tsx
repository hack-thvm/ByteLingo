import React, {Fragment, useState} from 'react'
import Head from 'next/head'
import Header from './header'
import 'bootstrap/dist/css/bootstrap.css'
import Button from './components/Button'


export default function Python() {
    //const name = "ah-ge"
    //const x = true
  
    return (
      <Fragment>
      <div className="header bg-black text-white absolute left-0 top-0 w-full py-20 text-center">
            <h2>Python Game Levels</h2>
      </div>  
      <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
        <Head>
            <title>ByteLingo: Lesson</title>
            <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
        </Head>
          <main className="bg-white">
            <div className="mb-5">
              <a href="/match">
              <button type="button" className="btn btn-success">Easy</button>
              </a>
            </div>

            <div className="mb-5">
              <a href="/swap">
              <button type="button" className="btn btn-success">Medium</button>
              </a>
            </div>
            


          </main>
      </div>
      </Fragment>
    )
  }
  
