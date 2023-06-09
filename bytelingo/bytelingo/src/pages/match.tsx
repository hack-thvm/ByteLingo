import Head from 'next/head'
import React, {Fragment, useState, SyntheticEvent} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './header'
import {useRouter} from "next/router";
import matchStyles from '../styles/Match.module.css';


export default function Match() {
  const router = useRouter();
  const firstStateG = "btn btn-outline-success btn-block btn-lg"
  const clickedStateG = "btn btn-success btn-block btn-lg"
  const firstStateY = "btn btn-outline-warning btn-block btn-lg"
  const clickedStateY = "btn btn-warning btn-block btn-lg"
  const [left1Color, setLColor1] = useState(firstStateG)
  const [left2Color, setLColor2] = useState(firstStateG)
  const [left3Color, setLColor3] = useState(firstStateG)
  const [left4Color, setLColor4] = useState(firstStateG)

  const q1 = "x = x * 2"
  const q2 = "x = x/x"
  const q3 = "x = y + 2"
  const q4 = "x = 50"

  const a1 = "20"
  const a2 = "1"
  const a3 = "error"
  const a4 = "50"

  const [right1Color, setRColor1] = useState(firstStateY)
  const [right2Color, setRColor2] = useState(firstStateY)
  const [right3Color, setRColor3] = useState(firstStateY)
  const [right4Color, setRColor4] = useState(firstStateY)

  const handleClick = (id: number, match: number) => {
    changeColor(id)
    submit(id, match)
  };

  const changeColor = (id: number) => {
    if (id > 10){
      if (id == 11){
        setRColor1(clickedStateY)
      } else if (id == 12){
        setRColor2(clickedStateY)
      } else if (id == 13){
        setRColor3(clickedStateY)
      } else {
        setRColor4(clickedStateY)
      }
    } else {
      if (id == 1){
        setLColor1(clickedStateG)
      } else if (id == 2){
        setLColor2(clickedStateG)
      } else if (id == 3){
        setLColor3(clickedStateG)
      } else {
        setLColor4(clickedStateG)
      }
    }
  }
  const changeColorB = (id: number) => {
    if (id > 10){
      if (id == 11){
        setRColor1(firstStateY)
      } else if (id == 12){
        setRColor2(firstStateY)
      } else if (id == 13){
        setRColor3(firstStateY)
      } else {
        setRColor4(firstStateY)
      }
    } else {
      if (id == 1){
        setLColor1(firstStateG)
      } else if (id == 2){
        setLColor2(firstStateG)
      } else if (id == 3){
        setLColor3(firstStateG)
      } else {
        setLColor4(firstStateG)
      }
    }
  }

  const [lives, setLives] = useState(3);
  const [LR, setLR] = useState([-1,-1])
  const [LRI, setLRI] = useState([-1,-1])
  const [disabled, setDisabled] = useState([false, false, false, false])
  const [win, setWin] = useState(0)

  const submit = async (id: number, match: number) => {
    if (id > 10) {
      LR[1] = match;
      LRI[1] = id
    } else {
      LR[0] = match;
      LRI[0] = id
    }
    if (LR[0] > 0 && LR[1] > 0){
      if (LR[0] == LR[1]){
        disabled[LR[0]] = true
        setDisabled(disabled)
        if(win+1 == 4){
          await router.push('/winpage');
        }
        setWin(win+1)
      } else {
        const newLives = lives - 1;
        setLives(newLives);
        console.log(newLives);
        changeColorB(LRI[0])
        changeColorB(LRI[1])
        if (newLives < 1){
          await router.push('/losepage');
        }
      }
      LR[0] = -1;
      LR[1] = -1;
    }
  }
  return (
    <Fragment>
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
    <Head>
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
      </Head>
      <Header lives={lives} />
      <br />
      <h2>Match Code with Output</h2>
      <main>
        <h3 className="left-0 top-0 text-center">
          if x = 10, what is x after the following code?
            <div className= "position-relative top-8 right-40">
              <div>
              <button className={left1Color} type="button" id="1" name="align" disabled = {disabled[4]} onClick={() => handleClick(1, 4)}>{q4}</button>
            </div><div>
              <button className={left2Color} type="button" id="2" name="align" disabled = {disabled[1]} onClick={() => handleClick(2, 1)}>{q1}</button>
            </div><div>
              <button className={left3Color} type="button" id="3" name="align" disabled = {disabled[2]} onClick={() => handleClick(3, 2)}>{q2}</button>
            </div><div>
              <button className={left4Color} type="button" id="4" name="align" disabled = {disabled[3]} onClick={() => handleClick(4, 3)}>{q3}</button>
            </div>
          </div> <div className='position-relative bottom-40 left-40'>
            <div>
              <button className={right1Color} type="button" id="11" name="align" disabled = {disabled[1]} onClick={() => handleClick(11, 1)}>{a1}</button>
            </div><div>
              <button className={right2Color} type="button" id="12" name="align" disabled = {disabled[4]} onClick={() => handleClick(12, 4)}>{a4}</button>
            </div><div>
              <button className={right3Color} type="button" id="13" name="align" disabled = {disabled[3]} onClick={() => handleClick(13, 3)}>{a3}</button>
            </div><div>
              <button className={right4Color} type="button" id="14" name="align" disabled = {disabled[2]} onClick={() => handleClick(14, 2)}>{a2}</button>
            </div>
            </div>
        </h3>
      </main>
    </div>
    </Fragment>
  )
}
