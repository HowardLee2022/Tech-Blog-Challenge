
const postId = window.location.href.split('/').pop()



document.getElementById("updatebtn").addEventListener("click",e=>{
    e.preventDefault();
    const loginObj = {
        title:document.querySelector("#title-input").value,
        description:document.querySelector("#blog-input").value
    }
    console.log(loginObj)
    fetch(`/api/posts/${postId}`,{
        method:"PUT",
        body:JSON.stringify(loginObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href="/dashboard"
        } else {
            alert("Cannot edit. Not your Post")
        }
    })
})

document.getElementById("deletebtn").addEventListener("click", e=>{
    e.preventDefault();
    fetch(`/api/posts/${postId}`,{
        method:"DELETE"
    }).then(res=>{
        if(res.ok){
           location.href="/dashboard"
        } else {
            alert("Cannot Delete. Not your Post")
        }
    })
})