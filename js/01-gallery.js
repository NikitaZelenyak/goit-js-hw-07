import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const markupImg = getImagesMarkup(galleryItems);
gallery.innerHTML = markupImg;


gallery.addEventListener('click', lightbox);

function getImagesMarkup(items) {
    return items.map(({preview,original,description}) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `
    }).join('')
    
}

function lightbox(evt) {

    stopDefAction(evt);
    
    checedTargetImg(evt);

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)

    instance.show();

    gallery.addEventListener('keydown', (evt) => {
        if (evt.code === "Escape") {
            console.log(evt.code);
        instance.close()
    }
    });
    // подскажите не смогу вынести 22-27 строку в отдельную функция не определяет instance/ что можно сделать?
    // и проверте пожалуйста console.log(evt.code) почему так не понятно увеличивается колличество нажатий
}
 

function stopDefAction(evt) {
    evt.preventDefault();
}



function checedTargetImg(evt) {
    
    if (evt.target.nodeName !=='IMG') {
        return
    }
}




