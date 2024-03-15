import { useState } from "react";

export default function Main(){
    const [nome, setNome] = useState("");
    const [Number, setNumber] = useState(0)
    return(
    <main>
        <form>
          <input type="text" name="" id="" onChange={(event) => setNome(event.target.value)}/>
          {nome}

      
          <input type="text" name=""  id="" onChange={(event) => setNumber(event.target.value)}/>
          {Number}
         </form>
    </main>
    );

    
}