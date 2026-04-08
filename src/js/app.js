import "../style/index.css";

function render(variables = {}) {
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) {
    cover = "<div class='cover'></div>";
  }

  let name = variables.name;
  if (!name) name = "Lucy";

  let lastName = variables.lastName;
  if (!lastName) lastName = "Boilett";

  let role = variables.role;
  if (!role) role = "Web Developer";

  let city = variables.city;
  if (!city) city = "Miami";

  let country = variables.country;
  if (!country) country = "USA";

  let location = city;
  if (country) location = location + ", " + country;

  let socialMediaPosition = variables.socialMediaPosition;
  if (!socialMediaPosition) socialMediaPosition = "position-right";

  let twitter = `<li><a href="https://twitter.com/4geeksacademy"><i class="fab fa-twitter"></i></a></li>`;
  if (variables.twitter) {
    twitter = `<li><a href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a></li>`;
  }

  let github = `<li><a href="https://github.com/4geeksacademy"><i class="fab fa-github"></i></a></li>`;
  if (variables.github) {
    github = `<li><a href="https://github.com/${variables.github}"><i class="fab fa-github"></i></a></li>`;
  }

  let linkedin = `<li><a href="https://linkedin.com/school/4geeksacademy"><i class="fab fa-linkedin"></i></a></li>`;
  if (variables.linkedin) {
    linkedin = `<li><a href="https://linkedin.com/in/${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>`;
  }

  let instagram = `<li><a href="https://instagram.com/4geeksacademy"><i class="fab fa-instagram"></i></a></li>`;
  if (variables.instagram) {
    instagram = `<li><a href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>`;
  }

  document.querySelector("#widget_content").innerHTML = `
    <div class="widget">
      ${cover}
      <img src="${variables.avatarURL}" class="photo" />
      <h1>${name} ${lastName}</h1>
      <h2>${role}</h2>
      <h3>${location}</h3>
      <ul class="${socialMediaPosition}">
        ${twitter}
        ${github}
        ${linkedin}
        ${instagram}
      </ul>
    </div>
  `;
}

window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-right",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };

  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    function onValueChange(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        elm.value == "" || elm.value == "null"
          ? null
          : elm.value == "true"
          ? true
          : elm.value == "false"
          ? false
          : elm.value;
      render(Object.assign(window.variables, values));
    }

    elm.addEventListener("input", onValueChange);
    elm.addEventListener("change", onValueChange);
  });
};
