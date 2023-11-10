"use strict"

 /* 
   // Получаем элемент видео
  var video = document.getElementById("myVideo");

  // Устанавливаем громкость (от 0 до 1)
  video.volume = 0.5; // Например, 50%
 
  // Воспроизводим видео после загрузки
  video.addEventListener('loadeddata', function() {
		video.play();
  });
  
  */ 

   // Используйте YouTube API для воспроизведения видео
	var player;
	function onYouTubeIframeAPIReady() {
		 player = new YT.Player('myVideo', {
			  events: {
					'onReady': onPlayerReady
			  }
		 });
	}

	function onPlayerReady(event) {
		 event.target.playVideo();
	}



