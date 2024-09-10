var _a;
(_a = document.getElementById("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profileInput = document.getElementById('pro');
    var nameElement = document.getElementById("first-name");
    var nameElementtwo = document.getElementById("last-name");
    var emailElement = document.getElementById("em");
    var phoneElement = document.getElementById("ph");
    var eduElement = document.getElementById("edu");
    var expElement = document.getElementById("experience");
    var skillElement = document.getElementById("skills");
    if (profileInput && nameElement && nameElementtwo && emailElement && phoneElement && eduElement && expElement && skillElement) {
        var name_1 = nameElement.value;
        var nametwo = nameElementtwo.value;
        var em = emailElement.value;
        var ph = phoneElement.value;
        var edu = eduElement.value;
        var experience = expElement.value;
        var skills = skillElement.value;
        // Handle profile picture
        var proFl = (_a = profileInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var proURL = proFl ? URL.createObjectURL(proFl) : "";
        // Corrected template for image
        var output = "\n      <h2>Resume</h2>\n      ".concat(proURL ? "<img src=\"".concat(proURL, "\" alt=\"profile\" class=\"profile\">") : '', "\n      <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " ").concat(nametwo, "</span></p>\n      <p><strong>Email:</strong><span id=\"edit-email\" class=\"editable\"> ").concat(em, "</span></p>\n      <p><strong>Phone:</strong><span id=\"edit-phone\" class=\"editable\"> ").concat(ph, "</span></p>\n      \n      <h3>Education</h3>\n      <p id=\"edit-edu\" class=\"editable\">").concat(edu, "</p>\n\n      <h3>Experience</h3>\n      <p id=\"edit-exp\" class=\"editable\">").concat(experience, "</p>\n\n      <h3>Skills</h3>\n      <p id=\"edit-skill\" class=\"editable\">").concat(skills, "</p>\n    ");
        var elres = document.getElementById("output");
        if (elres) {
            elres.innerHTML = output;
            makeEdit();
        }
    }
    else {
        console.error("One or more element outputs are missing");
    }
});
function makeEdit() {
    var editElmt = document.querySelectorAll('.editable');
    editElmt.forEach(function (elm) {
        elm.addEventListener('click', function () {
            var _a;
            var currentEl = elm;
            var currentValue = currentEl.textContent || "";
            if (currentEl.tagName === "p" || currentEl.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing input');
                input_1.addEventListener('blur', function () {
                    currentEl.textContent = input_1.value;
                    currentEl.style.display = 'inline';
                    input_1.remove();
                });
                currentEl.style.display = 'none';
                (_a = currentEl.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentEl);
                input_1.focus();
            }
        });
    });
}
