import React, { useState } from "react";
import './caculator.css';

function Calculator(){
    const [inputData,setInputData]=useState('0')
    const [inputData2,setInputData2]=useState('')
    const [num,setNum]=useState('')
    const[operation,setOperation]=useState('')
 function handleOperation(op){ 
   if(op ==="C"){
       setInputData('')
       setNum('')
   }else if(op ==="="){
    let result
     if(operation==="+"){
        console.log("abc",inputData2+inputData)
       result=Number(inputData2)+Number(inputData)
     }
     if(operation==="."){
      console.log("abc",inputData2.inputData)
     result=Number(inputData2).Number(inputData)
   }
     else if(operation==="-"){
       result=Number(inputData2)-Number(inputData)
     }
       else if(operation==="*"){
        result=Number(inputData2)*Number(inputData)
      }
      else if(operation==="/"){
        result=Number(inputData2)/Number(inputData)
      }
      else if(operation==="%"){
        result = (Number(inputData2)/Number(inputData))*100
        result = result.toFixed(2)
      }
      setInputData(result)
      console.log(result)
      console.log(op)
   }
   else if(op==="1" || op==="2"|| op==="3" || op==="4"|| op==="5"|| op==="6"|| op==="7"|| op==="8"|| op==="9"|| op==="0" || op === "."){
    setNum(num+op)
    setInputData(num+op)
   }else if(op==="+"){
    setOperation("+")
    setInputData2(inputData)
    setInputData('')
    setNum('')
   }else if(op==="-"){
    setOperation("-")
    setInputData2(inputData)
    setInputData('')
    setNum('')
 }else if(op==="*"){
    setOperation("*")
    setInputData2(inputData)
    setInputData('')
    setNum('')

   }else if(op==="/"){
    setOperation("/")
    setInputData2(inputData)
    setInputData('')
    setNum('')

   }else if(op==="%"){
    setOperation("%")
    setInputData2(inputData)
    setInputData('')
    setNum('') 
  } 
};  

return (
        <div className="body">
        <h1 style={{color:'aqua', position: "relative"}}>Welcome to Calculate me!</h1>
    <div className="container flex flex-col mx-auto m-w-20"></div>
     
    <div>
    <div className="row">
    <input className="input" value={inputData} />
    </div>
    <div className="row"> 
        <button value="ebtn" id="btn" className="button" onClick={()=>handleOperation("C")}>C</button>   
        <button id="btn" className="button" onClick={()=>handleOperation(".")}>.</button>
        <button value="ebtn" id="btn" class="button" onClick={()=>handleOperation("%")}>%</button>
        <button value="ebtn" id="btn" className="button" onClick={()=>handleOperation("+")}>+</button>

      </div>  
    <div className="row">
        <button className="button" onClick={()=>handleOperation("7")}>7</button>
        <button className="button" onClick={()=>handleOperation("8")}>8</button>
        <button className="button" onClick={()=>handleOperation("9")}>9</button>
        <button  id="btn" className="button" onClick={()=>handleOperation("-")}>-</button>
    </div>
     <div className="row">
        <button className="button" onClick={()=>handleOperation("4")}>4</button>
        <button className="button" onClick={()=>handleOperation("5")}>5</button>
        <button className="button" onClick={()=>handleOperation("6")}>6</button>
        <button value="ebtn" id="btn" className="button" onClick={()=>handleOperation("*")}>*</button>
    </div>
     <div className="row">
        <button className="button" onClick={()=>handleOperation("1")}>1</button>
        <button className="button" onClick={()=>handleOperation("2")}>2</button>
        <button className="button" onClick={()=>handleOperation("3")}>3</button>
        <button value="ebtn" id="btn" className="button" onClick={()=>handleOperation("/")}>/</button>

    </div> 
      <div className="row">
      <button className="button" onClick={()=>handleOperation("00")}>00</button>
        <button className="button" onClick={()=>handleOperation("0")}>0</button>
        <button  id="btn" className="equalButton" onClick={()=>handleOperation("=")}>=</button>
    </div>
    </div>
    </div> 

  )
};
 export default Calculator