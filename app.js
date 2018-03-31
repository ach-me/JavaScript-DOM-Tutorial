
// Si el archivo js se carga antes de cargar el DOM, se agrega un evento al documento que espera que se cargue el DOM antes de cargar el archivo js

document.addEventListener('DOMContentLoaded', () => {

  // Delete books
  const list = document.querySelector('#book-list ul');

  function deleteBooks(e) {
    if (e.target.className === 'delete') {
      const li = e.target.parentElement;
      list.removeChild(li);
    }
  }

  list.addEventListener('click', deleteBooks);


  // Add books
  const addForm = document.forms['add-book'];

  function addBooks(e) {
    e.preventDefault();
    const val = addForm.querySelector('input[type="text"').value;

    // Crear elementos
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // Agregar contenido

    // bookName.classList.add('name');
    // bookName.classList.remove('name');
    bookName.textContent = val;
    deleteBtn.textContent = 'delete';

    // Agregar las clases correspondientes
    bookName.className = 'name';
    deleteBtn.className = 'delete';

    // Insertar elementos en el documento
    list.appendChild(li);
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
  }

  addForm.addEventListener('submit', addBooks);


  // Hide books
  const hideBox = document.querySelector('#hide');

  function hideBooks() {
    if (hideBox.checked) {
      list.style.display = 'none';
    } else {
      list.style.display = 'initial';
    }
  }

  hideBox.addEventListener('change', hideBooks);


  // Filter books
  const searchBar = document.forms['search-books'].querySelector('input');

  function filterBooks() {
    const term = this.value.toLowerCase();
    const books = list.querySelectorAll('li');

    books.forEach((book) => {
      const title = book.firstElementChild.textContent.toLowerCase();

      if (title.indexOf(term) !== -1) {
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
      }
    });
  }

  searchBar.addEventListener('keyup', filterBooks);
});
