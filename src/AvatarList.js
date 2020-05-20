import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Display.module.css';
import 'tachyons';


const AvatarList = ({name}) => {
    return (<div className="Avatarstyle ma4 bg-light-green dib pd3 grow shadow-4" >
                <img src={`https://joeschmoe.io/api/v1/${name}`} alt="Avatar"></img>
                
                <a class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black" href="https://joeschmoe.io/api/v1/1/1.svg"  download>
                    Download
                    </a>
                
            </div>)
}




export default AvatarList;