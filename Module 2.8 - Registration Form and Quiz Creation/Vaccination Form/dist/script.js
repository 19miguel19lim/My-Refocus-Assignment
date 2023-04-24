// Variables
const form = document.forms.vaccination;
const firstName = document.querySelector(".first_name");
const middleName = document.querySelector(".middle_name");
const lastName = document.querySelector(".last_name");
const dateOfBirth = document.querySelector(".date_of_birth");
const email = document.querySelector(".email");
const region = document.querySelector(".region");
const province = document.querySelector(".province");
const barangay = document.querySelector(".barangay");
const street = document.querySelector(".street");
const male = document.getElementById("male");
const female = document.getElementById("female");
const other = document.getElementById("other");
const message = document.querySelector(".message");
const genderSelection = document.querySelector(".gender-selection");
const vaccinationBrandD1 = document.querySelector(".vaccinationBrandD1");
const vaccinationDateD1 = document.querySelector(".vaccination_date1");
const vaccinationSite1 = document.querySelector(".vaccination_site1");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const vaccinationBrandD2 = document.querySelector(".vaccinationBrandD2");
const vaccinationDateD2 = document.querySelector(".date_of__vaccination2");
const vaccinationSite2 = document.querySelector(".vaccinationSite2");
const radioYesNo = document.querySelectorAll("input[name=inlineRadioOptions]");
const findGender = document.querySelectorAll("input[name=genderSelection]");
const summary = document.querySelector(".summary-popup");
const overlay = document.querySelector(".overlay");

// re-usable functions
const setError = function (field) {
  field.classList.add("is-invalid");
};

const resetError = function (field) {
  field.classList.remove("is-invalid");
  field.removeAttribute("value");
};

radioYesNo.forEach((e) =>
  e.addEventListener("change", function () {
    if (yes.checked && !no.checked) {
      vaccinationBrandD2.removeAttribute("disabled");
      vaccinationDateD2.removeAttribute("disabled");
      vaccinationSite2.removeAttribute("disabled");
    } else {
      vaccinationBrandD2.setAttribute("disabled", "");
      vaccinationDateD2.setAttribute("disabled", "");
      vaccinationSite2.setAttribute("disabled", "");
    }
  })
);

//............. Submit Application.................
// Returning errors
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!firstName.value) {
    setError(firstName);
    return;
  }
  if (!middleName.value) {
    setError(middleName);
    return;
  }
  if (!lastName.value) {
    setError(lastName);
    return;
  }
  if (!dateOfBirth.value) {
    setError(dateOfBirth);
    return;
  }
  if (!email.value) {
    setError(email);
    return;
  }
  if (!region.value) {
    setError(region);
    return;
  }
  if (!province.value) {
    setError(province);
    return;
  }
  if (!barangay.value) {
    setError(barangay);
    return;
  }
  if (!street.value) {
    setError(street);
    return;
  }
  if (male.checked) {
  } else if (female.checked) {
  } else if (other.checked) {
  } else {
    genderSelection.classList.add("error");
    genderSelection.classList.remove("mb-4");
    message.classList.remove("hidden");
  }
  if (!vaccinationBrandD1.value) {
    setError(vaccinationBrandD1);
    return;
  }
  if (!vaccinationDateD1.value) {
    setError(vaccinationDateD1);
    return;
  }
  if (!vaccinationSite1.value) {
    setError(vaccinationSite1);
    return;
  }
  if (yes.checked) {
    if (!vaccinationBrandD2.value) {
      setError(vaccinationBrandD2);
      return;
    }
    if (!vaccinationDateD2.value) {
      setError(vaccinationDateD2);
      return;
    }
    if (!vaccinationSite2.value) {
      setError(vaccinationSite2);
      return;
    }
  }

  // Displaying Summary
  console.log(firstName.value);
  document.querySelector(
    ".first__name"
  ).textContent = `First name: ${firstName.value}`;
  console.log(middleName.value);
  document.querySelector(
    ".middle__name"
  ).textContent = `Middle name: ${middleName.value}`;
  console.log(lastName.value);
  document.querySelector(
    ".last__name"
  ).textContent = `Last name: ${lastName.value}`;
  console.log(dateOfBirth.value);
  document.querySelector(
    ".dob"
  ).textContent = `Date of birth: ${dateOfBirth.value}`;
  console.log(email.value);
  document.querySelector(".email_").textContent = `Email: ${email.value}`;
  console.log(region.value);
  document.querySelector(".region_").textContent = `Region: ${region.value}`;
  console.log(province.value);
  document.querySelector(
    ".province_"
  ).textContent = `Province: ${province.value}`;
  console.log(barangay.value);
  document.querySelector(
    ".barangay_"
  ).textContent = `Barangay: ${barangay.value}`;
  console.log(street.value);
  document.querySelector(".street_").textContent = `Street: ${street.value}`;
  findGender.forEach(function (e) {
    if (e.checked) {
      console.log(e.value);
      document.querySelector(".gender_").textContent = `Gender: ${e.value}`;
    }
  });
  console.log(vaccinationBrandD1.value);
  document.querySelector(
    ".VacD1"
  ).textContent = `Vaccination Dose 1: ${vaccinationBrandD1.value}`;
  console.log(vaccinationDateD1.value);
  document.querySelector(
    ".VacDateD1"
  ).textContent = `Vaccination date (Dose 1): ${vaccinationDateD1.value}`;
  console.log(vaccinationSite1.value);
  document.querySelector(
    ".VacSiteD1"
  ).textContent = `Vaccination site (Dose 1): ${vaccinationSite1.value}`;
  radioYesNo.forEach(function (e) {
    if (e.checked === yes.checked) {
      console.log(vaccinationBrandD2.value);
      document.querySelector(
        ".VacD2"
      ).textContent = `Vaccination Dose 2: ${vaccinationBrandD2.value}`;
      console.log(vaccinationDateD2.value);
      document.querySelector(
        ".VacDateD2"
      ).textContent = `Vaccination date (Dose 2): ${vaccinationDateD2.value}`;
      console.log(vaccinationSite2.value);
      document.querySelector(
        ".VacSiteD2"
      ).textContent = `Vaccination site (Dose 2): ${vaccinationSite2.value}`;
    }
  });

  // Prompt popout
  document.querySelector(".summary-popup").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");

  // close popout using "esc" key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !summary.classList.contains("hidden")) {
      document.querySelector(".summary-popup").classList.add("hidden");
      document.querySelector(".overlay").classList.add("hidden");
    }
  });

  // close popout by clicking outside of popout
  overlay.addEventListener("click", function (e) {
    document.querySelector(".summary-popup").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
  });
});

// Reset Button
const reset = document.querySelector(".reset_btn");
reset.addEventListener("click", function (e) {
  document.querySelector(".vaccination_form").reset();
  resetError(firstName);
  resetError(middleName);
  resetError(lastName);
  resetError(dateOfBirth);
  resetError(email);
  resetError(region);
  resetError(province);
  resetError(barangay);
  resetError(street);
  resetError(vaccinationBrandD1);
  resetError(vaccinationDateD1);
  resetError(vaccinationSite1);
  resetError(vaccinationBrandD2);
  resetError(vaccinationDateD2);
  resetError(vaccinationSite2);
});

let word = "racecar";
let letters = [];
let rword = "";
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(`${word} is a palindrome`);
} else {
  console.log(`${word} is not a palindrome`);
}
