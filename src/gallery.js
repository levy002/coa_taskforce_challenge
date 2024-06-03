const galleryContainer = document.getElementById("gallery-container");
const fullSizeAnimalImageContainer = document.querySelector('.full-size-image');

const animals = [
  {
    id: 1,
    name: "FOX",
    species: "FENNEC",
    origin: "India",
    image: "./src/assets/fox.jpeg",
  },
  {
    id: 2,
    name: "WHALE",
    species: "HUMPBACK",
    origin: "South Africa",
    image: "./src/assets/whale.jpeg",
  },
  {
    id: 3,
    name: "BABOON",
    species: "COMMON BROWN",
    origin: "South Africa",
    image: "./src/assets/baboon.jpeg",
  },
  {
    id: 4,
    name: "DEER",
    species: "SPOTTED",
    origin: "Amazon",
    image: "./src/assets/deer.jpeg",
  },
];

const animalContainerFragment = document.createDocumentFragment();

const displayGalleryAnimalInfo = (animalInfo) => {
  const animalInfoContainer = document.createElement("li");
  animalInfoContainer.classList = "image-info";

  const animalImgContainer = document.createElement("div");
  animalImgContainer.classList = " animal-image";

  const animalImage = document.createElement("img");
  animalImage.src = animalInfo.image;
  animalImage.alt = animalInfo.name;

  animalImgContainer.appendChild(animalImage);

  const animalName = document.createElement("p");
  animalName.className = "animal-name";
  animalName.textContent = animalInfo.name;

  const animalSpecies = document.createElement("p");
  animalSpecies.classList = "animal-species";
  animalSpecies.textContent = animalInfo.species;

  const animalLocation = document.createElement("p");
  animalLocation.classList = "animal-location";
  animalLocation.textContent = animalInfo.origin;

  const knowMoreButton = document.createElement("button");
  knowMoreButton.id = animalInfo.id;
  knowMoreButton.classList = "know-more-btn";

  const btnParagaraph = document.createElement("p");
  btnParagaraph.textContent = "Know more";

  const btnIcon = document.createElement("i");
  btnIcon.classList = "ri-arrow-right-line";

  knowMoreButton.append(btnParagaraph, btnIcon);

  const animalDetails = document.createElement("div");
  animalDetails.id = animalInfo.id;
  animalDetails.classList = "animal-details";

  animalDetails.append(
    animalSpecies,
    animalName,
    animalLocation,
    knowMoreButton
  );

  animalInfoContainer.append(animalImgContainer, animalDetails);

  animalContainerFragment.appendChild(animalInfoContainer);
};

animals.forEach((animal) => {
  displayGalleryAnimalInfo(animal);
});



function showAnimalInFullScreen(animal) {
    const fullSizeFragment = document.createDocumentFragment();

    const closeButton = document.createElement('i');
    closeButton.classList.add('ri-close-circle-fill', 'close-full-size-view');
    closeButton.id = 'close-image-view';

    const animalImage = document.createElement("img");
    animalImage.src = animal.image;
    animalImage.alt = animal.name;

    fullSizeFragment.append(closeButton, animalImage);
    
    fullSizeAnimalImageContainer.innerHTML = '';

    fullSizeAnimalImageContainer.appendChild(fullSizeFragment);
    fullSizeAnimalImageContainer.classList.add('full-size-image-view');
}

function hideFullScreen() {
    fullSizeAnimalImageContainer.classList.remove('full-size-image-view');
}

galleryContainer.addEventListener('click', (e) => {
    if (e.target.matches('.know-more-btn,.animal-details')) {
      const animalId = parseInt(e.target.id);
      const animal = animals.find(animal => animal.id === animalId);
      showAnimalInFullScreen(animal);
    } 
  });

  fullSizeAnimalImageContainer.addEventListener('click', (e) => {
    if (e.target.matches('.close-full-size-view')) {
      hideFullScreen();
    }
  });

  galleryContainer.appendChild(animalContainerFragment);
