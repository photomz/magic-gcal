import { createApp } from "vue";
import App from "./App.vue";

console.log("Cal: Hello from content.js!");

// Function to inject a new div into the Google Calendar DOM
function injectAppDiv() {
  const appDiv = document.createElement("div");
  appDiv.setAttribute("id", "vue-app-container");
  const parent = document.querySelector(".dwlvNd.Hrn1mc");

  // Set the display style to flex to make it horizontal
  parent.style.display = "flex";
  parent.style.flexDirection = "row";

  parent.appendChild(appDiv);
  return appDiv;
}

// Wait for the DOM to fully load and for the specific element to exist before injecting the button
function waitForElementAndInject() {
  if (
    document.readyState === "complete" &&
    document.querySelector(".dwlvNd.Hrn1mc")
  ) {
    console.log("Cal: Element found, injecting button");
    const appContainer = injectAppDiv();
    createApp(App).mount("#vue-app-container");
  } else {
    // Use setTimeout to periodically check the condition
    console.log("Cal: Element not found, waiting");
    setTimeout(waitForElementAndInject, 500);
  }
}

// Start the waiting process
try {
  waitForElementAndInject();
} catch (error) {
  console.error("Cal error: ", error);
}
