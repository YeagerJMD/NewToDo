document.getSelection().removeAllRanges();

const form = document.getElementById('new-item-form');
const itemInput = document.getElementById('item');
const items = document.getElementById('items');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newItem = itemInput.value;
  if (newItem !== '') {
    const li = document.createElement('li');
    li.textContent = newItem;
    items.appendChild(li);
    itemInput.value = '';
  }
})

