import { useState } from "react";

export default function Main(){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState(0)
    const [listaContatos, setListaContatos] = useState([]);
    
    const registrar = () =>{
        event.preventDefault();
       alert("olá")
       setListaContatos([...listaContatos,
    {
        nomeSalvo: nome,
        telefoneSalvo: telefone,
    }
    
    ]);
    };

    return(
    <main>
        <form action="" onSubmit={registrar}>
        <label htmlFor="nome">Nome:</label>  <input type="text" name="" id="nome" onChange={(event) => setNome(event.target.value)}/>
          {nome}

      
         <label htmlFor="NumeroTelefone">N. Telefone:</label> <input type="text" telefone-contato=""  id="telefone" onChange={(event) => setTelefone(event.target.value)}/>
          {telefone}
         <button>Enviar</button>
         </form>
    </main>
    );

    
}