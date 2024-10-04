function a() {
  console.log('a1');
  b();
  console.log('a2');
}
function b() {
  console.log('b1');
  c();
  console.log('b2');
}
function c() {
  console.log('c1');
  console.log('c2');
}

a();
