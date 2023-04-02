import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './header'
import React, { useState, SyntheticEvent } from 'react'
import {useRouter} from "next/router";

export default function Swap() {
const [lives, setLives] = useState(3);
const router = useRouter();

  const [button1Text, setButton1Text] = useState("y = 9 + x");
  const [button2Text, setButton2Text] = useState("x = 3");
  const [button3Text, setButton3Text] = useState("print(y)");
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const swapButton1And2 = () => {
    const temp = button1Text;
    setButton1Text(button2Text);
    setButton2Text(temp);
  }

  const swapButton2And3 = () => {
    const temp = button2Text;
    setButton2Text(button3Text);
    setButton3Text(temp);
  }

  const swapButton1And3 = () => {
    const temp = button1Text;
    setButton1Text(button3Text);
    setButton3Text(temp);
  }

  const checkOrder = async(e?: SyntheticEvent) => {
    if (button2Text === "y = 9 + x" && button1Text === "x = 3" && button3Text === "print(y)") {
      alert("Correct order!");
    } else {
      alert("Incorrect order.");
      const newLives = lives - 1;
      if (lives == 1){
          await router.push('/losepage');
      }
      setLives(newLives);
      console.log(newLives);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Lesson 2</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
      </Head>
      <Header lives={lives} />
      <main className="bg-white">
        <div className="text-center mt-5">
          <h6>Variables are continers which store data inside of them.</h6>
        </div>
        <div className="d-grid gap-2">
          <button className={`btn btn-primary ${selectedButton === 1 ? "active" : ""}`} onClick={() => {setSelectedButton(1)}}>{button1Text}</button>
          <button className={`btn btn-primary ${selectedButton === 2 ? "active" : ""}`} onClick={() => {setSelectedButton(2)}}>{button2Text}</button>
          <button className={`btn btn-primary ${selectedButton === 3 ? "active" : ""}`} onClick={() => {setSelectedButton(3)}}>{button3Text}</button>
        </div>
        <div className="d-grid gap-2 text-center mt-5">
          <button className="btn btn-primary" onClick={() => {swapButton1And2()}}>Swap 1 and 2</button>
          <button className="btn btn-primary" onClick={() => {swapButton2And3()}}>Swap 2 and 3</button>
          <button className="btn btn-primary" onClick={() => {swapButton1And3()}}>Swap 1 and 3</button>
          <button className="btn btn-primary" onClick={() => {checkOrder()}}>Check Order</button>
        </div>
      </main>
    </div>
  )
}