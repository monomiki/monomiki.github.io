(() => {

  //OPアニメーション

  window.addEventListener('DOMContentLoaded', () => {

    const body = document.body;
    const opLogo = document.querySelector(".opLogo");
    const content = document.querySelector(".content");

    window.setTimeout(function(){
      opLogo.classList.add('none');
      body.classList.add('slideIn');
    },1000);

    window.setTimeout(function () {
      content.classList.add('appear');
    }, 1400);

  });

})();