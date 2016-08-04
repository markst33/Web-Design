function changeImg(imgNumber) {
	var myImages = ["images/doubleportrait2.jpg", "images/hookedondublin.jpg", "images/ladymanor.jpg", "images/rawmaterials.jpg"]; 
	var imgShown = document.body.style.backgroundImage;
	var newImgNumber =Math.floor(Math.random()*myImages.length);
	document.body.style.backgroundImage = 'url('+myImages[newImgNumber]+')';
}
window.onload=changeImg;