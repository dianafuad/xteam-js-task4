
let isAdult = false;

let engDeparments = [
  "Aeronautical and Aerospace Engineering",
  "Architectural Engineering",
  "Biomedical Engineering and Systems",
  "Chemical Engineering",
  "Computer Engineering",
  "Electrical Power Engineering",
  "Electronics and Communications",
  "Engineering Mathematics and Physics",
  "Irrigation and Hydraulics",
  "Mechanical Design and Production",
  "Mechanical Power Engineering",
  "Mining & Geological Engineering Program",
  "Petroleum Engineering Program",
  "Metallurgical Engineering Program",
  "Public Works",
  "Structural Engineering",
];

let fciDepartments = [
  "Information Technology",
  "Computer science",
  "Information Sciense",
  "Desision Support ",
];

let medDepartment = [
  "Anesthesiology",
  "Emergency Medicine",
  "Family & Community Medicine",
  "Neurology",
  "Neurosurgery",
  "Obstetrics & Gynecology",
  "Orthopaedic Surgery",
  "Pediatrics",
  "Radiation Oncology",
  "Surgery",
];

/**
 *Input -->       confirm from user
 *Process -->     ask the user to confirm his age
 *Output-->       if > 18 close the website
 * When Callled?  Onload the index page
 */
function checkAge() {
  let text = " Please confirm that you are a student  and more than 18 years";
  if (confirm(text) == false) {
    alert("Sorry you have to leave!");
    window.close();
  }
}


/**
 *Input -->       birthday date
 *Process -->     calculate the user age if >18 show gpa field
                  if < 18 ask him to renter birthday 
 *Output-->       nothing
 * When Called?  Oninput birthday 
 */
function calAge() {
  let ageFeild = document.getElementById("birthday");
  let date = ageFeild.value;
  let dateArr = date.split("-");
  let today = new Date();
  let currentYear = today.getFullYear();
  let age = currentYear - dateArr[0];


  let gpaFeild = document.getElementById("gpa");

  if (age > 18) {
    document.getElementById("show-gpa").style.display="inline-block";
    ageFeild.style.display = "none";
    gpaFeild.style.display = "inline-block";
    isAdult = true;
  } else {
    alert("please re-enter you have to be +18");
  }
}


/**
 *Input -->       user gpa
 *Process -->     calculate the user score    and go to courses page              
 *Output-->       show the score
 * When Called?  Onclick "Procces to Website"
 */
function calScore() {
  let score = 0;
  let gpa = parseFloat(document.getElementById("gpa").value);


  if (gpa <= 4 && gpa >= 3.5) {
    score = "A+";
  } else if (gpa < 3.5 && gpa >= 3) {
    score = "A";
  } else if (gpa < 3 && gpa >= 2.5) {
    score = "B+";
  } else if (gpa < 2.5 && gpa >= 2.3) {
    score = "B";
  } else if (gpa < 2.3 && gpa >= 2) {
    score = "C+";
  } else if (gpa <= 2 && gpa <= 1.5) {
    score = "C";
  }

  alert(score);
}



/**
 *Input -->      faculty selected
 *Process -->    get  the faculity departments  and assign them to the "deprtments-select" field              
 *Output-->       "deprtments-select" field  appears
 * When Called?  Oninput faculty select
 */

function fillDepartmentstMenu() {
  
  let choice = document.getElementById("faculty-select").value;
  let departments_Arr = getFaculityDep(choice);
  let depList = document.getElementById("deprtments-select");
 
  // delete the previous selection
  while (depList.hasChildNodes()) {
    depList.removeChild(depList.firstChild);
  }

  depList.style.visibility = "visible";
  depList.style.opacity = "1";

  for (const department of departments_Arr) {
    var option = document.createElement("option");
    option.appendChild(document.createTextNode(department));
    depList.appendChild(option);
    
  }
  

}


function getFaculityDep(fac) {
  switch (fac) {
    case "Faculty of Engineering":
      return engDeparments;
      break;

    case "Faculty of Computer and Information":
      return fciDepartments;
      break;

    case "Faculty of Medicine":
      return medDepartment;
      break;
  }
}

/**
 *Input -->     date and month of appoinment
 *Process -->   get the day of the week of the entered day              
 *Output-->      shoe the day
 * When Called?  Onclick ok button
 */
function pickAppoinment() {
  let date = document.getElementById("appoinment-date").value;
  let month = document.getElementById("appoinment-month").value - 1; 
  const d = new Date(2022, month, date);
  let day = d.getDay(); 
  let showDay = document.getElementById("day");
  showDay.style.visibility = "visible";
  showDay.style.opacity = "1";
  showDay.innerHTML = `It will be on  <span style="color:#D82A4F;font-weight: bold;"> ${getDayName(
    day
  )}</span>`;
}

//called by  pickAppoinment()

function getDayName(date) {
  switch (date) {
    case 0:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wedensday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:    
      return "Saturday";
      break;
  }
}


/**
 *Input -->      all coursses
 *Process -->   get   the selected courses           
 *Output-->     hide/show the
 * When Called?  Onclick ok  show /Hide Selected
 */
function hideSelected(btn) {
  for (let i = 1; i < 9; i++) {
    let ch = document.getElementById(`ch${i}`);

    if (ch.checked) {
      document.getElementById(`c${i}`).classList.toggle("d-none");
    }
  }
}

// dark mode function


function darkmode() {
  document.getElementById("nav").classList.toggle("mediam-dark-bg");
  document.getElementById("body").classList.toggle("dark-back-g");
  document.getElementById("faculty-select").classList.toggle("mediam-dark-bg");
  document
    .getElementById("deprtments-select")
    .classList.toggle("mediam-dark-bg");
  document.getElementById("appoinment-date").classList.toggle("mediam-dark-bg");
  document
    .getElementById("appoinment-month")
    .classList.toggle("mediam-dark-bg");
  let courses = document.querySelectorAll(".course");
  for (const course of courses) {
    course.classList.toggle("mediam-dark-bg");
  }
  let arr = document.getElementsByTagName("h5");
  arr[0].classList.toggle("light-text");
  document.getElementById("day").classList.toggle("light-text");
}

