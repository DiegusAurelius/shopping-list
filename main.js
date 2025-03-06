const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

const addNewItem = () => {
  const newItem = input.value.trim();
  if (!newItem) return;

  input.value = '';

  const li = document.createElement('li');
  const span = document.createElement('span');
  const btnDelete = document.createElement('button');

  span.textContent = newItem;
  btnDelete.textContent = 'Delete';

  li.appendChild(span);
  li.appendChild(btnDelete);
  ul.appendChild(li);

  btnDelete.addEventListener('click', () => ul.removeChild(li));

  input.focus();
};

button.addEventListener('click', addNewItem);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addNewItem();
  }
});
