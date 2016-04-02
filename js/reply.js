// Need to make reply button work with extra statuses
document.addEventListener("DOMContentLoaded", function() {
// document.addEventListener(function() {    
	var reply = document.querySelectorAll('.button-reply'); // find all elements with reply class
			for (var i = 0; i < reply.length; i++) { // iterates through all reply btns adding event listeners to each
		reply[i].addEventListener('click', function() { // when click is heard do the following:
		var parent = this.closest('.post-status-button-div');  // set target 1 for toggling
		var post = this.parentNode.nextElementSibling; // set target 2 for toggle
		post.toggle(); 
		parent.toggle();
		}, false );
	}
});

