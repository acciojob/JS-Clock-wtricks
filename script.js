let hour = document.querySelector(".hour-hand");
let minute = document.querySelector(".min-hand");
let second = document.querySelector(".second-hand");

let s = 0;
let m = 0;
let h = 0;

// main function
function setClock() {
   // inreament second count.
   s++;

  // if second is reached to 60
  // it's time to make second again 0 and increament minute.
   if (s == 60) {
      s = 0;
      m++;

	// if minute is reached to 60
   // it's time to make minute again 0 and increament hour.
      if (m == 60) {
          m = 0;
          h++;

		  // hour can be maximum 24.
		  // after that make it again 0
          if (h == 24) {
            h = 0;
          }
      }
   }

	// default we need '90deg' transform.
	// second and minutes will go from 0 to 60
	// so make css, 360/60 => 6
   second.style.transform = `rotate(${ s*6 + 90 }deg)`;
   minute.style.transform = `rotate(${ m*6 + 90 }deg)`;

	// for hour 360/24 => 15
   hour.style.transform = `rotate(${ h*15 + 90 }deg)`;
}

// set interval, so we can run 'setClock' function
// after each second we calculate CSS.
setInterval(setClock, 1000);