const postId = window.location.href.split('/').pop();


document.getElementById("addcomment").addEventListener("click",e=>{
    e.preventDefault();
    const loginObj = {
        comment:document.querySelector("#comment-input").value,
        PostId:postId
    }
    console.log(loginObj)
    fetch(`/api/comments/`,{
        method:"POST",
        body:JSON.stringify(loginObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.href = location.href;
        } else {
            alert("Something went wrong")
        }
    })
})