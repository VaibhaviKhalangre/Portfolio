//Home-Page
var typed = new Typed("#element", {
  strings: ["Programmer", "Web Developer", "Technophile"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
// Side-Menu
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

// About-Tabs
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//Skills
async function fetchData(type = "skills") {
  try {
    let response;
    if (type === "skills") {
      response = await fetch("skills.json");
    } else {
      response = await fetch("./projects/projects.json");
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function showSkills(skills) {
  const skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";

  skills.forEach((skill) => {
    skillHTML += `
      <div class="bar">
        <div class="info">
          <img src="${skill.icon}" alt="${skill.name}" class="skill_logo"/>
          <span>${skill.name}</span>
        </div>
      </div>`;
  });

  skillsContainer.innerHTML = skillHTML;
}

// load skills
fetchData("skills").then((data) => {
  showSkills(data);
});


// Scroll Projects
let scrollContainer = document.querySelector(".work-list");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 500;
});

backBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 500;
});
