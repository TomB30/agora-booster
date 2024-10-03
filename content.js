function removeAds() {
  // Remove ads
  const ads = document.querySelectorAll("[id=adcontainer1]");
  ads.forEach((ad) => ad.remove());

  const innerAds = document.querySelectorAll(".innerAd");
  innerAds.forEach((ad) => ad.remove());

  const googleAds = document.querySelectorAll(".adsbygoogle");
  googleAds.forEach((ad) => ad.remove());
}

function openRows(){
  const rows = document.querySelectorAll('.objectsTitleTr');
  rows.forEach((row) => {
    row.click();
  });
}

function observeDOMChanges() {
  const targetNode = document.body; // Observe the entire body or a specific container
  const config = { childList: true, subtree: true, characterData: true };

  const observer = new MutationObserver((mutationsList, observer) => {
    removeAds();
  });

  observer.observe(targetNode, config); // Start observing
}

function runScript() {
  removeAds(); // Remove ads from the initial page load
  openRows();
  observeDOMChanges(); // Start observing for future changes
}

// Check if the document is already loaded
if (document.readyState === "loading") {
  // DOM hasn't loaded yet, wait for DOMContentLoaded
  document.addEventListener("DOMContentLoaded", function () {
    runScript();
  });
} else {
  // DOM is already loaded, run the script immediately
  runScript();
}
