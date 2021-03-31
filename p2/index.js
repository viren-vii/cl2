var nameRef;
window.onload = function(){
    nameRef = document.getElementById("name");
}
function check(){
    alert("Form Submission for "+nameRef.value+" initiated!");
}