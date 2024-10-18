function addNewElement() {
  const newDiv = document.createElement('div');
  const newDivText = document.createElement('p');
  const newDivBtns = document.createElement('div');

  const newDivEditBtn = document.createElement('button');
  const newDivEditImg = document.createElement('img');
  const newDivDeleteBtn = document.createElement('button');
  const newDivDeleteImg = document.createElement('img');
  
  newDiv.classList.add('newDiv');
  newDivBtns.classList.add('newDivBtns');
  newDivEditBtn.classList.add('newDivEditBtn');
  newDivDeleteBtn.classList.add('newDivDeleteBtn');
  newDiv.appendChild(newDivText);
  newDiv.appendChild(newDivBtns);
  
  newDivBtns.appendChild(newDivEditBtn);
  newDivEditBtn.appendChild(newDivEditImg);
  newDivBtns.appendChild(newDivDeleteBtn);
  newDivDeleteBtn.appendChild(newDivDeleteImg);


  newDivText.textContent = document.querySelector('textarea').value;
  document.querySelector('.notes').appendChild(newDiv);
  
  const onclickEditNote = document.createAttribute('onclick');
  onclickEditNote.value = 'startToEditNote(this)';
  newDivEditBtn.setAttributeNode(onclickEditNote);
  
  const editImg = document.createAttribute('src');
  editImg.value = './public/asets/edit-icon.png'
  newDivEditImg.setAttributeNode(editImg);
  // newDivEditBtn.textContent = '/';
  
  const onclickDeleteBtn = document.createAttribute('onclick');
  onclickDeleteBtn.value = 'removeNote(this)';
  newDivDeleteBtn.setAttributeNode(onclickDeleteBtn);

  const deleteImg = document.createAttribute('src');
  deleteImg.value = './public/asets/delete-icon.png'
  newDivDeleteImg.setAttributeNode(deleteImg);
  // newDivDeleteBtn.textContent = '⌂';
  //alt 127 = ⌂

  
  // newDivEditBtn.onclick = openNoteEditor();
  // newDivEditBtn.addEventListener
  document.querySelector('textarea').value = '';
  closeNoteEditor();
  
}

var ovelay = document.querySelector('#overlay');
var modal = document.getElementById('note_editor');
var noteText = "";
var isNoteEditorCreatingNote = true;
var textEditor = modal.querySelector('textarea');
var noteToEdit;

function openNoteEditor(){
  modal.style.visibility = 'visible';
  const onclickCreateNoteButton = document.createAttribute('onclick');
  if (isNoteEditorCreatingNote == true) {
    textEditor.value = ''
    modal.querySelector('h3').textContent = 'Create note';
    onclickCreateNoteButton.value = 'addNewElement()';
  }else{
    modal.querySelector('h3').textContent = 'Update note';
    onclickCreateNoteButton.value = 'editNote()';
    textEditor.value = noteToEdit.textContent;
    isNoteEditorCreatingNote = true
  }
  modal.querySelector('#create_note_button').setAttributeNode(onclickCreateNoteButton);
}

function closeNoteEditor(){
  modal.style.visibility = 'hidden';
  if (isNoteEditorCreatingNote == true) {
    isNoteEditorCreatingNote = true

  }else{
    isNoteEditorCreatingNote = false
  }
}

function removeNote(noteButton) {
  noteButton.parentNode.parentNode.remove();
}

function startToEditNote(noteButton) {
  isNoteEditorCreatingNote = false;
  noteToEdit = noteButton.parentNode.parentNode.querySelector('p');
  textEditor.value = noteToEdit.textContent;
  openNoteEditor();
}

function editNote() {
  noteToEdit.textContent = textEditor.value;
  isNoteEditorCreatingNote = true;
  closeNoteEditor();
}