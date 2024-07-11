// wish 1
const listSection = document.querySelector('.list');
const wish1 = document.createElement('p');
wish1.innerText = 'Travel to Cambodia';
listSection.appendChild(wish1);

// wish 2
const wish2 = document.createElement('p');
wish2.innerText = 'Skydiving';
listSection.lastElementChild.insertAdjacentElement('afterend', wish2);

// innerHTML
console.log(listSection.innerHTML);

// wish 3
const wish3 = '<p>Learn to play piano</p>';
// listSection.innerHTML = wish3;
listSection.insertAdjacentHTML('afterbegin', wish3);

// More wishes using a loop
const wishes = ['Play Dark Soul games', 'Learn esperanto', 'Read 20 books per year'];
wishes.forEach(wish => {
  const newWish = document.createElement('p');
  newWish.innerText = wish;
  listSection.appendChild(newWish);
});

// Logging the number of items into the list
console.log(listSection.children.length);

// Change the content of the header h2
const ownersName = document.querySelector('.owner');
ownersName.innerText = "Ammar's";

// Replace the first wish on the list
const firstWish = listSection.firstElementChild;
listSection.replaceChild(wish2, firstWish);

// Replace the middle wish on the list
const middleListMath = Math.floor(listSection.children.length / 2);
const middleWish = listSection.children[middleListMath];
const newMiddleWish = document.createElement('p');
newMiddleWish.innerText = 'Swim with the dolphins';
listSection.replaceChild(newMiddleWish, middleWish);

// Remove the last wish on the list
const lastWish = listSection.lastChild;
listSection.removeChild(lastWish);