const page = require('page');

const main = document.getElementById('main-container');

page('/',function(ctx, next){
  main.innerHTML = 'Home  <a href="/signup">Signup</a>'
})
