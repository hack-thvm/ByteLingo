import Head from 'next/head'
import React, {Fragment, SyntheticEvent, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './header'

export default function Match() {

const [lives, setLives] = useState(3);

const submit = () => {
    const newLives = lives - 1;
    setLives(newLives);
    console.log(newLives);
}
  return (
    <Fragment>
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
    <Head>
        <title>ByteLingo: Lesson</title>
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
      </Head>
      <Header lives={lives}/>
      <main>
        <div className="left-0 top-0 text-center">
          Choose an answer
          <div className='btn-group d-grid gap-2'>
            <div>
              <button type="button" className="btn btn-primary btn-block" id="ifbut" name="align"  onClick={submit}> incorrect </button>
            </div><div>
            <button type="button" className="btn btn-primary btn-block" id="ifbut" name="align"  onClick={submit}> correct </button>

            </div><div>
            <button type="button" className="btn btn-primary btn-block" id="ifbut" name="align"  onClick={submit}> correct </button>

            </div>
          </div>
        </div>
      </main>
    </div>
    </Fragment>
  )
}
