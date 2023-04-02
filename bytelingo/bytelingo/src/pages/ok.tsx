import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
    <Head>
        <title>ByteLingo: Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />

      </Head>

      <main className="flex flex-col items-center justify-center w-full h-full flex-1 px-20 text-center">
        {/* Log in portion */}
        <div className="bg-white text-black w-full py-12 px-12">
          <div className="py-3">
ok
          </div>
        </div>
    </main>
    </div>
  )
}
