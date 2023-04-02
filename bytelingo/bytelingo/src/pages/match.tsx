import Head from 'next/head'
import React, {Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './header'

function buttonClick(id: React.MouseEvent<HTMLInputElement, MouseEvent>){

}

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
        <div className="left-0 top-0 text-center">
          pick
          <div className='btn-group d-grid gap-2'>
            <div>
              <input type="button" id="ifbut" name="align" onClick={id=>buttonClick(id)}/>
              <label className="btn outline-primary btn-block">if else</label>
            </div><div>
              <input type="button" id="elifbut" name="align" />
              <label className="btn btn-primary btn-block">elif</label>
            </div><div>
              <input type="button" id="elsebut" name="align" />
              <label className="btn btn-primary btn-block">else</label>
            </div>
          </div>
        </div>
      </main>
    </div>
    </Fragment>
  )
}
