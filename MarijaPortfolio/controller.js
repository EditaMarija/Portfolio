function submitInfo() {
    let object ={};
    let formInput = model.inputs.contactViewInputs;

    if (formInput.nameTxt != "" && formInput.subjectTxt != "" &&
    formInput.emailTxt != "" && formInput.messageTxt != "") {  
    object.nameTxt = formInput.nameTxt
    object.subjectTxt = formInput.subjectTxt
    object.emailTxt = formInput.emailTxt
    object.messageTxt = formInput.messageTxt

    model.data.submittedForm.push(object)
    alert("Form is submitted!");
}
    show();
    formInput.nameTxt = "";
    formInput.subjectTxt = "";
    formInput.emailTxt = "";
    formInput.messageTxt ="";
}