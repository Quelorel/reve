// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
  if (lang == "eng") {
    sessionStorage.setItem("lang", "eng");
  } else {
    sessionStorage.setItem("lang", "hr");
  }
  location.reload();
}

const languageList = document.querySelector(".lang-change__dropdown");

/// CONTENT
const vehicleFleetPageHeader = document.querySelector(
  "#vehicle-fleet-page-header"
);
const vehicleFleetPageText = document.querySelector("#vehicle-fleet-page-text");
const vehicleFleetPageFleetSectionHeader = document.querySelector(
  "#vehicle-fleet-page-fleet-section-header"
);
const vehicleFleetPageFleetSectionText = document.querySelector(
  "#vehicle-fleet-page-fleet-section-text"
);

// LINKS
const contactUsPageLink = document.querySelectorAll("#contact-us-page-link");
const homePageLink = document.querySelectorAll("#home-page-link");
const aboutUsPageLink = document.querySelectorAll("#about-us-page-link");
const vehicleFleetPageLink = document.querySelectorAll(
  "#vehicle-fleet-page-link"
);
const signUpPageLink = document.querySelector("#sign-up-page-link");
const rulesOfProcedurePage = document.querySelector("#rules-of-procedure-page");
const privacyPolicyPage = document.querySelector("#privacy-policy-page");

// BUTTONS
const signUpButton = document.querySelectorAll(".sign-up-button");
const contactUsButton = document.querySelector("#contact-us-button");

// CONTACT FORM CONTENT

const errorHintName = document.querySelector(".error-hint-name");
const errorHintEmail = document.querySelector(".error-hint-email");
const successText = document.querySelector(".success-text");

/// SIGN UP SECTION

const signUpName = document.querySelector("#name");
const signUpPhone = document.querySelector("#phone");
const signUpMessage = document.querySelector("#message");

const signUpPageHeader = document.querySelector("#sign-up-page-header");
const signUpPageSubHeader = document.querySelector("#sign-up-page-sub-header");

var language = {
  eng: {
    // VEHICLE FLEET TEXT ENGLISH
    vehicleFleetPageHeader: "CHOOSE THE CAR YOU WANT TO DRIVE",
    vehicleFleetPageText:
      "In our offer of cars, there are several different models in order to better adapt to the needs of our suppliers. Our fleet is constantly growing due to the increased volume of work, and we will soon be offering electric bicycles and scooters.",
    vehicleFleetPageFleetSectionHeader: "Choices of more than 40+ cars",
    vehicleFleetPageFleetSectionText:
      "Our fleet is growing as our staff grows. Depending on your needs, you can choose one of the 3 models in our offer. We offer the Opel Astra for maximum driving comfort, and our Toyota Aygo for low city consumption.",

    // BUTTONS
    contactUsButton: "Contact us",
    signUpButton: "SIGN UP",

    // LINKS
    homePageLink: "Home",
    aboutUsPageLink: "About us",
    contactUsPageLink: "Contact us",
    vehicleFleetPageLink: "Vehicle Fleet",
    signUpPageLink: "Sign up",
    rulesOfProcedurePage: "Rules of Procedure",
    privacyPolicyPage: "Privacy policy",

    // SIGN UP FORM
    signUpName: "Name & Surname",
    signUpPhone: "Phone",
    signUpMessage: "Message",

    // SIGN UP SECTION

    signUpPageHeader: "SIGN UP",
    signUpPageSubHeader: "In only two minutes",
  },
  hr: {
    // CONTENT
    vehicleFleetPageHeader: "BIRAJ AUTO KOJIM ŽELIŠ VOZITI",
    vehicleFleetPageText:
      "U našoj ponudi automobila se nalazi nekoliko različitih modela kako bismo se što bolje prilagodili potrebama naših dostavljača. Naša flota kontinuirano raste zbog povećanog obujma posla, a uskoro ćemo u ponudi imati električne bicikle i skutere.",
    vehicleFleetPageFleetSectionHeader: "Izbor od 40+ automobila",
    vehicleFleetPageFleetSectionText:
      "Naša flota se povećava kako nam raste broj zaposlenika. Ovisno o tvojim potrebama možeš izabrati neki od 3 modela koji se nalaze u našoj ponudi. Za maksimalnu udobnost u vožnji nudimo Opel Astru, a za malu potrošonju pri gradskoj vožnji tu su naše Toyote Aygo.",

    // BUTTONS
    contactUsButton: "Javi nam se!",
    signUpButton: "PRIJAVI SE",

    // LINKS

    homePageLink: "Početna",
    aboutUsPageLink: "O nama",
    contactUsPageLink: "Kontakti",
    vehicleFleetPageLink: "Vozni park",
    signUpPageLink: "Prijavi se",
    rulesOfProcedurePage: "Pravilnik o radu",
    privacyPolicyPage: "Pravila Privatnosti",

    // SIGN UP FORM

    signUpName: "Ime i Prezime",
    signUpPhone: "Mobitel",
    signUpMessage: "Poruka",
  },
};

if (sessionStorage.getItem("lang") == "eng") {
  languageList.innerHTML =
    '<li class="active-lang" onClick="changeLanguage(\'eng\')"><a href="#" class="eng">English</a></li><li onClick="changeLanguage(\'hr\')"><a href="#" class="hr">Croatian</a></li>';

  // CONTENT

  vehicleFleetPageHeader.textContent = language.eng.vehicleFleetPageHeader;

  vehicleFleetPageText.textContent = language.eng.vehicleFleetPageText;

  vehicleFleetPageFleetSectionHeader.textContent =
    language.eng.vehicleFleetPageFleetSectionHeader;

  vehicleFleetPageFleetSectionText.textContent =
    language.eng.vehicleFleetPageFleetSectionText;

  signUpPageHeader.textContent = language.eng.signUpPageHeader;

  signUpPageSubHeader.textContent = language.eng.signUpPageSubHeader;

  // BUTTONS

  contactUsButton.textContent = language.eng.contactUsButton;

  signUpButton.forEach(
    (signUpButton) => (signUpButton.textContent = language.eng.signUpButton)
  );

  // LINKS

  homePageLink.forEach(
    (homePageLink) => (homePageLink.textContent = language.eng.homePageLink)
  );

  aboutUsPageLink.forEach(
    (aboutUsPageLink) =>
      (aboutUsPageLink.textContent = language.eng.aboutUsPageLink)
  );

  contactUsPageLink.forEach(
    (contactUsPageLink) =>
      (contactUsPageLink.textContent = language.eng.contactUsPageLink)
  );

  vehicleFleetPageLink.forEach(
    (vehicleFleetPageLink) =>
      (vehicleFleetPageLink.textContent = language.eng.vehicleFleetPageLink)
  );

  signUpPageLink.textContent = language.eng.signUpPageLink;

  rulesOfProcedurePage.textContent = language.eng.rulesOfProcedurePage;
  privacyPolicyPage.textContent = language.eng.privacyPolicyPage;

  ///  CONTACT FORM TEXT

  signUpName.placeholder = language.eng.signUpName;

  signUpMessage.placeholder = language.eng.signUpMessage;

  signUpPhone.placeholder = language.eng.signUpPhone;
} else {
  languageList.innerHTML =
    '<li class="active-lang" onClick="changeLanguage(\'hr\')"><a href="#" class="hr">Croatian</a></li> <li  onClick="changeLanguage(\'eng\')"><a href="#" class="eng">English</a></li>';
}
