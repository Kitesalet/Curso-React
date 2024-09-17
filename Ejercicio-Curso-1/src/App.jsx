import GenericInput from "./GenericInput";
import GenericButton from "./GenericButton";
import { useState } from "react";

function App() {
  function onSubmit(e) {
    e.preventDefault();

    alert("Vos sos dios? ( Lease con la voz de Alejo )");
  }

  const inputConstructor = [
    { name: "Nombre", inputType: "text" },
    { name: "Apellido", inputType: "text" },
    { name: "Email", inputType: "email" },
    { name: "Phone Number", inputType: "number" },
    { name: "Password", inputType: "password" },
    { name: "Confirm Password", inputType: "password" },
  ];

  return (
    <div className="container">
      <form onSubmit={(e) => onSubmit(e)} className="container form">
        <h1>REGISTRO</h1>
        {inputConstructor.map((ic) => {
          return (
            <GenericInput
              name={ic.name}
              inputType={ic.inputType}
            ></GenericInput>
          );
        })}
        <GenericButton text={"SUBMIT"}></GenericButton>
      </form>
    </div>
  );
}

export default App;
