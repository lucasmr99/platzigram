const yo = require('yo-yo');    
const landing = require('../landing/index');
const translte = require('../translate');

const signuForm = yo`
    <div class="col s12 m7">
        <div class="row">
            <div class="signup-box">
                <h1 class="platzigram">Platzigram</h1>
                <form class="signup-form">
                    <h2>${translte.messages('signup.subheading')}</h2>
                    <div class="section">
                        <a class="btn btn-fb hide-on-small-only">${translte.messages('signup.facebook')}</a>
                        <a class="btn btn-fb hide-on-med-and-up"><i class="fab fa-facebook"></i>${translte.messages('signup.text')}</a>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                        <input type="email" name="email" placeholder="${translte.messages('email')}">
                        <input type="text" name="name" placeholder="${translte.messages('fullname')}">
                        <input type="text" name="usernamer" placeholder="${translte.messages('username')}">
                        <input type="password" name="password" placeholder="${translte.messages('password')}">
                        <button class="btn waves-effect waves-light btn-signup" type="submit">${translte.messages('signup.call-to-action')}</button>
                    </div>
                </form>
            </div>
        </div>
    <div class="row">
        <div class="login-box">
            ${translte.messages('signup.have-account')} <a href="/signin">${translte.messages('signin')}</a>
        </div>
    </div>`;

module.exports =  landing(signuForm);






