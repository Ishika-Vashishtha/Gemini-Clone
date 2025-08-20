import React, { useState } from "react";
import './Main.css';
import { assets } from "../../assets/assets";
import { sendPrompt } from "../../config/Gemini";
import { Voice } from "../../config/Voice";

const Main = () => {

    const handleKeyDown = (e) => {
        if(e.key === "Enter"){
            e.preventDefault();
            sendPrompt();
            hideTop();
        }
    }

    const hideTop = () => {
        document.querySelector('.top-content').style.display = 'none';
    };

    return (

        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="top-content">
                <div className="greet">
                    <p><span>Hello, Ishika.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Briefly summarise this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                </div>

                <div id="output" className="output">
                Response will appear here...
                </div>
                
                <div className="main-bottom">
                    <div className="search-box">
                        <textarea
                        id="prompt"
                         type="text" 
                         placeholder="Enter a prompt herr"
                         onKeyDown={handleKeyDown}
                         ></textarea>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img id="micBtn" onClick={Voice} src={assets.mic_icon} alt="" />
                            <img 
                              src={assets.send_icon} 
                              alt="" 
                              onClick={()=>{
                                sendPrompt();
                                hideTop();
                              }}
                            />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display in accurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Main