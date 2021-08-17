const NotesArea = document.querySelector('#notesArea');

function TheTableIsEmpty() {
    if (NotesArea.childNodes.length === 0) {
        const messageText = document.createTextNode(`You haven't added a note yet!`);
        const messageTag = document.createElement('p');
        messageTag.id = "emptyMessage"
        messageTag.appendChild(messageText);
        NotesArea.appendChild(messageTag);
    } else if (NotesArea.firstChild.id === "emptyMessage") {
        NotesArea.removeChilg(NotesArea.firstChild);
    }
}

TheTableIsEmpty();

document.querySelector('#submitNote').addEventListener('click', function submitNote() {
    const note = document.querySelector('#note').value;
    if(note !== '') {

    } else {
        window.alert('Write some note to submit!')
    }
});