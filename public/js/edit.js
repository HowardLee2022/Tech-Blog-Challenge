//this is to find the ID 
const postId = window.location.href.split('/').pop()


// on button click it will update the post with the value of the text area and input.
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
// on button click it will fetch a DELETE request and delete the post 
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