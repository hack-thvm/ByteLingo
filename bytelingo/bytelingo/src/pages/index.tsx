import Head from 'next/head'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
    <Head>
        <title>ByteLingo: Home</title>
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full h-full flex-1 px-20 text-center">
        <div className="border border-gray-600 bg-white text-black w-full py-12 px-12">
        <div className="text-center">
          <h1 className="mb-5">Welcome to ByteLingo</h1>
        </div>
          <div className="py-3">
            <div className="grid grid-cols-3 gap-4 items-center ">
              <div className="grid grid-rows-3 flex justify-center bg-gray-100 border border-gray-600 rounded-lg px-2 py-10 m-2">
                <h3>Python</h3>
                <div>
                  An intuitive, high-level language that emphasizes code readability.
                </div>
                <div className="mb-5">
                  <a href="/python">
                  <button type="button" className="btn btn-success">Start</button>
                  </a>
                </div>
              </div>
              <div className="grid grid-rows-3 flex justify-center bg-gray-100 border border-gray-600 rounded-lg px-2 py-10 m-2">
                <h3>Java</h3>
                <div>
                  A programming language that is compatible with many different operating environments.
                </div>
                <div className="mb-5">
                  <a href="/java">
                  <button type="button" className="btn btn-success">Start</button>
                  </a>
                </div>                
                </div>
              <div className="grid grid-rows-3 flex justify-center bg-gray-100 border border-gray-600 rounded-lg px-2 py-10 m-2">
                <h3>C</h3>
                <div>
                  A powerful, low-level language that can be used to write flexible code.
                </div>
                <div className="mb-5">
                  <a href="/c">
                  <button type="button" className="btn btn-success">Start</button>
                  </a>
                </div>  
                </div>
            </div> 
          </div>
        </div>
    </main>
    </div>
  )
}
