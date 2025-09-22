// Used AI for this code (don't have a full grasp on JavaScript yet)
const hoverTarget = document.getElementById("gradIcon");
const hoverContent = document.getElementById("ucfLogo");

hoverContent.style.opacity = 0;
hoverContent.style.display = "none";
hoverContent.style.transition = `opacity ${400}ms ease`;

// Show on hover
function fadeIn(element){
    element.style.display = "block";

    setTimeout(() => {
        element.style.opacity = 1;
    }, 400);
}

// Hide after hover
function fadeOut(element) {
  element.style.opacity = 0; // fade out
  // after fadeDuration, hide completely
  setTimeout(() => {
    if (element.style.opacity == minOpacity) {
      element.style.display = "none";
    }
  }, 400);
}

hoverTarget.addEventListener("mouseenter", () => fadeIn(hoverContent));
hoverTarget.addEventListener("mouseleave", () => fadeOut(hoverContent));