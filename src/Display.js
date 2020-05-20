import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Display.module.css';
import './AvatarList';
import 'tachyons';
import AvatarList from './AvatarList';

const Display = () => {

    var numlist = [];
    var lstFn = ()=>{
        
        for(var i =0;i<17;i++){
            numlist.push(i);

        }
        
    }

    lstFn();

 /*  var names = [
      1,2,3,4,5
  ] */
  

  var Arrname = numlist.map((n,i)=>{
      return <AvatarList key={i} name = {numlist[i]}/>
  })

    
    return (<div>
                
                <h1 className="underline f6 tc">Download Avatars</h1>
                {Arrname}
            
                
                
            </div>)
}




export default Display;