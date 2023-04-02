import Head from 'next/head'
import React, {Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

type HeaderProps = {
  lives: number;
};

export default function Header({lives} : HeaderProps) {
  return (
    <Fragment>
        <div className="header bg-black text-white absolute left-0 top-0 w-full py-10 text-center">
            <h2>Lives Left: {lives}</h2>
        </div>
    </Fragment>
  )
}
