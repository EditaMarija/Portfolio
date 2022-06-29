function projectsView() {
    let html = `
        <div class="page">
                <div class="header">
                  <h1>My recent projects</h1>  
                </div>
                   
                <div class="menu">
                    <div class="box-1">
                       ${navigation()}
                    </div>
                </div>
            
                <div class="mainContent">          
                <section class="s1">
                <div class="main-container">
            
                  <div class="post-wrapper">
            
                    <div>
                      <div class="post">
                        <img class="thumbnail" src="./assets/todo.png">
                        <div class="post-preview">
                          <h3 class="post-title">To Do List</h3>
                          <p class="post-intro">A simple todo list app built in HTML, CSS and JavaScript</p>
                          <a href="https://editamarija.github.io/toDoListProject/index.html" class='readmore'>Read More</a>
                        </div>
                      </div>
                    </div>
            
                    <div>
                      <div class="post">
                        <img class="thumbnail" src="./assets/omnifood.png">
                        <div class="post-preview">
                          <h3 class="post-title">Omnifood</h3>
                          <p class="post-intro">Website project created following an Udemy course</p>
                          <a href="https://editamarija.github.io/Omnifood/" class='readmore'>Read More</a>
                        </div>
                      </div>
                    </div>
            
                    <div>
                      <div class="post">
                        <img class="thumbnail" src="./assets/rgb.png">
                        <div class="post-preview">
                          <h3 class="post-title">RGB Color Game</h3>
                          <p class="post-intro">Guessing game with values of RGB colors</p>
                          <a href="https://editamarija.github.io/RGB-Color-Game/" class='readmore'>Read More</a>
                        </div>
                      </div>
                    </div>
            
                  </div>
                </div>
              </section>  
                </div>
                    <div class="footer"> Marija Copyright @2022 </div>
                </div>
                </div>
        </div>
      `;
  
    model.app.view = html;
  
    show();
  }
