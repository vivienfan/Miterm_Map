// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });

$(document).ready(function() {

  $( ".login_show" ).click(function() {
      show_login();
  });

  $( ".register_show" ).click(function() {
      show_register();
  });


//   $(function(){
//     $('#loginform').submit(function(e){
//       return false;
//     });
//
//   $('#modaltrigger').leanModal({ top: 110, overlay: 0.45, closeButton: ".hidemodal" });
// });
// $("#demo01").animatedModal();

  function show_login() {
	   el = document.getElementById("overlaylogin");
	    el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
    }

  function show_register() {
    el = document.getElementById("overlayregister");
  	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
  }


  });
// Get the modal
// var modal = document.getElementById('myModal');
//
// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
//
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
//
// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }
//
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
