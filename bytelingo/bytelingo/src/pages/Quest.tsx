import React from 'react'

export default function Quest(props: { showAnswers: boolean | undefined; question: { correct_answer: any; selected_answer: any; options: any[]; question: any }; selectAnswer: (arg0: React.MouseEvent<HTMLButtonElement, MouseEvent>, arg1: any, arg2: any) => void; id: any })
{
    
    function styler(option: any,index: any){
        if (props.showAnswers === true)
        {
            if(props.question.correct_answer === option)
            {
                return({backgroundColor: "#94D7A2"})
            }else if(props.question.selected_answer === index)
            {
                return({backgroundColor: "#F8BCBC"})
            }else{
                return({backgroundColor: "#F5F7FB"})
            }
        }else {
            return(props.question.selected_answer === index ? {backgroundColor: "#D6DBF5"} : {backgroundColor: "#F5F7FB"})
        }
    }
    

    
    const options = props.question.options.map((option: any,index: React.Key | null | undefined) => <button
        key={index}
        dangerouslySetInnerHTML={{__html: option}}
        onClick={(event) => props.selectAnswer(event,props.id,index)}
        style={styler(option,index)}
        disabled={props.showAnswers}
        className='quiz-container-question-options-container-option'
        />)
        
    return(<div className='quiz-container-question' >
        <h1 className='quiz-container-question-title' dangerouslySetInnerHTML={{__html: props.question.question}}/>
        <div className='quiz-container-question-options-container'>{options}</div>
        <hr className='quiz-container-question-divider' />
    </div>)
}