let tablinks = document.getElementsByClassName('tab-links');
let tabcontent = document.getElementsByClassName('tab-content');


// Function to open a tab
function opentab(tabname) {//tabname is a argument that is passed to the function, it is the id of the tab that we want to open
    // Remove active class from all tab links and tab content
    for(tablinks of tablinks){
        tablinks.classList.remove('active-links');
    }
    for(tabcontent of tabcontent){
        tabcontent.classList.remove('active-tab');
    }
   event.currentTarget.classList.add('active-links'); // Add active class to the clicked tab link
    document.getElementById(tabname).classList.add('active-tab'); // Show the corresponding tab content
 }

 //send data to Google Sheets using Google Apps Script width conact form 
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyLqFJQ4HozLWKcn-kN3C3xu7KXdlI2tH6NtjGyudxSwHKUGDlkyr0cDrgSOtp3CAHD/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')
  // When the form is submitted, prevent the default action and send the data to Google Sheets

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML= 'Message submitted successfully'

        setTimeout(function(){
          msg.innerHTML = ''
        }, 2000) // Clear the message after 5 seconds
        form.reset() // Reset the form fields
      })
      .catch(error => console.error('Error!', error.message))
  })
