var signupForm = document.getElementById("signUp");
var regiterBtn = document.getElementById("register_info");

document.getElementById("signUp").addEventListener("submit", function (event) {
  event.preventDefault();
  const Fname_val = document.getElementById("firstName").value;
  const Lname_val = document.getElementById("lastName").value;
  const email_val = document.getElementById("mail").value;
  const pass_val = document.getElementById("pass").value;
  const Repass_val = document.getElementById("repass").value;
  const formData = {
    Fname: Fname_val,
    Lname: Lname_val,
    email: email_val,
    pass: pass_val,
    repass: Repass_val,
  };
  const jsonData = JSON.stringify(formData);
  console.log(jsonData);
  document.getElementById("signUp").reset();
});
