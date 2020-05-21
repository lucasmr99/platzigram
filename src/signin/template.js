const yo = require('yo-yo');    
const landing = require('../landing/index');

const signinForm = yo`
    <div class="col s12 m7">
        <div class="row">
            <div class="signup-box">
                <h1 class="platzigram">Platzigram</h1>
                <form class="signup-form">
                    <div class="section">
                        <a class="btn btn-fb hide-on-small-only">Inicia sesion con facebook </a>
                        <a class="btn btn-fb hide-on-med-and-up"><i class="fab fa-facebook"></i>Inicia sesion </a>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                        <input type="text" name="usernamer" placeholder="Nombre de Usuario">
                        <input type="password" name="password" placeholder="Contraseña">
                        <button class="btn waves-effect waves-light btn-signup" type="submit">Inicia Sesion</button>
                    </div>
                </form>
            </div>
        </div>
    <div class="row">
        <div class="login-box">
            No Tienes una cuenta? <a href="/signup">Registrate</a>
        </div>
    </div>`

module.exports =  landing(signinForm);