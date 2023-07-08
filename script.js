// JavaScript logic for index.html

// Get DOM elements
const locationInput = document.getElementById('locationInput');
const jobRoleInput = document.getElementById('jobRoleInput');
const searchBtn = document.getElementById('searchBtn');
const cards = document.querySelectorAll('.card');

// Add event listener to search button
searchBtn.addEventListener('click', searchEmployees);
localStorage.removeItem('myList')

function searchEmployees() {
  
  
  const location = locationInput.value.toLowerCase();
  const jobRole = jobRoleInput.value.toLowerCase();

  cards.forEach(card => {
    const cardLocation = card.querySelector('.card-location').textContent.toLowerCase();
    const cardJobRole = card.querySelector('.card-job-role').textContent.toLowerCase();

    if (
      (location === '' || cardLocation.includes(location)) &&
      (jobRole === '' || cardJobRole.includes(jobRole))
    ) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Add event listener to select buttons
const selectButtons = document.querySelectorAll('.select-btn');
selectButtons.forEach(button => {
  button.addEventListener('click', handleSelect);
});

// Handle card selection
function handleSelect(event) {

  alert("Card is selected")

  const card = event.target.closest('.card');
  const cardId = card.dataset.id;
  const cardData = {
    id: cardId,
    name: card.querySelector('.card-name').textContent,
    jobRole: card.querySelector('.card-job-role').textContent,
    description: card.querySelector('.card-description').textContent,
  };

  addToMyList(cardData);
}

// Add selected card to My List
function addToMyList(cardData) {
  let myList = localStorage.getItem('myList');
  if (!myList) {
    myList = [];
  } else {
    myList = JSON.parse(myList);
  }

  myList.push(cardData);
  localStorage.setItem('myList', JSON.stringify(myList));
}
