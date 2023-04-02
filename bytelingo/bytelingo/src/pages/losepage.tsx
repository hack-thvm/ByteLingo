import Head from 'next/head'
import {useRouter} from "next/router";
import React, {Fragment, SyntheticEvent, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default function Game() {

const [lives, setLives] = useState(3);
const router = useRouter();

const restart = async(e: SyntheticEvent) => {
  await router.push('/game');
};
const home = async(e: SyntheticEvent) => {
  await router.push('/');
}

  return (
    <Fragment>
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-red">
    <Head>
        <title>ByteLingo: Murder</title>
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
      </Head>
      <main className="text-center">
        <h1>Wuh-oh! You got byt to death!</h1>
        <div>
              <button type="button" className="btn btn-primary btn-block mx-4 my-5" id="ifbut" name="align"  onClick={restart}> Restart </button>
              <button type="button" className="btn btn-primary btn-block mx-4 my-5" id="ifbut" name="align"  onClick={home}> Home </button>

            </div>
      </main>
    </div>
    </Fragment>
  )
}
