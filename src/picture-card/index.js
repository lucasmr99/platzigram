const yo = require('yo-yo');
const translate = require('../translate');

module.exports = function pictureCard(pic){
  let el;
  function render(picture){
    return yo`
    <div class="card  ${picture.liked ? 'liked' : ''}">
        <div class="card-image">
          <img class="activator" src="${picture.url}">
        </div>
        <div class="card-content">
          <a href="/user/${picture.user.username}" class="card-title display-mod">
            <img src="${picture.user.avatar}" class="avatar"/>
            <span class="username">${picture.user.username}</span>
          </a>
          <small class="right time" >${translate.date.format(picture.createdAt)}</small>
          <p>
            <a class="left" href="#" onclick="${like.bind(null , true)}"><i class="far fa-heart"></i></a>
            <a class="left" href="#" onclick="${like.bind(null, false)}"><i class="fas fa-heart"></i></a>
            <span class="likes left">${translate.messages('likes', {likes: picture.likes})} Me gusta</span>
          </p>
        </div>
    </div>`
  }

    function like(liked){
      pic.liked = liked;
      pic.likes += liked ? 1 : -1 ;
      let newEl = render(pic);
      yo.update(el, newEl);
      return false
    }

    el = render(pic);
    return el;
} 