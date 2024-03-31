document.getElementById("resumeLink").addEventListener("click", function(event) {
  event.preventDefault();

  var resumeUrl = "assets/Erik'sResume.pdf"; 


  var link = document.createElement("a");

 
  link.href = resumeUrl;

  link.target = "_blank";


  link.click();
});
