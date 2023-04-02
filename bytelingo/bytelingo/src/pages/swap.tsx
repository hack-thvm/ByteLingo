import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './header'
import React, { useState, SyntheticEvent } from 'react'
import {useRouter} from "next/router";
import layoutStyles from '../styles/Layout.module.css';
import buttonStyles from '../styles/Button.module.css';


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
    //   alert("Correct order!");
      await router.push('/winpage');
    } else {
    //   alert("Incorrect order.");
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
          <h1> </h1>
          <br />
        </div>

        <div className={layoutStyles.container2}>
        <div className="text-center">
          <h1>Next lesson: Variables</h1>
        </div>
            <h6>Variables are containers which store data inside of them. Python has no specific command to create a variable; instead, it is created when a value is assigned to it. The following code in the buttons will be executed in sequential order. Order the code so that the sum of x and y is printed out.</h6>
        </div>

        <div className="d-grid gap-2 text-center mt-5">
          <button className={`btn btn-outline-dark disabled ${selectedButton === 1 ? "active" : ""}`}>{button1Text}</button>
          <button className={`btn btn-outline-dark disabled ${selectedButton === 2 ? "active" : ""}`}>{button2Text}</button>
          <button className={`btn btn-outline-dark disabled ${selectedButton === 3 ? "active" : ""}`}>{button3Text}</button>
        </div>
        <div className="d-grid gap-2 text-center mt-5">
          <button className="btn btn-success " onClick={() => {swapButton1And2()}}>Swap 1 and 2</button>
          <button className="btn btn-success" onClick={() => {swapButton2And3()}}>Swap 2 and 3</button>
          <button className="btn btn-success" onClick={() => {swapButton1And3()}}>Swap 1 and 3</button>
          <button className="btn btn-warning" onClick={() => {checkOrder()}}>Check Order</button>
        </div>
      </main>
    </div>
  )
}