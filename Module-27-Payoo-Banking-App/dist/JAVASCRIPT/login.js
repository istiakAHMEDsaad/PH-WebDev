// Login button
// Step 1 event handler
document
  .getElementById('login-button')
  .addEventListener('click', function (event) {
    // Step 2 prevent default behavior(reloading browser)
    event.preventDefault();
    console.log('login button is clicked');

    const getNumber = document.getElementById('mobile-input').value;
    const getPin = document.getElementById('pin-input').value;
    if((getNumber === '0123456789') && (getPin === '1234')){
        window.location.href = './home.html';
    }else{
        alert('Temp mobile number: 0123456789\nTemp pin: 1234');
    }
  });
