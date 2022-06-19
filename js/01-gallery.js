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
    
    checkedTargetImg(evt);


const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`, {
    onShow: (instance) => { window.addEventListener('keydown', onCloseEsc) },
    onClose: (instance) => { window.removeEventListener('keydown', onCloseEsc) }
});


 
instance.show()


   function onCloseEsc(evt) {
       if (evt.code === "Escape") {
            console.log(evt.code);
        instance.close()
 
    }
}
   
}


function stopDefAction(evt) {
    evt.preventDefault();
}



function checkedTargetImg(evt) {
    
    if (evt.target.nodeName !=='IMG') {
        return
    }
}

