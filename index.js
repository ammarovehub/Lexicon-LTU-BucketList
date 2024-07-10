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
listSection.innerHTML = wish3;