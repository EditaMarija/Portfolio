function homeView() {
    let html = `
        <div class="page">
                <div class="header">
                  <h1>Welcome to my portfolio!</h1>  
                </div>
     
                <div class="menu">
                    <div class="box-1">
                       ${navigation()}
                    </div>
                </div>
            
                <div class="mainContent">          
                        <div class="myInfo">
                            <p>My name is Marija and I love learning web development</p>
                            <p>
                            Currently I am focused on Frontend Development and learning Javascript.</br>
                            </br>
                            When I am not coding then I am out in the nature,</br> 
                            playing badminton, table tennis or just at home watching Netflix
                            </p>
                            <p>Learning next: C#</p>
                            <p>Looking for growth opportunities to try new technologies </br> 
                            and grow my technical skill set in a team-based atmosphere</p>
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