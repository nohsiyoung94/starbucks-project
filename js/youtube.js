      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      function onYouTubeIframeAPIReady() {
        // <div id="player"></div>
        new YT.Player('player', {
          videoId: 'hGN_tE5Dssc',
          playerVars: {
            autoplay :true, // 자동 재생유무
            loop :true, // 반복재생 
            playlist :'hGN_tE5Dssc'
          },
          events:{
            onReay : function(event){
              event.target.mute() // 음소거
            }
          }
        });
      }