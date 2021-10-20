const NotesArea = document.querySelector('#notesArea');
const modal = document.querySelector('#modal-popup');
const modalContent = document.querySelector('#modal-content');




function NoteAreaIsEmpty() {
  if (NotesArea.childNodes.length === 0) {
    const messageText = document.createTextNode(`Não há notas para serem exibidas, crie novas notas!`);
    const messageTag = document.createElement('p');
    messageTag.id = "emptyMessage";
    messageTag.appendChild(messageText);
    NotesArea.appendChild(messageTag);
  } else if (NotesArea.firstChild.id === "emptyMessage") {
    NotesArea.removeChild(NotesArea.firstChild);
  }
}


NoteAreaIsEmpty();

function buttonBase(value, cssClass) {
  const button = document.createElement('input');
  button.type = "button";
  button.value = value;
  button.classList.add(cssClass);

  return button;
}


function createViewButton() {
  const button = buttonBase("Ver Detalhes", "button");
  button.onclick = (e) => {
    const parent = e.target.parentNode;
    const title = parent.firstChild.innerText;
    const text = e.target.previousSibling.innerText;

    document.querySelector('#noteTitle').innerHTML = title;
    modalContent.innerHTML = text;
    modal.classList.add("isVisible");
  }

  return button;
}


function createRemoveButton() {
  const button = buttonBase('\u2716', "remove");
  button.onclick = (e) => {
    e.target.parentNode.remove();
    NoteAreaIsEmpty();
  }
  button.title = 'Excluir';
  return button;
}


function createEditButton() {
  const button = buttonBase("Editar", "edit");
  button.onclick = (e) => {
    const parent = e.target.parentNode;
    const title = parent.firstChild.innerText;
    const text = parent.children[1].innerText;

    document.querySelector('#titleNote').value = title;
    document.querySelector('#note').value = text;

    e.target.parentNode.remove();
    NoteAreaIsEmpty();
  }

  return button;
}


function createNote(note) {
  const noteArea = document.createElement('div');
  const noteTitle = document.createElement('h1');
  const noteParagraph = document.createElement('p');
  const noteText = document.createTextNode(note);
  const title = document.querySelector('#titleNote').value;
  const titleText = document.createTextNode(title);
  const viewButton = createViewButton();
  const editButton = createEditButton();
  const removeButton = createRemoveButton();


  noteArea.classList.add('note');
  noteTitle.appendChild(titleText);
  noteParagraph.appendChild(noteText);
  noteArea.appendChild(noteTitle);
  noteArea.appendChild(noteParagraph);
  noteArea.appendChild(viewButton);
  noteArea.appendChild(editButton);
  noteArea.appendChild(removeButton);
  NotesArea.appendChild(noteArea);


  document.querySelector('#note').value = '';
  document.querySelector('#titleNote').value = '';
}


function CleanPopUp() {
  const noteTitle = document.querySelector('#noteTitle');

  noteTitle.removeChild(noteTitle.firstChild);
  modalContent.removeChild(modalContent.firstChild);
  modal.classList.remove("isVisible");
}




document.querySelector('#submitNote').addEventListener('click', function submitNote() {
  const note = document.querySelector('#note').value;
  const title = document.querySelector('#noteTitle').value;
  if (note !== '' && title !== '') {
    NoteAreaIsEmpty();
    createNote(note);
  } else {
    window.alert('Erro! Não é possível criar notas sem título ou sem texto.');
  }
});

document.querySelector('#closePop-Up').addEventListener('click', () => {
  CleanPopUp();
});

document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.modal.isVisible')) {
    CleanPopUp();
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key === "Escape" && document.querySelector('.modal.isVisible')) {
    CleanPopUp();
  }
});