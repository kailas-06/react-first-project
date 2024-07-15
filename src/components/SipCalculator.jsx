import React, { useState } from "react";

function SipCalculator() {
  // const [userInput, setUserInput] =
  //   useState[
  //     {
  //       initialInvestment: 10000,
  //       annualInvestment: 5000,
  //       expectedReturn: 10,
  //       duration: 10,
  //     }
  //   ];
  //   function handleChange(inputIdentifier,newValue){
  //     setUserInput(prevUserInput =>{
  //       return{
  //         ...prevUserInput,
  //       }
  //     })

  //   }
  return (
    <>
      <div className="user-input">
        <div className="input-group">
          <p>
            <label htmlFor="">Initial Investment</label>
            <input type="text" />
          </p>
          <p>
            <label htmlFor="">Anual Investment</label>
            <input type="text" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="">Interest Rate</label>
            <input type="text" />
          </p>
          <p>
            <label htmlFor="">Total Amonut</label>
            <input type="text" />
          </p>
        </div>
      </div>
    </>
  );
}

export default SipCalculator;
