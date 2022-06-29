function contactsView() {
    let html = `
        <div class="page">
                <div class="header">
                  <h1>Welcome to my contact page</h1>  
                </div>
    
                <div class="menu">
                    <div class="box-1">
                    ${navigation()}
                    </div>
                </div>
            
                <div class="mainContent">          
                        <div>
                            <section class="s2">
                              <div class="main-container">
                               <a href=""></a>
                                 
                                  <form class="contact-form">
                                  ${getForm()}
                                  </form>
                              </div>
                            </section>          
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

  function getForm(){
    let form = `
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf5k307qZSs87NrJserlTMDyJHj4H90wSVQTT0uleFtZ3e7Jw/viewform?embedded=true" 
    width="640" 
    height="712" 
    frameborder="0" 
    marginheight="0" 
    marginwidth="0"
    >Loading…</iframe>
    `;
    return form;
  }

  /* 
  
                                  <form class="contact-form">
                                <a name="contact"></a>
                    
                                  <label>Name</label>
                                  <input class="input-field" type="text" name="name" onchange="model.inputs.contactViewInputs.nameTxt = this.value" placeholder="Your name">
                          
                                  <label>Subject</label>
                                  <input class="input-field" type="text" name="subject" onchange="model.inputs.contactViewInputs.subjectTxt = this.value" placeholder="Subject">
                          
                                  <label>Email</label>
                                  <input class="input-field" type="text" name="email" onchange="model.inputs.contactViewInputs.emailTxt = this.value" placeholder="Your email">
                          
                                  <label>Message</label>
                                  <textarea class="input-field" name="message" onchange="model.inputs.contactViewInputs.messageTxt = this.value" placeholder="Your message"></textarea>
                          
                                  <input class="submit-btn" onclick="submitInfo()" value="Send">
                                </form>
  */