function calculateTrees() {
  var forestAreainput=document.getElementById("forestAreaId").value;
  const forestmultiplier=2000;
  document.getElementById("result").innerHTML=forestAreainput * forestmultiplier;
}