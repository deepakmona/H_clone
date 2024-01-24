

// start from here slidebar java script code .........................
let currentSlide = 0;
const totalSlides = document.querySelectorAll(".slide").length;

function showSlide(index) {
	const slides = document.querySelector(".slides");
	if (index < 0) {
		currentSlide = totalSlides - 1;
	} else if (index >= totalSlides) {
		currentSlide = 0;
	} else {
		currentSlide = index;
	}
	slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function prevSlide() {
	showSlide(currentSlide - 1);
}

function nextSlide() {
	showSlide(currentSlide + 1);
}

//  its code here end...........

// in resposive web navbar content show off code start from here 

function icon(){
   
    let cont = document.getElementById("cont");
    let icon = document.getElementById("icon");
   
     if(cont.style.display!="none"){
        cont.style.display="none";
     }
     else{
        cont.style.display="block";
        icon.style.display="none";
     }
       
}



// for count function in java script

 // Function to animate counting from 0 to a specified number
 function countAnimation(targetNumber) {
    // Get the element where counting will happen
    const countingElement = document.getElementById('counting');
    
    // Initial count
    let count = 0;

    // Set the interval for counting animation
    const intervalId = setInterval(() => {
      // Update the counting element with the current count
      countingElement.textContent = count;

      // Increase count by 1
      count++;

      // Stop the animation when the target number is reached
      if (count > targetNumber) {
        clearInterval(intervalId);
      }
    },2); // Change the interval duration for faster/slower animation
  }

  // Start the counting animation with the target number (e.g., 700)
  countAnimation(700);
  




  