import { useState } from "react";

export default function Main(){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState(0)
    const [listaContatos, setListaContatos] = useState([]);
    const [CPF, setCpf] = useState(0)

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

    const remover = (id) => {
         const novalista = listaContatos.filter(
            (contato, index)=>{
                if(index !== id){
                    return contato
                } else{
                    return null
                }
            }
         )
        alert(id);
    }

    console.table(listaContatos);

    return(
    <main>
        <form action="" onSubmit={registrar}>
        <label htmlFor="nome">Nome:</label>  <input type="text" name="" id="nome" onChange={(event) => setNome(event.target.value)}/>
          {nome}

      
         <label htmlFor="contato">N. Telefone:</label> <input type="text" telefone-contato=""  id="telefone" onChange={(event) => setTelefone(event.target.value)}/>
          {telefone}


          <label htmlFor="NumeroCPF">N. CPF:</label> <input type="text" Numero-CPF=""  id="CPF" onChange={(event) => setCpf(event.target.value)}/>
          {CPF}
         <button>Enviar</button>
         </form>
         {listaContatos.map((contato, index) => 
           <div key={index}>
              <p>{contato.nomeSalvo}</p>
              <p>{contato.telefoneSalvo}</p>
              <button onClick={() => remover(index)}>X</button>
           </div>
        )}
    </main>
    );

    
}