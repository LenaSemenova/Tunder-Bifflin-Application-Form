//Constants
//Groups of constants
const subFields = document.querySelectorAll(".beforeSubmission");
const fieldSets = document.querySelectorAll("fieldset");
const cleanInputs = document.querySelectorAll(".cleanInputs");
//Single constants
const applicantForm = document.querySelector("#new-client");
const loginFieldSet = document.querySelector("#loginFieldset");
const emailFieldset = document.querySelector("#emailFieldset");
const passwordOne = document.querySelector("#passwordOne");
const passOneFieldset = document.querySelector("#passOneFieldset");
const passwordTwo = document.querySelector("#passwordTwo");
const passTwoFieldset = document.querySelector("#passTwoFieldset");
const language = document.querySelector("#language");
const langFieldset = document.querySelector("#langFieldset");
const logSub = document.querySelector("#loginSubmitted");
const emailSub = document.querySelector("#emailSubmitted");
const pOneSub = document.querySelector("#pOneSub");
const pTwoSub = document.querySelector("#pTwoSub");
const langSubmitted = document.querySelector("#langSubmitted");
const checkboxQuestion = document.querySelector("#checkboxQuestion");
const checkboxStatement = document.querySelector("#checkboxStatement");
const signup = document.querySelector("#signup");
const confirm = document.querySelector("#confirm");
const thankyou = document.querySelector("#thankyou");
const eyeTwo = document.querySelector("#closedEyeTwo");
const eyeOne = document.querySelector("#closedEyeOne");
//For i18n
const titleTwo = document.querySelector(".titleTwo");
const spanLogin = document.querySelector("#spnlgn");
const spanEmail = document.querySelector("#spanEmail");
const firstPassword = document.querySelector("#firstPassword");
const secondPassword = document.querySelector("#secondPassword");
const spanLang = document.querySelector("#spanLang");
const langOptOne = language.getElementsByTagName("option")[0];
const langOptTwo = language.getElementsByTagName("option")[1];
const langOptThree = language.getElementsByTagName("option")[2];
const langOptFour = language.getElementsByTagName("option")[3];
const inputPlaceholderOne = document.getElementsByName("login")[0];
const inputPlaceholderTwo = document.getElementsByName("email")[0];
const inputPlaceholderThree = document.getElementsByName("passwordOne")[0];
const inputPlaceholderFour = document.getElementsByName("passwordTwo")[0];
//Functions
function serializeForm(formNode) {
  const data = new FormData(formNode);
  const dataArr = Array.from(data);
  return dataArr;
}
function checkValidityOfEachField() {
  const clientsData = serializeForm(applicantForm);
  const loginRegExp = /[ЁёА-я]+(-|\s)[ЁёА-я]+?\s?([ЁёА-я]+(-|\s)?[ЁёА-я]+?)*/;
  const emailRegExp = /\S+@\S+\.\S+/;
  const passwordRegExp =
    /^(?=.*\d)(?=.*[A-Za-z])(?=.*[!#$%&?"])[a-zA-Z0-9!#$%&?]{5,}$/;
  const errors = [];
  if (loginRegExp.test(clientsData[0][1]) === false) {
    errors.push(
      "*!* Your login may consist of cyrillic characters, hyphens and whitespaces!"
    );
    document.querySelector("#login").classList.add("invalidInfos");
  }
  if (emailRegExp.test(clientsData[1][1]) === false) {
    errors.push(
      "*!* Your e-mail may consist of any latin characters, any printable characters (!#$%&'*+-/=?^_`{|}~), dots and @!"
    );
    document.querySelector("#email").classList.add("invalidInfos");
  }
  if (clientsData[2][1] !== clientsData[3][1]) {
    errors.push("*!* Your passwords are not identical!");
    document.querySelector("#passwordOne").classList.add("invalidInfos");
    document.querySelector("#passwordTwo").classList.add("invalidInfos");
  }
  if (passwordRegExp.test(clientsData[2][1]) === false) {
    errors.push(
      "*!* Your password must be at least 5 characters long and may consist of at least one digit, one latin character and one of these characters !#$%&?"
    );
    document.querySelector("#passwordOne").classList.add("invalidInfos");
  }
  if (passwordRegExp.test(clientsData[3][1]) === false) {
    document.querySelector("#passwordTwo").classList.add("invalidInfos");
  }
  if (errors.length > 0) {
    alert(errors.join("\n"));
    return false;
  }
  return true;
}
function clearFields() {
  cleanInputs.forEach((input) => {
    input.value = "";
  });
  language.getElementsByTagName("option")[0].selected = "selected";
  document.querySelector(".checkbox").checked = false;
  checkboxQuestion.classList.remove("hiddenElements");
}
function handleClientForm(event) {
  event.preventDefault();
  const validityResult = checkValidityOfEachField();
  if (validityResult === false) {
    checkValidityOfEachField();
  } else {
    document.querySelectorAll(".invalidInfos").forEach((item) => {
      item.classList.remove("invalidInfos");
    });
    const clientsData = serializeForm(applicantForm);
    subFields.forEach((field) => field.classList.remove("beforeSubmission"));
    subFields.forEach((field) => field.classList.add("afterSubmission"));
    fieldSets.forEach((fieldset) =>
      fieldset.classList.add("fieldsAfterSubmission")
    );
    const loginInpt = document.createTextNode(clientsData[0][1]);
    logSub.appendChild(loginInpt);
    const emailInpt = document.createTextNode(clientsData[1][1]);
    emailSub.appendChild(emailInpt);
    const pOneInpt = document.createTextNode(clientsData[2][1]);
    pOneSub.appendChild(pOneInpt);
    const pTwoInpt = document.createTextNode(clientsData[3][1]);
    pTwoSub.appendChild(pTwoInpt);
    const langInpt = document.createTextNode(clientsData[4][1]);
    langSubmitted.appendChild(langInpt);
    checkboxQuestion.classList.add("hiddenElements");
    checkboxStatement.classList.remove("hiddenElements");
    const btnCntr = document.querySelector(".buttonContainer");
    btnCntr.removeChild(signup);
    confirm.classList.remove("hiddenElements");
    confirm.classList.add("buttonAfterFirstSubmission");
    confirm.addEventListener("click", () => {
      subFields.forEach((field) => field.classList.add("beforeSubmission"));
      fieldSets.forEach((fieldset) =>
        fieldset.classList.remove("fieldsAfterSubmission")
      );
      clearFields();
      checkboxStatement.classList.add("hiddenElements");
      confirm.classList.add("hiddenElements");
      thankyou.classList.remove("hiddenElements");
      thankyou.disabled = true;
    });
  }
}
function toggleEyeOne() {
  const type =
    passwordOne.getAttribute("type") === "password" ? "text" : "password";
  passwordOne.setAttribute("type", type);
  eyeOne.classList.toggle("fa-eye");
}
function toggleEyeTwo() {
  const type =
    passwordTwo.getAttribute("type") === "password" ? "text" : "password";
  passwordTwo.setAttribute("type", type);
  eyeTwo.classList.toggle("fa-eye");
}
function checkValidity(event) {
  const formNode = event.target.form;
  const isValid = formNode.checkValidity();
  formNode.querySelector("button").disabled = !isValid;
}
function init() {
  applicantForm.addEventListener("submit", handleClientForm);
  applicantForm.addEventListener("input", checkValidity);
  eyeOne.addEventListener("click", toggleEyeOne);
  eyeTwo.addEventListener("click", toggleEyeTwo);
}
window.addEventListener("DOMContentLoaded", init);
