const notification = document.querySelector(".notification");

if (notification) {
  const messages = [
    "3 new drops",
    "Soft life deals live",
    "Bundle bonus unlocked",
  ];
  let index = 0;
  setInterval(() => {
    index = (index + 1) % messages.length;
    notification.querySelector("strong").textContent = messages[index];
  }, 3500);
}
