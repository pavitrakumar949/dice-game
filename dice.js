const imagesArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "default.jpg"];

function displayImage() 
{
    num = Math.floor(Math.random() * (imagesArray.length));
    document.canvas.src="images/"+imagesArray[num];
}