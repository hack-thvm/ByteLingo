import React from 'react'

export default function Start(props: { startQuiz: React.MouseEventHandler<HTMLButtonElement> | undefined })
{
    return(<div className='start-container'>
        <h1 className='start-container-title'>Match the Output</h1>
        <h2 className='start-container-subtitle'>If x is 10, match the code to its output</h2>
        <button className='start-container-button' onClick={props.startQuiz}>Start Quiz</button>
    </div>)
}