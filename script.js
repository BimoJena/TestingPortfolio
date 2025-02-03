
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navOptions ul li a");
    const skillsContainer = document.querySelector(".skillsMainContainer");
    const skillBoxes = document.querySelectorAll("#skills .box");
    const projectBoxes = document.querySelectorAll("#projects .box");
    const circles = document.querySelectorAll(".circle");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupInstitute = document.getElementById("popup-institute");
    const popupYear = document.getElementById("popup-year");
    const popupMarks = document.getElementById("popup-marks");
    const closePopup = document.querySelector(".close");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll to the target section smoothly
            targetSection.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });

            // Show the skills boxes only when the "Skills" section is clicked
            if (targetId === "skills") {
                setTimeout(() => {
                    skillsContainer.classList.add("active");
                }, 500); // Delay ensures smooth appearance
            } else {
                skillsContainer.classList.remove("active");
            }
            if (targetId === "projects") {
                setTimeout(() => {
                    projectBoxes.forEach(box => box.style.opacity = 1); // Make project boxes visible
                }, 500);
            } else {
                projectBoxes.forEach(box => box.style.opacity = 0); // Hide project boxes
            }
            


            // skillcontent btn and p tag

            // [...skillBoxes, ...projectBoxes].forEach(box => {
            //     const boxP = box.querySelector("p");
            //     const btnA = box.querySelector("a");
        
            //     box.addEventListener("mouseover", function () {
            //         boxP.style.fontSize = "25px";
            //         btnA.style.backgroundColor = "#fff";
            //         btnA.style.color = "#000";
            //         boxP.style.transition = "all 0.2s ease";
            //         btnA.style.transition = "all 0.2s ease";
            //     });
        
            //     box.addEventListener("mouseleave", function () {
            //         boxP.style.fontSize = "";
            //         btnA.style.backgroundColor = "";
            //         btnA.style.color = "";
            //     });
            // });

            
            circles.forEach(circle => {
                circle.addEventListener("click", function () {
                    popupTitle.innerText = this.getAttribute("data-title");
                    popupInstitute.innerText = this.getAttribute("data-institute");
                    popupYear.innerText = this.getAttribute("data-year");
                    popupMarks.innerText = this.getAttribute("data-marks");
            
                    popup.style.transition = "opacity 0.2s ease"; 
                    popup.style.visibility = "visible"; // Ensure visibility
                    popup.style.opacity = "0"; // Start at 0 to trigger transition
            
                    setTimeout(() => {
                        popup.style.opacity = "1"; // Gradually fade in
                    }, 10);
                });
            });
            
            // Close popup function
            closePopup.addEventListener("click", function () {
                popup.style.opacity = "0"; // Fade out
            
                setTimeout(() => {
                    popup.style.visibility = "hidden"; // Hide after transition
                }, 200); // Match transition duration
            });

            










        });
    });
});


