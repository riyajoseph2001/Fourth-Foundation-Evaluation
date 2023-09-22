class User {
    constructor(userName, password, role) {
        this.userName = userName;
        this.password = password;
        this.role = role;
    }
}

// Sample user data
const users = [
    new User("admin", "admin@123", "admin"),
    new User("employee", "employee@123", "employee")
];
document.addEventListener('DOMContentLoaded', function () {

    //content 
    const form = document.getElementById('frmLogin');
    var userNameInput = document.getElementById('txtUserName');
    let passwordInput = document.getElementById('txtPassword');
    const button = document.getElementById('register');

    //error
    const userNameError = document.getElementById('userNameError');
    const passwordError = document.getElementById('passwordError');

    //form addEventListener
    form.addEventListener('submit', function (event) {
        //Prevent form submission
        event.preventDefault();
        // Find user by username
        const user = users.find(u => u.userName === userNameInput.value);

        if (user && user.password === passwordInput.value) {
            // Redirect based on user role
            if (user.role === "admin") {
                // Redirect to admin home page
                window.location.href = "adminForm.html";
            } else if (user.role === "employee") {
                // Redirect to employee home page
                window.location.href = "requestForm.html";
            }
        } else {
            message.textContent = "Invalid credentials";
        }
        //Validation username
        if (!userNameInput.value.trim()) {
            userNameError.textContent = "Username is required";

        } else {
            userNameError.textContent = '';
        }
        //Validation - password
        if (!passwordInput.value.trim()) {
            passwordError.textContent = "Password is required";

        } else if (passwordInput.value.length < 4) {
            passwordError.textContent = "Password should be more than 4 characters";
        }
        else {
            userNameError.textContent = '';
        }


    });

    //addEventListener for enabling submit button
    var userflg;
    var passwordflg;
    userNameInput.addEventListener('input', () => {
        if (userNameInput.value.length > 0) {
            userflg = 1;
        }
        else {
            userflg = 0;
        }
        setbutton();
    });
    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length > 0) {
            passwordflg = 1;
        }
        else {
            passwordflg = 0;
        }
        setbutton();
    });
    //enable submit button if both field field contains value
    function setbutton() {
        if (userflg === 1 && passwordflg === 1) {
            button.disabled = false;
        }
        else {
            button.disabled = true;
        }
    }


});