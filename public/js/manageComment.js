
// let selectedComment
let commentArea=document.querySelector(".comment-area")
let savedComments= JSON.parse(localStorage.getItem("savedComments"))
let commentInput = document.querySelector(".comment-text")
let commentArr = savedComments?savedComments.slice():[]

console.log(commentArr)

let catPic = document.querySelector(".catPic")

if (savedComments){
  savedComments.forEach(savedComment=>{
   
    let savedCommentDiv = document.createElement("div")
    let savedCommentTxt = savedComment

    savedCommentDiv.classList.add("comment-style")
    savedCommentDiv.innerText = savedCommentTxt
    if (savedCommentTxt.trim() !== "") {

      commentArea.appendChild(savedCommentDiv)

    }
   
  })
 
}

const addComment = () =>{
  const submitBtn = document.querySelector(".comment-submit-btn")

  submitBtn.onclick=()=>{
    savedComments = JSON.parse(localStorage.getItem("savedComments"))
    
    commentArr = savedComments ? savedComments.slice() : []
    let commentDiv = document.createElement("div")
    let commentTxt = commentInput.value
   
    commentDiv.classList.add("comment-style")
    commentDiv.innerText=commentTxt

    if(commentTxt.trim()!==""){
      commentArea.appendChild(commentDiv)
    }
    commentInput.value =" "

   
    commentArr.push(commentTxt)
    // console.log(commentArr)

    localStorage.setItem("savedComments", JSON.stringify(commentArr))
    
  }
}

  
commentArea.onclick = (e)=>{
  
    let commentDiv = e.target
    commentDiv.classList.toggle("select-comment");
  
}
let restArr = []
const delComment = ()=>{
  const delBtn = document.querySelector(".comment-delete-btn")
 
  delBtn.onclick=()=>{

    const selectedComment = commentArea.querySelectorAll(".select-comment")
    selectedComment.forEach(ele=>ele.remove())
   
    const restComments = commentArea.querySelectorAll("div:not(.select-comment)")
    restArr = []
    console.log(restArr)
    for(let i=0;i<restComments.length;i++){
      restArr.push(restComments[i].innerText)
    }
    localStorage.setItem("savedComments", JSON.stringify(restArr))
  }
// console.log("Hi")
}


const clearComment = ()=>{
  const clearBtn = document.querySelector(".comment-clear-btn")
  clearBtn.onclick=()=>{
    const comments = document.querySelectorAll(".comment-style")
    comments.forEach(comment=>comment.remove())
    localStorage.removeItem("savedComments")
  }
}

catPic.onChange = () => {
  localStorage.removeItem("savedComments")
}
export {addComment,delComment,clearComment}