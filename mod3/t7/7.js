// Open t7 folder in your IDE/editor. Make a hover effect with JavaScript. (2p)

// when user mouses over <p id="trigger"> change the picture of <img id="target"> form picA.jpg to picB.jpg

// when user mouses off, change the picture back to original

const img = document.querySelector('#target')

function change_img(evt) {
    if (evt.type == "mouseenter") {
        img.src = 'img/picB.jpg';
    }
    else if (evt.type == "mouseleave") {
        img.src = 'img/picA.jpg';
    }
}

const target = document.querySelector('#trigger');

target.addEventListener('mouseenter', change_img)
target.addEventListener('mouseleave', change_img)