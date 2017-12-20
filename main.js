(function () {

  var bv = new Bideo();
  bv.init({

    videoEl: document.querySelector('#background_video'),

    container: document.querySelector('body'),

    resize: true,

    autoplay: true,

    isMobile: window.matchMedia('(max-width: 768px)').matches,

    playButton: document.querySelector('#play'),
    pauseButton: document.querySelector('#pause'),

    src: [
      {
        src: 'http://wev2.com/index.php?q=http://porn720.com/video/1535/720p.mp4',
        type: 'video/mp4'
      },
    ],

    onLoad: function () {
      document.querySelector('#main_content').style.visibility = 'hidden';
    }
  });
}());
