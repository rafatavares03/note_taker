const NotesArea = document.querySelector('#notesArea');
const modal = document.querySelector('#modal-popup');
const modalContent = document.querySelector('#modal-content');

function TheTableIsEmpty() {
    if (NotesArea.childNodes.length === 0) {
        const messageText = document.createTextNode(`You haven't added a note yet!`);
        const messageTag = document.createElement('p');
        messageTag.id = "emptyMessage"
        messageTag.appendChild(messageText);
        NotesArea.appendChild(messageTag);
    } else if (NotesArea.firstChild.id === "emptyMessage") {
        NotesArea.removeChild(NotesArea.firstChild);
    }
}

TheTableIsEmpty();

function createViewButton(text) {
    const button = document.createElement('input');
    button.type = "button";
    button.value = "View Detail";
    button.onclick = () => {
        const textNote = document.createTextNode(text);
        modalContent.appendChild(textNote);
        modal.classList.add("isVisible");
    }
    return button;
}

document.querySelector('#submitNote').addEventListener('click', function submitNote() {
    const note = document.querySelector('#note').value;
    if(note !== '') {
        TheTableIsEmpty();
        const noteArea = document.createElement('div');
        const noteTitle = document.createElement('h1');
        const noteParagraph = document.createElement('p');
        const noteText = document.createTextNode(note);
        const titleText = document.createTextNode('Note');
        const viewButton = createViewButton(note);
        noteArea.class = 'note';
        noteTitle.appendChild(titleText);
        noteParagraph.appendChild(noteText);
        noteArea.appendChild(noteTitle);
        noteArea.appendChild(noteParagraph);
        noteArea.appendChild(viewButton);
        NotesArea.appendChild(noteArea);

        const noteInput = document.querySelector('#note');
        noteInput.value = '';
    } else {
        window.alert('Write some note to submit!')
    }
});

document.querySelector('#closePop-Up').addEventListener('click', () => {
    modalContent.removeChild(modalContent.firstChild);
    modal.classList.remove("isVisible");
});