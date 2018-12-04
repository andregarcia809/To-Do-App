const todoInputEl = document.querySelector('.todo__input');
const todoListEl = document.querySelector('.todo__list');
const todoItemsEl = document.querySelectorAll('.todo__item');

function addListItem() {
  todoInputEl.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
      let newListItem = createListItem(todoInputEl.value);
      todoListEl.insertBefore(newListItem, todoListEl.childNodes[0]) 
      todoInputEl.value = '';
    }
  })
}

addListItem();

// Does not work! research event bubbling and propagation
// function toggleDone() {
//   for(let elem of todoItemsEl) {
//     elem.addEventListener('click', function() {
//       elem.classList.toggle('done')
//     })
//   }
// }


// toggles class .done on each li
function toggleDone() {
  todoListEl.addEventListener('click', function(event) {
    if(event.target.classList.contains('todo__item')) {
      event.target.classList.toggle('done')
    }
  })
}
// Creates a new li tag
function createListItem(text) {
  const newListElement = document.createElement('li');

  newListElement.textContent = text;
  newListElement.setAttribute('class', 'todo__item')
  return newListElement;
}


toggleDone();
createListItem();