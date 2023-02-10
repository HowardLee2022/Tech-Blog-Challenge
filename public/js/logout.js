//destroys the session and direct back to homepage.
fetch("/api/users/logout",{
    method:"GET",
}).then(res=>{
    if(res.ok){
       location.href="/"
    } else {
        alert("error")
    }
})

