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
            likes: 0,
            liked: false,
            createdAt: new Date()

        },
        {
            user: {
                username: 'lucas99',
                avatar: 'cerdo.webp'
            },
            url: 'office.jpg',
            likes: 1,
            liked: false,
            createdAt: new Date().setDate(new Date().getDate() - 10)

        },
    ];

    empty(main).appendChild(template(pictures));
})