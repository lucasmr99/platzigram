const page = require('page');
const empty = require('empty-element');
const template= require('./template')


page('/', function(ctx, next){
    const main = document.getElementById('main-container');
    const pictures =[
        {
            user: {
                username: 'lucas99',
                avatar: 'cerdo.webp'
            },
            url: 'office.jpg',
            likes: 4,
            liked: true

        },
        {
            user: {
                username: 'lucas99',
                avatar: 'cerdo.webp'
            },
            url: 'office.jpg',
            likes: 24,
            liked: true

        },
    ];

    empty(main).appendChild(template(pictures));
})