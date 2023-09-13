
function handleSignIn(){


    let localData = JSON.parse(localStorage.getItem("userInfo"));
    const signinEmail = document.getElementById("signin-email").value;
    const enteredPassword = document.getElementById("signin-password").value;

    if(signinEmail != localData.signupEmail){
        alert(`You do not have an account. Kindly SignUp instead`)
    }

    else {
        if(enteredPassword != localData.userPassword){
            alert(`You have entered an incorrect password`)
        }

        else{
            alert(`Welcome Back ${localData.userName}`)
        }
    }


}



function handleSignUp(){

    const userName = document.getElementById("username").value
    const signupEmail = document.getElementById("signup-email").value;
    const signupPassword = document.getElementById("signup-password").value;


    let userInfo ={
        userName: userName,
        signupEmail: signupEmail,
        userPassword: signupPassword
    }

    localStorage.setItem("userInfo", JSON.stringify(userInfo))

    alert(`Account created. You can now sign in`)

}