// logOut
document.getElementById('log-out').addEventListener('click', function () {
  window.location.href = './index.html';
});

// Show add money
document.getElementById('button-one').addEventListener('click', function () {
  document.getElementById('add-mony-section').classList.remove('hidden');
  document.getElementById('cashout-section').classList.add('hidden');
  document.getElementById('default-pic').classList.add('hidden');
  document.getElementById('coming-soon').classList.add('hidden');
});
// Show cashout
document.getElementById('button-two').addEventListener('click', function () {
  document.getElementById('cashout-section').classList.remove('hidden');
  document.getElementById('add-mony-section').classList.add('hidden');
  document.getElementById('default-pic').classList.add('hidden');
  document.getElementById('coming-soon').classList.add('hidden');
});
// Show working in progres button 3
document.getElementById('button-three').addEventListener('click', function () {
  document.getElementById('coming-soon').classList.remove('hidden');
  document.getElementById('add-mony-section').classList.add('hidden');
  document.getElementById('cashout-section').classList.add('hidden');
  document.getElementById('default-pic').classList.add('hidden');
});
// Show working in progres button 4
document.getElementById('button-four').addEventListener('click', function () {
  document.getElementById('coming-soon').classList.remove('hidden');
  document.getElementById('add-mony-section').classList.add('hidden');
  document.getElementById('cashout-section').classList.add('hidden');
  document.getElementById('default-pic').classList.add('hidden');
});

// Show working in progres button 5
document.getElementById('button-five').addEventListener('click', function () {
  document.getElementById('coming-soon').classList.remove('hidden');
  document.getElementById('add-mony-section').classList.add('hidden');
  document.getElementById('cashout-section').classList.add('hidden');
  document.getElementById('default-pic').classList.add('hidden');
});

// Show working in progres button 6
document.getElementById('button-six').addEventListener('click', function () {
  document.getElementById('coming-soon').classList.remove('hidden');
  document.getElementById('add-mony-section').classList.add('hidden');
  document.getElementById('cashout-section').classList.add('hidden');
  document.getElementById('default-pic').classList.add('hidden');
});
