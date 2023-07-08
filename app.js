// JavaScript logic for mylist.html

// Get DOM element
const myListContainer = document.getElementById('myList');

// Retrieve selected cards from localStorage
const myListData = JSON.parse(localStorage.getItem('myList'));

// Display selected cards
if (myListData && myListData.length > 0) {
  myListData.forEach(cardData => {
    const cardElement = createCardElement(cardData);
    myListContainer.appendChild(cardElement);
  });
} else {
  myListContainer.innerHTML = '<p>No cards added to My List.</p>';
}

// Create card element based on card data
function createCardElement(cardData) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardName = document.createElement('h3');
  cardName.classList.add('card-name');
  cardName.textContent = cardData.name;

  const cardJobRole = document.createElement('p');
  cardJobRole.classList.add('card-job-role');
  cardJobRole.textContent = cardData.jobRole;

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('card-description');
  cardDescription.textContent = cardData.description;

  card.appendChild(cardName);
  card.appendChild(cardJobRole);
  card.appendChild(cardDescription);

  return card;
}
