document.getElementById("form")?.addEventListener("submit", function (event) {
  event.preventDefault();

  const profileInput = document.getElementById('pro') as HTMLInputElement;

  const nameElement = document.getElementById("first-name") as HTMLInputElement;
  const nameElementtwo = document.getElementById("last-name") as HTMLInputElement;
  const emailElement = document.getElementById("em") as HTMLInputElement;
  const phoneElement = document.getElementById("ph") as HTMLInputElement;
  const eduElement = document.getElementById("edu") as HTMLInputElement;
  const expElement = document.getElementById("experience") as HTMLInputElement;
  const skillElement = document.getElementById("skills") as HTMLInputElement;

  if (profileInput && nameElement && nameElementtwo && emailElement && phoneElement && eduElement && expElement && skillElement) {
    const name = nameElement.value;
    const nametwo = nameElementtwo.value;
    const em = emailElement.value;
    const ph = phoneElement.value;
    const edu = eduElement.value;
    const experience = expElement.value;
    const skills = skillElement.value;

    const proFl = profileInput.files?.[0];
    const proURL = proFl ? URL.createObjectURL(proFl) : "";

    const output = `
      <h2>Resume</h2>
      ${proURL ? `<img src="${proURL}" alt="profile" class="profile">` : '' }
      <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} ${nametwo}</span></p>
      <p><strong>Email:</strong><span id="edit-email" class="editable"> ${em}</span></p>
      <p><strong>Phone:</strong><span id="edit-phone" class="editable"> ${ph}</span></p>
      
      <h3>Education</h3>
      <p id="edit-edu" class="editable">${edu}</p>

      <h3>Experience</h3>
      <p id="edit-exp" class="editable">${experience}</p>

      <h3>Skills</h3>
      <p id="edit-skill" class="editable">${skills}</p>
    `;

    const elres = document.getElementById("output");
    if (elres) {
      elres.innerHTML = output;
      makeEdit();
    }
  } else {
    console.error("One or more element outputs are missing");
  }
});

function makeEdit() {
  const editElmt = document.querySelectorAll('.editable');
  editElmt.forEach(elm => {
      elm.addEventListener('click', function () {
          const currentEl = elm as HTMLElement;
          const currentValue = currentEl.textContent || "";


        if(currentEl.tagName === "p" || currentEl.tagName === "SPAN") {
          const input = document.createElement('input')
          input.type = 'text'
          input.value = currentValue
          input.classList.add('editing input')

          input.addEventListener('blur', function(){
            currentEl.textContent = input.value
            currentEl.style.display = 'inline'
            input.remove()
          })

          currentEl.style.display = 'none'
          currentEl.parentNode?.insertBefore(input, currentEl)
          input.focus()
        }
      })
    })
  }