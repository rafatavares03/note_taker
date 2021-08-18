const NotesArea = document.querySelector('#notesArea');

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
        const modal = document.querySelector('#modal-popup');
        const note = document.querySelector('#modal-content');
        const textNote = document.createTextNode(text);
        note.appendChild(textNote);
        modal.style.visibility = "visible";
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

    } else {
        window.alert('Write some note to submit!')
    }
});