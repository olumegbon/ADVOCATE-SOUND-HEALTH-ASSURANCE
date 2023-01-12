let searchable = [


    `PRODUCT NAME:MELOFAN PLUS
    ACTIVE INGREDIENT:ATRESUNATE 200MG, SULPHADOXINE 500MG, PYRIMETHAMINE25MG
     <br>
    NAFDAC REG:B4-7415`,

    `PRODUCT NAME:Promethazine injection 
    ACTIVE INGREDIENT:Promethazine HCL 50MG/2ML
     <br>
    NAFDAC REG:B4-7416`,

    `PRODUCT NAME:SPEDRA 50 
    ACTIVE INGREDIENT:AVANAFIL 50MG
     <br>
    NAFDAC REG:B4-7414`,

    `PRODUCT NAME:FECCOX PIROXICAM 
    ACTIVE INGREDIENT:PIROXICAM 20MG/ML
     <br>
    NAFDAC REG:B4-7413`,

    `PRODUCT NAME:FELMICAM 2 
    ACTIVE INGREDIENT:PIROXICAM USP 20MG
     <br>
    NAFDAC REG:B4-7412`,

  ];
  
  const searchInput = document.getElementById('search');
  const searchWrapper = document.querySelector('.wrapper');
  const resultsWrapper = document.querySelector('.results');
  
  searchInput.addEventListener('keyup', () => {
    let results = [];
    let input = searchInput.value;
    if (input.length) {
      results = searchable.filter((item) => {
        return item.toLowerCase().includes(input.toLowerCase());
        
      });
    }
    renderResults(results);
    
  });
  
  function renderResults(results) {
    if (!results.length) {alert("NOT REGISTERED");
     //return searchWrapper.classList.remove('show');
     
    }
  
    const content = results
      .map((item) => {
        return `<li><div>${item}</div></li>`;
      })
      .join('');
  
    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;

    
  };
  

  //form
function validateForm() {
  //gets the name
  let name = document.getElementById("contact-name").value;
  //gets the email
  let email = document.getElementById("contact-email").value;
  //gets the message
  let message = document.getElementById("contact-message").value;
  let number = document.getElementById("contact-number").value;
  //checks if all fields have been filled before sending message.
  if (name.trim() == "" || email.trim() == "" || message.trim() == "" || Number.trim()=="") 
  {
    alert("all fields must be filled");
  } else {
    sendMessage(name, email, message);
  }

  document.getElementById("send").addEventListener("click", validateForm);

}



// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//highlighgt

 
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home');
    const aboutMenu = document.querySelector('#about');
    const servicesMenu = document.querySelector('#contact-details');
    let scrollPos = window.scrollY;
    window.addEventListener('click', highlightMenu);

   window.addEventListener('scroll', highlightMenu);


}
    // console.log(scrollPos);
  
    // adds 'highlight' class to my menu items
    
 
 
  
