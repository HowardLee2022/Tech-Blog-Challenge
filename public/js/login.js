
// creates a post request that matches the input field to the existing login in the db. then redirects to dashboard
document.querySelector("#loginForm").addEventListener("submit",e=>{
    e.preventDefault();
    const loginObj = {
        email:document.querySelector("#loginEmail").value,
        password:document.querySelector("#loginPassword").value
    }
    console.log(loginObj)
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(loginObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href="/dashboard"
        } else {
            alert("error")
        }
    })
})
//on button click redirect to the signup page
document.getElementById("signupbutton").addEventListener("click", e=>{
    e.preventDefault();
    location.href="/signup"
})