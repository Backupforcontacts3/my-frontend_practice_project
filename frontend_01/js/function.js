    window.onscroll = function () {myFunction()};

    var header = document.getElementById("header");
    var fixed = document.getElementById("header");
    var sticky = fixed.offsetHeight;


    function myFunction() {
			if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    header.classList.add("background-change");
			} else {
        header.classList.remove("sticky");
    header.classList.remove("background-change");
			}
		}

    // counter styling
// header hover

// Get all the links in the navigation
var navLinks = document.querySelectorAll('.navigation a');

// Loop through the links and add a click event listener to each
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        // Remove the 'active' class from all links
        navLinks.forEach(function (link) {
            link.classList.remove('active');
        });

        // Add the 'active' class to the clicked link
        this.classList.add('active');
    });
});

// header a hover
document.addEventListener("DOMContentLoaded", function () {
    var counters = document.querySelectorAll('.counter-value');
    var speed = 200; // Adjust the speed of the counter

    // Function to run the counter
    function runCounter(counter) {
        var target = +counter.getAttribute('data-count');
        var count = 0;

        // Increment function
        var increment = target / speed;

        // Update counter function
        var updateCount = function () {
            count += increment;
            if (count < target) {
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    }

    // Intersection Observer to detect when section is in view
    var options = {
        threshold: 0.5 // Trigger when 50% of the section is visible
    };

    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                runCounter(entry.target);
                observer.unobserve(entry.target); // Unobserve once the counter has started
            }
        });
    }, options);

    // Observe each counter
    counters.forEach(function (counter) {
        observer.observe(counter);
    });
});

    // map js

    document.getElementById("map").onclick = function () {
			var infoDiv = document.getElementById("infoDiv");
    if (infoDiv.style.display === "none") {
        infoDiv.style.display = "block";
			} else {
        infoDiv.style.display = "none";
			}
		};

    //accordion programing
    var acc = document.getElementsByClassName("accordion-header");

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            var panel = this.nextElementSibling;

            // Close other panels
            for (var j = 0; j < acc.length; j++) {
                if (acc[j] !== this) {
                    acc[j].classList.remove("active");
                    acc[j].nextElementSibling.style.display = "none";
                }
            }

            console.log(this);

            if (panel.style.display === "block") {
                this.classList.remove("active");
                panel.style.display = "none";
            } else {
                this.classList.add("active");
                panel.style.display = "block";
            }
        });
		}

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

    function openNav() {
        document.getElementById('navbar').style.left = "0";
    }

    function closeNav() {
        document.getElementById('navbar').style.left = "-300px";
    }

    document.getElementById('cross-icon').addEventListener('click', function () {
        document.getElementById('navbar').classList.remove('open');
    });

    




