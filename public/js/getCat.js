const getCatBtn = document.querySelector(".new-cat")
let catPicDiv = document.querySelector(".catPic")
let scoreNum = document.querySelector(".score-num")
let commentArea = document.querySelector(".comment-area")

const fetchImage = async ()=>{
  try{
    let catImgURL = await fetch("https://api.thecatapi.com/v1/images/search").then(res => res.json()).then(data => data[0].url)
    return catImgURL

  }catch(err){
    console.log(err) 
  }
}

const loadCatImg = async ()=>{
  try{
    let catImgDiv = document.querySelector('.catPic')
    let catImg = document.createElement("img")
    catImg.src = await fetchImage()
    catImg.style.width = `200px`;
    catImgDiv.append(catImg)
    console.log(catImgDiv.innerHTML)
    localStorage.setItem("savedPic",catImgDiv.innerHTML)
    localStorage.setItem("savedScore", 0)

    scoreNum.innerText = 0;
  } catch (err) {
    console.log(err) 
  }
}

export const getCat = async () => {
  try {
    let savedPic = localStorage.getItem("savedPic")
    if(savedPic){
      catPicDiv.innerHTML=savedPic
    }else{
      await loadCatImg();
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

getCatBtn.addEventListener("click", async ()=>{
  console.log(localStorage)
  catPicDiv.innerHTML=""
  await loadCatImg()
 
  const comments = document.querySelectorAll(".comment-style");
  comments.forEach(comment => comment.remove());

})

// export { getCat }