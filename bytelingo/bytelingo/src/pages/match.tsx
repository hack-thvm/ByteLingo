import Head from 'next/head'
import React, {Fragment, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './header'


export default function Match() {
  const [left1Color, setLColor1] = useState("btn btn-outline-success btn-block btn-lg")
  const [left2Color, setLColor2] = useState("btn btn-outline-success btn-block btn-lg")
  const [left3Color, setLColor3] = useState("btn btn-outline-success btn-block btn-lg")
  const [left4Color, setLColor4] = useState("btn btn-outline-success btn-block btn-lg")

  const [right1Color, setRColor1] = useState("btn btn-outline-warning btn-block btn-lg")
  const [right2Color, setRColor2] = useState("btn btn-outline-warning btn-block btn-lg")
  const [right3Color, setRColor3] = useState("btn btn-outline-warning btn-block btn-lg")
  const [right4Color, setRColor4] = useState("btn btn-outline-warning btn-block btn-lg")

  const handleClick = (id: number) => {
    if (id > 10){
      if (id == 11){
        setRColor1("btn btn-warning btn-block btn-lg")
      } else if (id == 12){
        setRColor2("btn btn-warning btn-block btn-lg")
      } else if (id == 13){
        setRColor3("btn btn-warning btn-block btn-lg")
      } else {
        setRColor4("btn btn-warning btn-block btn-lg")
      }
    } else {
      if (id == 1){
        setLColor1("btn btn-success btn-block btn-lg")
      } else if (id == 2){
        setLColor2("btn btn-success btn-block btn-lg")
      } else if (id == 3){
        setLColor3("btn btn-success btn-block btn-lg")
      } else {
        setLColor4("btn btn-success btn-block btn-lg")
      }
    }
    submit(id)
  };
  const [lives, setLives] = useState(3);
  var [left, right] = [-1,-1]
  var disabled = [false, false, false, false]

  const submit = (id: number) => {
    if (id > 10) {
      right = (id - 10);
    } else {
      left = id;
    }
    if (left > 0 && right > 0){
      if (left == right){
        disabled[left] = true
      } else {
        const newLives = lives - 1;
        //if lives < 0 game over
        setLives(newLives);
        console.log(newLives);
      }
      left = -1;
      right = -1;
    }
  }
  return (
    <Fragment>
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
    <Head>
        <title>ByteLingo: Lesson</title>
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
      </Head>
      <Header lives={lives} />
      <main>
        <h3 className="left-0 top-0 text-center">
          pick
            <div className= "left-10">
              <div>
              <button type="button" id="1" name="align" disabled = {disabled[1]} onClick={() => handleClick(1)}/>
              <label className={left1Color}>if</label>
            </div><div>
              <input type="button" id="2" name="align" disabled = {disabled[2]} onClick={() => handleClick(2)}/>
              <label className={left2Color}>elif</label>
            </div><div>
              <input type="button" id="3" name="align" disabled = {disabled[3]} onClick={() => handleClick(3)}/>
              <label className={left3Color}>else</label>
            </div><div>
              <input type="button" id="4" name="align" disabled = {disabled[4]} onClick={() => handleClick(4)}/>
              <label className={left4Color}>else</label>
            </div>
          </div> <div className='right-10'>
            <div>
              <button type="button" id="11" name="align" disabled = {disabled[1]} onClick={() => handleClick(11)}/>
              <label className={right1Color}>if</label>
            </div><div>
              <input type="button" id="12" name="align" disabled = {disabled[2]} onClick={() => handleClick(12)}/>
              <label className={right2Color}>elif</label>
            </div><div>
              <input type="button" id="13" name="align" disabled = {disabled[3]} onClick={() => handleClick(13)}/>
              <label className={right3Color}>else</label>
            </div><div>
              <input type="button" id="14" name="align" disabled = {disabled[4]} onClick={() => handleClick(14)}/>
              <label className={right4Color}>else</label>
            </div>
            </div>
        </h3>
      </main>
    </div>
    </Fragment>
  )
}
