// Add money
document
  .getElementById('add-mony-button')
  .addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('Button clicked');
    // get money and pin
    const checkPin = document.getElementById('pin-input').value;
    const addMoney = document.getElementById('add-money-input').value;
    const presentMoney = document.getElementById('present-money').innerText;

    const checkMoneyFloat = parseFloat(addMoney.replace(/[^0-9.-]+/g, ''));
    const presentMoneyFloat = parseFloat(
      presentMoney.replace(/[^0-9.-]+/g, '')
    );
    if (checkPin === '1234') {
      // console.log(`input money ${typeof parseInt(addMoney)} \nold balance ${typeof parseInt(presentMoney)}`);
      const newBalance = checkMoneyFloat + presentMoneyFloat;
      document.getElementById(
        'present-money'
      ).innerText = `$${newBalance.toFixed(2)}`;
    } else {
      alert('Default pin😀: 1234');
    }
  });

// Cashout
document
  .getElementById('cashout-button')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const cashoutPin = document.getElementById('cashout-pin').value;

    const cashoutInput = document.getElementById('cashout-input').value;
    const presentMoney = document.getElementById('present-money').innerText;

    const cashoutInputFloat = parseFloat(
      cashoutInput.replace(/[^0-9.-]+/g, '')
    );
    const presentMoneyFloat = parseFloat(
      presentMoney.replace(/[^0-9.-]+/g, '')
    );

    if (cashoutPin === '1234') {
      const newBalance = presentMoneyFloat - cashoutInputFloat;

      document.getElementById(
        'present-money'
      ).innerText = `$${newBalance.toFixed(2)}`;
    } else {
      alert('Default pin😀: 1234');
    }
  });
