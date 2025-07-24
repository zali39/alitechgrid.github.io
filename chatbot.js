
document.getElementById("chatbot-icon").addEventListener("click", () => {
  const chatWindow = document.getElementById("chat-window");
  chatWindow.style.display = chatWindow.style.display === "none" ? "block" : "none";
});

function sendMessage() {
  const input = document.getElementById("chat-input");
  const log = document.getElementById("chat-log");
  const message = input.value.trim();
  if (!message) return;
  log.innerHTML += "<div><b>You:</b> " + message + "</div>";
  input.value = "";

  let response = "🤖 Sorry, I didn't understand that. Try asking about services, pricing, or contact.";
  if (message.toLowerCase().includes("quiz")) response = "🧠 Quiz Generator: You can upload a course outline to generate quizzes automatically.";
  if (message.toLowerCase().includes("plagiarism")) response = "🕵️ Plagiarism Checker: Upload your project to verify originality.";
  if (message.toLowerCase().includes("contact")) response = "📧 Email us at info@alitechgrid.com or call +1-800-123-4567.";
  if (message.toLowerCase().includes("course")) response = "📂 Course Analyzer: Upload DOCX/PDF files for auto analysis and assessment creation.";

  log.innerHTML += "<div><b>Bot:</b> " + response + "</div>";
}
