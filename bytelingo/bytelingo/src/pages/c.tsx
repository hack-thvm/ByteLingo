import React, {Fragment, useState} from 'react'
import Head from 'next/head'
import Header from './header'
import 'bootstrap/dist/css/bootstrap.css'
import layoutStyles from '../styles/Layout.module.css';
import buttonStyles from '../styles/Button.module.css';
import messageStyles from '../styles/Message.module.css';


export default function C() {
    //const name = "ah-ge"
    //const x = true
  
    return (
      <Fragment>
      <div className={layoutStyles.container}>
            <h2 className="text-center">C Game Levels</h2>

            <div className={messageStyles.success}>
              Choose a game based on difficulty level.
            </div>
            <br />

            <div className="mb-2 text-center">
              <a href="/match">
              <button className={buttonStyles.easy}>Easy</button>
              </a>
            </div>

            <div className="mb-2 text-center">
              <a href="/swap">
              <button className={buttonStyles.medium}>Medium</button>
              </a>
            </div>

            <div className="mb-2 text-center">
              <a href="/game">
              <button className={buttonStyles.hard}> Hard</button>
              </a>
            </div>

            <div className="mt-5 text-center">
            <a href="/">
            <button className={buttonStyles.button} onClick={() => {
              console.log("Hello");
            }}
            >
              Home
            </button>
            </a>
            </div>
      </div>  
      </Fragment>
    )
  }
  
