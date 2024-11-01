import React from "react";
import './index.scss'


export default function Secao1() {
    return (
        <div className="Secao1">

          

            <div className="login-section">
                <h2>Login</h2>
                <form>

                    <div className="input-group">

                        <input type="text" placeholder="Username" />
                    </div>

                    <div className="input-group">

                        <input type="password" placeholder="Password" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>


            <div className="image-section">
                <img src="../images/imagem-moca.png" alt="Login" />
            </div>




        </div>
    );
}


