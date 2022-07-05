const form  = document.getElementById('registration');

// logic for popup message box that will display after clicking on the submit button
// slightly modified bulma variant
document.addEventListener('DOMContentLoaded', () => {    
    // Functions to open and close a modal
    function openModal($el) {           
        $el.classList.add('is-active');        
    }
  
    function closeModal($el) {
        $el.classList.remove('is-active');     
    }
  
    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);
        
        $trigger.addEventListener('click', () => {
            if(haveValues()) {
                openModal($target);
            }              
        });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');
    
        $close.addEventListener('click', () => {
            closeModal($target);            
            form.submit(); 
        });
    });
    
      // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        const e = event || window.event;
    
        if (e.keyCode === 27) { // Escape key
          closeAllModals();
        }
    });
});

// empty field validation
function haveValues() {    
    const email = document.getElementById('email').value
    const name = document.getElementById('name').value
    const itn = document.getElementById('ITN').value
    const city = document.getElementById('city').value
    const street = document.getElementById('street').value
    const building = document.getElementById('building').value
    const other = document.getElementById('other').value

    var reqFields = [email, name, itn, city, street, building]
    var checkboxes = document.getElementsByName('activity');

    for (var field of reqFields) {
        if (!field){
            return false;
        }
    }
    for (var checkbox of checkboxes)
    {
        if (checkbox.checked) {
            return true
        }
    }
    if (!other) return false;
    else return true;
}