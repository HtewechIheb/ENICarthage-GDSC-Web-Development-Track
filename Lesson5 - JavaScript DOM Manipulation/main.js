/***************** Querying The DOM  *****************/

const offer = document.querySelector('.offers > .offer:first-child');
console.dir(offer);

// console.log(offer.innerHTML);
// offer.innerHTML = '<h1>Hello From JavaScript!</h1>';

// console.log(offer.textContent);
// offer.textContent = 'JavaScript is so versatile!';

// console.log(offer.className);
// offer.className = "offer special large";

// console.log(offer.classList);
// offer.classList.add('large');
// offer.classList.remove('large');
// offer.classList.toggle('large');
// offer.classList.toggle('special');

// console.log(offer.style.padding);
// console.log(offer.style.backgroundColor);
// offer.style.padding = '50px';
// offer.style.backgroundColor = 'red';

const searchInput = document.querySelector('.search > input[type="text"]');
console.dir(searchInput);

// console.log(searchInput.placeholder);
// searchInput.placeholder = "What Offer Are You Looking For ?";

// console.log(searchInput.value);
// searchInput.value = "Software Engineer";

// console.log(searchInput.type);
// searchInput.type = "password";


const offerImage = offer.querySelector('.offer-image > img');
console.dir(offerImage);

// console.log(offerImage.src);
// offerImage.src = "https://ichef.bbci.co.uk/news/976/cpsprodpb/67CF/production/_108857562_mediaitem108857561.jpg";

// console.log(offerImage.alt);
// offerImage.alt = "Bird Image";

/***************** Traversing The DOM  *****************/

const parentElement = offer.parentElement;
console.log(parentElement);
console.dir(parentElement);

const children = offer.children;
console.log(children);
console.dir(children);

const nextSibling = offer.nextElementSibling;
console.log(nextSibling);
console.dir(nextSibling);

const previousSibling = offer.previousElementSibling;
console.log(previousSibling);
console.dir(previousSibling);

/***************** Adding Elements To The DOM  *****************/

// const newOffer = document.createElement('div');

// const newOfferImage = document.createElement('div');
// const image = document.createElement('img');

// const newOfferDetails = document.createElement('div');
// const title = document.createElement('h2');
// const date = document.createElement('small');
// const button = document.createElement('button');

// newOffer.setAttribute('class', 'offer');

// newOfferImage.setAttribute('class', 'offer-image');
// image.setAttribute('src', './developer.png');
// image.setAttribute('alt', 'Developer Logo');

// newOfferDetails.setAttribute('class', 'offer-details');

// const titleText = document.createTextNode('Fullstack Developer');
// const dateText = document.createTextNode('Posted on 18/01/2022');
// const buttonText = document.createTextNode('Apply');

// title.appendChild(titleText);
// date.appendChild(dateText);
// button.appendChild(buttonText);

// newOfferDetails.appendChild(title);
// newOfferDetails.appendChild(date);
// newOfferDetails.appendChild(button);

// newOfferImage.appendChild(image);

// newOffer.appendChild(newOfferImage);
// newOffer.appendChild(newOfferDetails);

const offers = document.querySelector('.offers');

// offers.appendChild(newOffer);

/***************** Removing Elements From The DOM  *****************/

const offerToRemove = document.querySelector('.offers > .offer:first-child');
// const parent = offerToRemove.parentElement;
// parent.removeChild(offerToRemove);