const NotesArea = document.querySelector('#notesArea');
const modal = document.querySelector('#modal-popup');
const modalContent = document.querySelector('#modal-content');




function NoteAreaIsEmpty() {
    if (NotesArea.childNodes.length === 0) {
        const messageText = document.createTextNode(`Nenhuma nota foi criada ainda!`);
        const messageTag = document.createElement('p');
        messageTag.id = "emptyMessage";
        messageTag.appendChild(messageText);
        NotesArea.appendChild(messageTag);
    } else if (NotesArea.firstChild.id === "emptyMessage") {
        NotesArea.removeChild(NotesArea.firstChild);
    }
}


NoteAreaIsEmpty();

function buttonBase (value, cssClass) {
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
    button.onclick = e => e.target.parentNode.remove();

    return button;
}


function createNote(note) {
    const noteArea = document.createElement('div');
    const noteTitle = document.createElement('h1');
    const noteParagraph = document.createElement('p');
    const noteText = document.createTextNode(note);
    const title = document.querySelector('#noteTitle').value;
    const titleText = document.createTextNode(title);
    const viewButton = createViewButton();
    const removeButton = createRemoveButton();


    noteArea.classList.add('note');
    noteTitle.appendChild(title);
    noteParagraph.appendChild(noteText);
    noteArea.appendChild(noteTitle);
    noteArea.appendChild(noteParagraph);
    noteArea.appendChild(viewButton);
    noteArea.appendChild(removeButton);
    NotesArea.appendChild(noteArea);
    
    
    const noteInput = document.querySelector('#note');
    noteInput.value = '';
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
    if(note !== '' && title !== '') {
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