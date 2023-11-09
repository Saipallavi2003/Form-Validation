const form = document.getElementById("form");
const firstname = document.getElementById("first-Name");
const middlename = document.getElementById("middle-Name");
const lastname = document.getElementById("last-Name");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const phoneNum = document.getElementById("phone-Number");
const age = document.getElementById("your-age");
const fileInput = document.getElementById("profile-picture");
const dateofBirth = document.getElementById("date-birth");
const gender = document.getElementById("gender");
const checkbox = document.getElementById("mycheckbox");

// display none
firstname.addEventListener("input", function () {
  document.getElementById("first-error").style.display = "none";
});

middlename.addEventListener("input", function () {
  document.getElementById("middle-error").style.display = "none";
});

lastname.addEventListener("input", function () {
  document.getElementById("last-error").style.display = "none";
});

email.addEventListener("input", function () {
  document.getElementById("email-error").style.display = "none";
});

password.addEventListener("input", function () {
  document.getElementById("password-error").style.display = "none";
});

password2.addEventListener("input", function () {
  document.getElementById("password2-error").style.display = "none";
});

age.addEventListener("input", function () {
  document.getElementById("age-error").style.display = "none";
});

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
  // document.getElementById("user-error").style.display = "block";
  document.getElementById("email-error").style.display = "block";
  document.getElementById("age-error").style.display = "block";

  document.getElementById("middle-error").style.display = "block";
  document.getElementById("last-error").style.display = "block";
  document.getElementById("password-error").style.display = "block";
  document.getElementById("password2-error").style.display = "block";
}

// show success message
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = "form-control success";
}

//check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Enter your emailId");
  }
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `confirm password is required `);
    } else {
      showSuccess(input);
    }
  });
}

//check input lenght
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// firstname ,middlename and lastname

function validateName(input) {
  const name = /^[a-zA-Z ]+$/;

  if (name.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Enter the first name");
  }
}

function validatemiddleName(input) {
  const name = /^[a-z.A-Z-' ]+$/;

  if (name.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, " Enter the middle name");
  }
}

function validatelastName(input) {
  const name = /^[a-zA-Z-' ]+$/;

  if (name.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "  Enter the last name");
  }
}

// check passwords match

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkpassword(input) {
  const ps =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (ps.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Enter the password");
  }
}

// checkbox

function validateForm() {
  var checkbox = document.getElementById("myCheckbox");

  if (checkbox.checked) {
  } else {
    alert("Please check the checkbox!");
  }
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([
    // username,

    email,
    password,
    password2,
    firstname,
    middlename,
    lastname,
  ]);

  validateName(firstname);
  validatemiddleName(middlename);

  validatelastName(lastname);

  checkLength(password, 8, 20);
  // checkLength(age, 18, 30);
  checkEmail(email);
  checkpassword(password);
  checkPasswordsMatch(password, password2);

  function validateAge(input) {
    const ageRegex = /^(1[89]|2[0-9]|30)12$/;

    if (ageRegex.test(input.value.trim(value))) {
      showSuccess(input);
    } else {
      showError(input, "Please enter an age between 18 to 30");
    }
  }

  validateAge(age);

  const errorMessages = document.querySelectorAll(".error");
  if (errorMessages.length == 0) {
    validateForm(checkbox);

    alert("Registration successful!");
  } else {
    alert("Registration unsuccessful. Please correct the errors.");
  }
});
