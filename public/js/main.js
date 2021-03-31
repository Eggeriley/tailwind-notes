window.onload = function () {
  const checkbox = document.querySelector('#toggle');
  const notes = document.querySelector('#notes');
  const html = document.querySelector('html');
  const toggleDarkMode = function () {


    if (checkbox.checked) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }
  checkbox.addEventListener('click', toggleDarkMode);

  const NotesDiv = document.getElementById('notes');
  const submitButton = document.querySelector('#create');
  var titleInput = document.getElementById('title');
  var bodyInput = document.getElementById('body');
  var classListToAdd = ['rounded-md','m-2','p-3','bg-gray-400','ring-red-300','transform','cursor-pointer','transfrom','ease-in-out','duration-100','border-4','border-gray-300','hover:scale-102','hover:border-yellow-500'];
  submitButton.addEventListener('click', createNote);
  
  function createNote() {
    if (titleInput.value !=="" && bodyInput.value !=="") {
    const newDiv = document.createElement('div');
    newDiv.classList.add(...classListToAdd);
    newDiv.style.height = 'fit-content'
    newDiv.innerHTML= `<div class="title text-2xl mb-2">${titleInput.value}</div><div>${bodyInput.value}</div>`
    NotesDiv.prepend(newDiv);
    titleInput.value = "";
    bodyInput.value = "";
    }
    else console.log("Please don't don't make an empty note")
}

}