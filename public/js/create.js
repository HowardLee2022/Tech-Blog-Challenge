document.querySelector("#new-blogpost").addEventListener("submit",e=>{
    e.preventDefault();
    const blogobj = {
        title:document.querySelector("#title-input").value,
        description:document.querySelector("#blog-input").value
    }
  
    fetch("/api/posts",{
        method:"POST",
        body:JSON.stringify(blogobj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.href="/dashboard"
        } else {
            alert("trumpet sound")
        }
    })
})