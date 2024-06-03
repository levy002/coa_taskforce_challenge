const galleryContainer = document.getElementById('gallery-container');

const imagesInfo = [
    {
        id: 1,
        name: 'FOX',
        species: 'FENNEC',
        origin: 'India',
        image: './src/assets/fox.jpeg'
    },
    {
        id: 2,
        name: 'WHALE',
        species: 'HUMPBACK',
        origin: 'South Africa',
        image: './src/assets/whale.jpeg'
    },
    {
        id: 3,
        name: 'BABOON',
        species: 'COMMON BROWN',
        origin: 'South Africa',
        image: './src/assets/baboon.jpeg'
    },
    {
        id: 4,
        name: 'DEER',
        species: 'SPOTTED',
        origin: 'Amazon',
        image: './src/assets/deer.jpeg'
    }
];

const imageContainerFragment = document.createDocumentFragment();

const displayGalleryImagesInfo = (imageInfo) => {
    const imageInfoContainer = document.createElement('li');
    imageInfoContainer.style.backgroundImage = `url(${imageInfo.image})`;

    const name = document.createElement('p');
    name.textContent = imageInfo.name;
    
    const species = document.createElement('p');
    species.textContent = imageInfo.species;

    const origin = document.createElement('p');
    origin.textContent = imageInfo.origin;

    const knowMoreButton = document.createElement('button');

    const btnParagaraph = document.createElement('p');
    btnParagaraph.textContent = 'Know more';

    const btnIcon = document.createElement('i');
    btnIcon.classList = 'ri-arrow-right-line';

    knowMoreButton.append(btnParagaraph, btnIcon);

    imageInfoContainer.append(species, name, origin, knowMoreButton);

    imageContainerFragment.appendChild(imageInfoContainer);
};

imagesInfo.forEach(imageInfo => {
    displayGalleryImagesInfo(imageInfo)
});

window.onload = function (){
    galleryContainer.appendChild(imageContainerFragment);
};

