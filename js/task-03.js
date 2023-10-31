const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');

const createGalleryMarkup = images => {
  return images
    .map(({ url, alt }) => {
      return `<li class="gallery__item"><img class="gallery__image" src="${url}" alt="${alt}" width = "200px", heigth = "100px"></li>`;
    })
    .join('');
};

const galleryMarkup = createGalleryMarkup(images);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

galleryList.setAttribute(
  'style',
  'list-style:none; display: flex; flex-direction: column; padding-top: 30px;'
);