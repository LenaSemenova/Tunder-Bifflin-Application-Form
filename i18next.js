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
import ru from "../data/ru.js";
import en from "../data/en.js";
const output = (err, t) => {
  if (err) {
    return console.log("something went wrong loading", err);
  }
  titleTwo.innerHTML = t("titleTwo");
  spanLogin.innerHTML = t("spanLogin");
  spanEmail.innerHTML = t("spanEmail");
  firstPassword.innerHTML = t("firstPassword");
  secondPassword.innerHTML = t("secondPassword");
  spanLang.innerHTML = t("spanLang");
  langOptOne.innerHTML = t("langOptOne");
  langOptTwo.innerHTML = t("langOptTwo");
  langOptThree.innerHTML = t("langOptThree");
  langOptFour.innerHTML = t("langOptFour");
  signup.innerHTML = t("signup");
  inputPlaceholderOne.placeholder = t("login");
  inputPlaceholderTwo.placeholder = t("email");
  inputPlaceholderThree.placeholder = t("password");
  inputPlaceholderFour.placeholder = t("password");
  logSub.innerHTML = t("logSub");
  emailSub.innerHTML = t("emailSub");
  pOneSub.innerHTML = t("pOneSub");
  pTwoSub.innerHTML = t("pTwoSub");
  langSubmitted.innerHTML = t("langSubmitted");
  checkboxQuestion.innerHTML = t("checkboxQuestion");
  checkboxStatement.innerHTML = t("checkboxStatement");
  confirm.innerHTML = t("confirm");
  thankyou.innerHTML = t("thankyou");
};
i18next.init(
  {
    lng: "en",
    fallbackLng: ["es", "ru"],
    debug: true,
    resources: {
      en,
      ru,
    },
  },
  output
);
const changeLanguage = document.querySelector("#changeLanguage");
changeLanguage.onclick = () => {
  console.log(i18next.language);
  let lang;
  if (i18next.language === "en") {
    lang = "ru";
    changeLanguage.textContent = "EN";
    signup.classList.add("confirmSignup_RU");
    cleanInputs.forEach((input) => {
      input.classList.add("input_RU");
    });
  } else {
    lang = "en";
    changeLanguage.textContent = "RU";
    signup.classList.remove("confirmSignup_RU");
    cleanInputs.forEach((input) => {
      input.classList.remove("input_RU");
    });
  }
  i18next.changeLanguage(lang, output);
};
