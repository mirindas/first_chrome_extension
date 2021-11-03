const hidePage = (blockedSite) => {
  return `<div id="container">
  <p id="message">Well you should stick to studying right now, ${blockedSite} is not available right now.</p>
  <p id="p2">Cut the slack write some code <a href="https://www.udemy.com/">Udemy</a> <a href="https://www.freecodecamp.org/">FreeCodeCamp</a></p>        
</div>`;
};

const stylePage = () => {
  return `<style>
    #container {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    p {
        margin: 0;
        font-size:2.3em;
      }
    #p2 {
        text-align: center;
    }
    a {
    text-decoration: none;
    color:cyan;
}
      </style>`;
};

switch (window.location.hostname) {
  case "www.youtube.com":
    document.body.innerHTML = hidePage("YouTube");
    document.head.innerHTML = stylePage();
    break;
  case "www.tiktok.com":
    document.body.innerHTML = hidePage("TikTok");
    break;
  case "www.facebook.com":
    document.body.innerHTML = hidePage("TikTok");
    break;
  case "www.twitter.com":
    document.body.innerHTML = hidePage("TikTok");
    break;
  case "www.netflix.com":
    document.body.innerHTML = hidePage("TikTok");
    break;
  case "www.instagram.com":
    document.body.innerHTML = hidePage("TikTok");
    break;
  case "www.tiktok.com":
    document.body.innerHTML = hidePage("TikTok");
    break;
}
