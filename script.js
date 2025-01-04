$(document).ready(function () {
    $("#form").on("submit", function () {
        // Get input values
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let age = $("#age").val().trim();

        // Clear previous errors
        $(".error").remove();

        let isValid = true;

        // Name validation
        if (name === "") {
            $("#name").after('<span class="error" style="color: red;">Name is required.</span>');
            isValid = false;
        } else if (!validateName(name)) {
            $("#name").after('<span class="error" style="color: red;">Enter a valid name without syntax or numbers.</span>');
            isValid = false;
        }

        // Email validation
        if (email === "") {
            $("#email").after('<span class="error" style="color: red;">Email is required.</span>');
            isValid = false;
        } else if (!validateEmail(email)) {
            $("#email").after('<span class="error" style="color: red;">Enter a valid email.</span>');
            isValid = false;
        }

        // Age validation
        if (age === "") {
            $("#age").after('<span class="error" style="color: red;">Age is required.</span>');
            isValid = false;
        } else if (isNaN(age) || age <= 0) {
            $("#age").after('<span class="error" style="color: red;">Enter a valid age.</span>');
            isValid = false;
        }

        // If any validation fails, return false to prevent form submission
        return isValid;
    });

    // Email validation function
    function validateEmail(email) {
        let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return regex.test(email);
    }

    // Name validation function
    function validateName(name) {
        let regexName = /^[A-Za-z]{3,29}$/;
        return regexName.test(name);
    }
});
