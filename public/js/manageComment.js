
// let selectedComment
let commentArea=document.querySelector(".comment-area")
let savedComments=localStorage.getItem("savedComments")
let catPic = document.querySelector(".catPic")

if (savedComments){
  commentArea.innerHTML=savedComments
}
let commentInput = document.querySelector(".comment-text")
const addComment = () =>{
  const submitBtn = document.querySelector(".comment-submit-btn")

  submitBtn.onclick=()=>{

    let commentDiv = document.createElement("div")
    let commentTxt = commentInput.value
   
    commentDiv.classList.add("comment-style")
    commentDiv.innerText=commentTxt
    if(commentTxt.trim()!==""){

      commentArea.appendChild(commentDiv)
      
    }
    commentInput.value =" "
    localStorage.setItem("savedComments", commentArea.innerHTML)
    
  }
}

  
commentArea.onclick = (e)=>{
  
    let commentDiv = e.target
    commentDiv.classList.toggle("select-comment");
  
}

const delComment = ()=>{
  const delBtn = document.querySelector(".comment-delete-btn")
 
  delBtn.onclick=()=>{
    const selectedComment = commentArea.querySelectorAll(".select-comment")
    selectedComment.forEach(ele=>ele.remove())
    localStorage.setItem("savedComments", commentArea.innerHTML)
  }
// console.log("Hi")
}


const clearComment = ()=>{
  const clearBtn = document.querySelector(".comment-clear-btn")
  clearBtn.onclick=()=>{
    const comments = document.querySelectorAll(".comment-style")
    comments.forEach(comment=>comment.remove())
    localStorage.setItem("savedComments", commentArea.innerHTML)
  }
}

catPic.onChange = () => {
  localStorage.setItem("savedComments", "")
}
export {addComment,delComment,clearComment}