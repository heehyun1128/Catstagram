const voting = () => {
  const upvoteBtn = document.querySelector(".upvote")
  const downvoteBtn = document.querySelector(".downvote")
  let scoreNum = document.querySelector(".score-num")

  let savedScore = localStorage.getItem("savedScore")

  // let score = +localStorage.getItem("savedScore")
  scoreNum.innerText = savedScore

  const upvote = () => {
    let score = +localStorage.getItem("savedScore")
    console.log(typeof score)
    score++
    scoreNum.innerText = score
    // console.log(scoreNum)
    localStorage.setItem("savedScore", score)
  }
  const downvote = () => {
    let score = +localStorage.getItem("savedScore")
    score--;
    scoreNum.innerText = score;
    localStorage.setItem("savedScore", score)
  }
  upvoteBtn.addEventListener("click", () => {
    // console.log(score)
    // if (score === 0) {
    //   downvoteBtn.disabled = false
    // }
    upvote()
  })

  downvoteBtn.addEventListener("click", () => {
    // if (score > 0) {

    downvote()
    // } else {
    // downvoteBtn.disabled = true
    // }

  })


  // getCatBtn.onclick = () => {

  //   localStorage.setItem("savedScore", 0)
  //   console.log("clicked")
  //   scoreNum.innerText=0
  //   score = 0
  // }

}







export default voting