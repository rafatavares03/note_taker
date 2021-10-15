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


function createViewButton() {
    const button = document.createElement('input');
    button.type = "button";
    button.value = "Ver Detalhes";
    button.classList.add("button");
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


function createNote(note) {
    const noteArea = document.createElement('div');
    const noteTitle = document.createElement('h1');
    const noteParagraph = document.createElement('p');
    const noteText = document.createTextNode(note);
    const title = 'Nota ' + (NotesArea.childNodes.length + 1);
    const titleText = document.createTextNode(title);
    const viewButton = createViewButton();


    noteArea.classList.add('note');
    noteTitle.appendChild(titleText);
    noteParagraph.appendChild(noteText);
    noteArea.appendChild(noteTitle);
    noteArea.appendChild(noteParagraph);
    noteArea.appendChild(viewButton);
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
    if(note !== '') {
        NoteAreaIsEmpty();
        createNote(note);
    } else {
        window.alert('Erro! Não é possível criar notas vazias.');
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