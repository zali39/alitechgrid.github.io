const chatbotIcon = document.getElementById('chatbot-icon');
const chatbox = document.getElementById('chatbox');
const chatlog = document.getElementById('chatlog');
const userInput = document.getElementById('userInput');

chatbotIcon.onclick = () => {
  chatbox.classList.toggle('hidden');
};

function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;
  appendMessage("You", message);
  userInput.value = "";

  let reply = "I'm not sure how to respond to that.";
  const lower = message.toLowerCase();

  if (lower.includes("service")) {
    reply = "We offer AI education, cloud consulting, and cybersecurity services.";
    scrollToSection("services");
  } else if (lower.includes("price") || lower.includes("cost")) {
    reply = "We provide custom pricing based on your needs.";
    scrollToSection("pricing");
  } else if (lower.includes("quote")) {
    reply = "You can get a quote through the inquiry form or here in chat.";
    scrollToSection("quote");
  } else if (lower.includes("contact") || lower.includes("email")) {
    reply = "You can contact us at info@alitechgrid.com or call +1-800-123-4567.";
    scrollToSection("contact");
  } else if (lower.includes("hello") || lower.includes("hi")) {
    reply = "👋 Hello! How can I help you today?";
  }

  appendMessage("Bot", reply);
}

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatlog.appendChild(msg);
  chatlog.scrollTop = chatlog.scrollHeight;
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
