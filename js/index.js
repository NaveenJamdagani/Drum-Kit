window.addEventListener("keydown",function(e)
{
	var audio = document.querySelector(`audio[data-key="${e.which}"]`);
	if(!audio)return;
	audio.currentTime = 0;
	audio.play();
	var key = document.querySelector(`.alphabet[data-key="${e.which}"]`);
	key.classList.add("playing");
	setTimeout(window.addEventListener("keyup",function(e)
	{
		var audio = document.querySelector(`audio[data-key="${e.which}"]`);
		if(!audio)return;
		audio.currentTime = 0;
		audio.pause();
		var key = document.querySelector(`.alphabet[data-key="${e.which}"]`);
		key.classList.remove("playing");
	}),3000);
});

