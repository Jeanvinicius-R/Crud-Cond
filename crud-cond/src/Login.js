import React, {useState} from "react";
import './Login.css';

function Login ({onLogin}) {
    //Estados username e password que são usados no login

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {

    }

    return(
        <div>
            <form>
                <h2>Agenda de Contatos</h2>
                <p>Fala login para continuar</p>
                <input
                    type = "text"
                    placeholder = "Usuário (admin)"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}   
                />
                <input
                    type = "password"
                    placeholder="Senha (123)"
                    value= {password}
                    onChange={(e) => setPassword (e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )

}