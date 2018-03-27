var canvas = document.getElementById('viewport');
var context = canvas.getContext('2d');

var switchOffDate = moment('2018-05-21');
var today = moment();
var daysLeft = switchOffDate.diff(today, 'days');

var imageText;

if (daysLeft > 1) {
    imageText = daysLeft + ' days remaining';
} else if (daysLeft == 1) {
    imageText = 'One dday left';
} else {
    imageText = 'RIP docker cloud';
}

function makeImageWithText(imageText) {
    var txt = imageText.toUpperCase();

    base_image = new Image();
    base_image.src = 'img/moon-bckg.png';

    base_image.onload = function () {
        context.drawImage(base_image, 0, 0);

        context.font = '52px Impact';
        context.fillStyle = 'white';

        var canvasWidth = context.canvas.width;
        var canvasHeight = context.canvas.height;

        var textWidth = parseInt(context.measureText(txt).width, 10);
        var textHeight = parseInt(context.font, 10);

        console.log(canvasWidth, canvasHeight);
        console.log(textWidth, textHeight);

        var textStartX = (canvasWidth / 2) - (textWidth / 2);
        var textStartY = (canvasHeight / 2) - (textHeight / 2) + 50;

        context.fillText(txt, textStartX, textStartY);
    }
}

makeImageWithText(imageText);