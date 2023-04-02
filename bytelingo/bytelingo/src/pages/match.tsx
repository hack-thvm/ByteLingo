import Head from 'next/head'
import React, {Fragment, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './header'


export default function Match() {
  const [active, setActive] = useState(false);
  const [leftColor, setColor] = useState([false, false, false, false])
  const [rightColor, setRColor] = useState([false, false, false, false])
  const handleClick = (id: number) => {
    setActive(!active);
    submit(id)
    var temp
    if (id > 10){
      temp = rightColor
      temp[id] = true
      setRColor(temp)
    } else {
      temp = leftColor
      temp[id] = true
      setColor(temp)
    }
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
        <div className="left-0 top-0 text-center">
          pick
          <div className='btn-group d-grid gap-2'>
            <div>
              <button type="button" id="1" name="align" disabled = {disabled[1]} onClick={(e) => handleClick(1)}>if else</button>
              <label className={leftColor[1] ? "btn btn-outline-success btn-block" : "btn btn-success btn-block"}>elif</label>
            </div><div>
              <input type="button" id="2" name="align" disabled = {disabled[2]} onClick={(e) => handleClick(2)}/>
              <label className={leftColor[2] ? "btn btn-outline-success btn-block" : "btn btn-success btn-block"}>elif</label>
            </div><div>
              <input type="button" id="3" name="align" disabled = {disabled[3]} onClick={(e) => handleClick(3)}/>
              <label className={leftColor[3] ? "btn btn-outline-success btn-block" : "btn btn-success btn-block"}>else</label>
            </div><div>
              <input type="button" id="4" name="align" disabled = {disabled[4]} onClick={(e) => handleClick(4)}/>
              <label className={leftColor[4] ? "btn btn-outline-success btn-block" : "btn btn-success btn-block"}>else</label>
            </div>
          </div>
          <div className='btn-group d-grid gap-2'>
            <div>
              <button type="button" id="11" name="align" disabled = {disabled[1]} onClick={(e) => handleClick(11)}/>
              <label className={rightColor[1] ? "btn btn-outline-warning btn-block" : "btn btn-warning btn-block"}>if else</label>
            </div><div>
              <input type="button" id="12" name="align" disabled = {disabled[2]} onClick={(e) => handleClick(12)}/>
              <label className={rightColor[2] ? "btn btn-outline-warning btn-block" : "btn btn-warning btn-block"}>elif</label>
            </div><div>
              <input type="button" id="13" name="align" disabled = {disabled[3]} onClick={(e) => handleClick(13)}/>
              <label className={rightColor[3] ? "btn btn-outline-warning btn-block" : "btn btn-warning btn-block"}>else</label>
            </div><div>
              <input type="button" id="14" name="align" disabled = {disabled[4]} onClick={(e) => handleClick(14)}/>
              <label className={rightColor[4] ? "btn btn-outline-warning btn-block" : "btn btn-warning btn-block"}>else</label>
            </div>
          </div>
        </div>
      </main>
    </div>
    </Fragment>
  )
}
