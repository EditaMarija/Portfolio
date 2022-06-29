function skillsView() {
    let html = `
        <div class="page">
                <div class="header">
                  <h1>My key skills</h1>  
                </div>
                
                <div class="menu">
                    <div class="box-1">
                       ${navigation()}
                    </div>
                </div>
            
                <div class="mainContent">          
               
                <div class="main-container">
            
                  <div class="post-wrapper">
            
                    <div>
                      <div class="post">
                        <img class="thumbnail2" src="/assets/logo.png">
                        
                      </div>
                    </div>
  
                  </div>
                </div>
           
                </div>
                    <div class="footer"> Marija Copyright @2022 </div>
                </div>
                </div>
        </div>
      `;
  
    model.app.view = html;
  
    show();
  }