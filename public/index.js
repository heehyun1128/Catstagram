import { getCat } from "./js/getCat.js"
import voting from "./js/vote.js";
import { addComment, delComment, clearComment } from "./js/manageComment.js";

window.onload = async () => {
  
  voting()
  addComment()
  delComment()
  clearComment()
  getCat()
};




