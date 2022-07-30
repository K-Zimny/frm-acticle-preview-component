const socialBtn = document.querySelector(".share-btn");
const socialShare = document.querySelector(".share");
const socialShareMobile = document.querySelector(".share-mobile");

// --------------------------------------------------------------------
// Share BTN Code Set Media breakpoint
// --------------------------------------------------------------------

const mediaQuery = window.matchMedia("(min-width: 640px)");

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log("Tablet and Desktop Media Query");

    // --------------------------------------------------------------------
    // Share BTN Tablet and Desktop Media Query
    // --------------------------------------------------------------------
    socialBtn.addEventListener("click", function () {
      if (socialShare.classList.contains("hidden")) {
        socialShare.classList.remove("hidden");
      } else {
        socialShare.classList.add("hidden");
      }
    });
  } else {
    console.log("Mobile Media Query");

    // --------------------------------------------------------------------
    // Share BTN Mobile Media Query
    // --------------------------------------------------------------------

    socialBtn.addEventListener("click", function () {
      if (socialShareMobile.classList.contains("hidden")) {
        socialShareMobile.classList.remove("hidden");
      } else {
        socialShareMobile.classList.add("hidden");
      }
    });
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);
