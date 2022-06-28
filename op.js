(() => {
  window.addEventListener('DOMContentLoaded', () => {

    //高さ設定
    
    function setHeight(){
      let height = window.innerHeight;
      document.documentElement.style.setProperty('--vh', `${height}px`);
    }

    setHeight();

    window.addEventListener('resize',setHeight);


    //OPアニメーション

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