const yo = require('yo-yo');
const translate = require('../translate');

let el = yo`
    <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col s12 l3 center-align"><a class="dropdown-trigger btn" href="#" data-target="dropdown1">${translate.messages('language')}
            <ul class="dropdown-content" id="dropdown1">
              <li><a href="#!">${translate.messages('spanish')}</a></li>
              <li><a href="#!">Ingles</a>${translate.messages('english')}</li>
            </ul></a></div>
        <div class="col s12 l3 push-l6 center-align">© 2016 Platzigram</div>
      </div>
    </div>
    </footer>
`
document.body.appendChild(el)
