import Head from 'next/head'
import React, {Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default function Header() {
  return (
    <Fragment>
        <div className="header bg-black text-white absolute left-0 top-0 w-full py-20 text-center">
            <h2>Lives Left</h2>
        </div>
    </Fragment>
  )
}
