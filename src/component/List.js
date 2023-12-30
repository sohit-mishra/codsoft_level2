import React from 'react'


const List = () => {
    return (
        <>
            <div className="answer">
                <h2>Quiz Name</h2>

                <div className="subitems">
                    <p><span>Question 1:</span> What is national?Lorem200</p>
                    <p id='right'><span>Answer:</span> Lotus</p>
                </div>

                <div className="subitems">
                    <p><span>Question 1:</span> What is national?</p>
                    <p id='wrong'><span>Answer:</span> Lotus</p>
                </div>


            </div>
        </>
    )
}


export default List;