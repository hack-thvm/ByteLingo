import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from "next/router";
import React, {Fragment, SyntheticEvent, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

type HeaderProps = {
  game: string;
};

export default function LosePage({game}: HeaderProps) {

  const router = useRouter();

const restart = async(e: SyntheticEvent) => {
  console.log(game);
  if (game){
    await router.replace(`/${game}`);
  }
};

const home = async(e: SyntheticEvent) => {
  await router.push('/');
}

  return (
    <Fragment>
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-red-600">
    <Head>
        <title>ByteLingo: Murder</title>
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
      </Head>
      <main className="text-center">
        <Image src="/angy.png" alt="" width={550} height={500}/>

        <h1>Wuh-oh! Byte bytes you to death!</h1>
        <div>
              {/* <button type="button" className="btn btn-dark btn-block mx-4 my-5" id="ifbut" name="align"  onClick={restart}> Restart </button> */}
              <button type="button" className="btn btn-dark btn-block mx-4 my-5" id="ifbut" name="align"  onClick={home}> Home </button>
            </div>
      </main>
    </div>
    </Fragment>
  )
}
