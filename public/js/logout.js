



fetch("/api/users/logout",{
    method:"GET",
}).then(res=>{
    if(res.ok){
       location.href="/"
    } else {
        alert("trumpet sound")
    }
})


// document.querySelector("#logoutbutton").addEventListener("click",e=>{
//     e.preventDefault();
//     fetch("/api/users/logout",{
//         method:"GET",
//     }).then(res=>{
//         if(res.ok){
//            location.href="/home"
//         } else {
//             alert("trumpet sound")
//         }
//     })
//     console.log("logged out")
// })