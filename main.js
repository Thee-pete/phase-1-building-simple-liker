// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likeButtons = document.querySelectorAll('span.like-glyph')
let errorModal = document.getElementById('modal');

likeButtons.forEach(likeButton => {
  likeButton.addEventListener('click', () =>{

    mimicServerCall()
    .then(() => {
      switch (likeButton.className) {
        case 'like-glyph':
          likeButton.className = 'activated-heart'
         
          break;
        case 'activated-heart':
          likeButton.className = 'like-gylph'
          break;
        
      }
  
    })
    .catch((e) => {
      errorModal.className = '';
      errorModal.querySelector('p').textContent = e.message;
      setTimeout(hideModal, 3000)
      
    })

  })
})

function hideModal() {
  errorModal.className = "hidden"
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
