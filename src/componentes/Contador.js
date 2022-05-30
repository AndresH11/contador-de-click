import React from "react";
import '../stylesheet/Contador.css';

const Contador = ({numClick}) =>{
  return(
    <div className="contador">
      {numClick}
    </div>
  );
};

export default Contador;