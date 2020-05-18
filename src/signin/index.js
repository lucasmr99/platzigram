const page = require('page');
const empty = require('empty-element');
const template= require('./template')
const yo = require('yo-yo')


page('/signin', function(ctx, next){
    const main = document.getElementById('main-container');
    empty(main).appendChild(template);
})