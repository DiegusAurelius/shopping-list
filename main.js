const itemInput = document.querySelector('input');
const addButton = document.querySelector('button');
const list = document.querySelector('ul');

const addNewItem = () => {
  const newItem = itemInput.value.trim();
  if (!newItem) return;

  itemInput.value = '';

  const item = document.createElement('li');
  const text = document.createElement('span');
  const deleteButton = document.createElement('button');

  text.textContent = newItem;
  deleteButton.textContent = 'Delete';

  item.appendChild(text);
  item.appendChild(deleteButton);
  list.appendChild(item);

  deleteButton.addEventListener('click', () => item.remove());

  itemInput.focus();
};

addButton.addEventListener('click', addNewItem);

itemInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addNewItem();
  }
});
