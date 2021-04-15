
const selectArea = document.querySelectorAll(".select-content"); //selects all the elements within that specific class                                                  
const theButton = document.querySelector(".button"); // selects the button element which is hidden by default
const dialogBox = document.querySelector(".dialog-box") ; // selects the textarea which is hidden by default                        
const addButton = document.querySelector(".addButton") ;
let textArray = [] ;
let uid , selectedText , addedText ;

// for each child element within the select-content class add a mouseup event listener
selectArea.forEach((element) => {
        
        if(element.tagName !== "BUTTON" || element.tagName !== "TEXTAREA" ){
            element.addEventListener("mouseup", loggerFunction , false);
        }
       
});


// this function handles the functionality on mouseup event
function loggerFunction(e) {
    // console.log(e.target.className) ;
    setTimeout(() => {  //settimeout set to zero so the selected text is deselected if the user again clicks on it

      const text = window.getSelection().toString().trim(); //get the selected text using the getSelection method
    // console.log(text) ;
      
        if(text.length > 0){
          theButton.style.display = "block" ;
        
        const x = e.clientX ; //x coordinates of the pointer where the mouseup event was triggered
        const y = e.clientY ; // y coordinates of the pointer where the mouseup event was triggered
          
    
          theButton.style.left = `${x-20}px` ;
          theButton.style.top = `${y+20}px` ;


    
      }
    },0)
  
}


 document.addEventListener("mousedown" , buttonHider); 


function buttonHider(e){     // event handler for mouse down event
    // console.log(e.target.nodeName) ;
     if(getComputedStyle(theButton).display === "block" && e.target.nodeName !=="BUTTON" 
        && e.target.nodeName !== "TEXTAREA"){
        theButton.style.display = "none" ;
        dialogBox.style.display = "none" ;
        window.getSelection().empty ;
    }
}

theButton.addEventListener("click" , thebuttonClick) ;

function thebuttonClick(e){
    
  selectedText = window.getSelection().toString().trim() ;
   uid= new Date ;
   document.getElementById("myTextArea").value = ''
    dialogBox.style.display = "block" ;
    const x = e.clientX ;
    const y = e.clientY ;
    dialogBox.style.left = `${x - 20}px` ;
    dialogBox.style.top = `${y+25}px` ;
   
}


addButton.addEventListener("click" , handleAddButton) ;

function handleAddButton (e){
  addedText = document.getElementById("myTextArea").value
  let obj = {
    uid: uid ,
    selectedText: selectedText,
    addedText: addedText
  }

  textArray.push(obj) ;

  dialogBox.style.display = "none" ;
  theButton.style.display = "none" ;

  console.log(textArray) ;

}