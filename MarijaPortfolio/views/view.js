function show() {
  const appDiv = document.getElementById('app');
  let html = '';
  html += `${model.app.view}`

  appDiv.innerHTML = html;
}

function changePage(side) {
    model.app.currentPage = side;
    updateView();
  }
  
function updateView() {
    if (model.app.currentPage == "home") homeView();
    if (model.app.currentPage == "projects") projectsView();
    if (model.app.currentPage == "skills") skillsView();
    if (model.app.currentPage == "contacts") contactsView();
  }

function navigation(){
  return /*html*/`
  <button class='menuBtn' onclick="changePage('home')" class="btn btn-one">Home</button></br>
  <button class='menuBtn' onclick="changePage('projects')" class="btn btn-one">Projects</button></br>
  <button class='menuBtn' onclick="changePage('skills')" class="btn btn-one">Key skills</button></br>
  <button class='menuBtn' onclick="changePage('contacts')" class="btn btn-one">Contact</button>`;
}
  
