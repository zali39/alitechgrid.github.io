const chatbotIcon = document.getElementById("chatbot-icon");
const chatbox = document.getElementById("chatbox");
const chatlog = document.getElementById("chatlog");

chatbotIcon.onclick = () => {
  chatbox.classList.toggle("hidden");
};

function sendMessage() {
  const input = document.getElementById("userInput");
  const userText = input.value.trim();
  if (!userText) return;

  appendMessage("You", userText);
  input.value = "";

  setTimeout(() => {
    const botReply = getBotReply(userText.toLowerCase());
    appendMessage("Bot 🤖", botReply);
  }, 500);
}

function appendMessage(sender, message) {
  chatlog.innerHTML += `<p><strong>${sender}:</strong> ${message}</p>`;
  chatlog.scrollTop = chatlog.scrollHeight;
}

function getBotReply(text) {
  if (text.includes("education")) return "🎓 AI for Education includes quizzes, labs, dashboards, plagiarism checks, and more.";
  if (text.includes("business")) return "📈 AI for Business means content generation, analytics, chatbots, and cloud solutions.";
  if (text.includes("training")) return "👨‍🏫 Corporate training covers ethical AI, deployment, LMS integration, and Python/cloud upskilling.";
  if (text.includes("resume")) return "📝 Our resume analyzer builds tailored CVs using Canadian best practices.";
  if (text.includes("quote")) return "💼 You can request a demo or quote via our contact form.";
  if (text.includes("contact")) return "📬 Please reach out via the form at the bottom or email us at support@alitechgrid.com";
  if (text.includes("price")) return "💲 Pricing depends on the service and scale. We offer institutional discounts!";
  if (text.includes("quality")) return "✅ We maintain high standards with regular audits, AI detection tools, and instructor feedback.";
  if (text.includes("suggestion")) return "💡 We're always open to ideas. Share your suggestions in the contact form!";
  return "🤔 I'm not sure. Try asking about our services, contact, quote, or pricing.";
}