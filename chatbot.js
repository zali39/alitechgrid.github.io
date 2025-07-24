function toggleChat() {
  const chatWindow = document.getElementById("chat-window");
  chatWindow.style.display = chatWindow.style.display === "none" ? "block" : "none";
}
async function sendMessage() {
  const input = document.getElementById("user-input").value;
  const log = document.getElementById("chat-log");
  log.innerHTML += "<div><b>You:</b> " + input + "</div>";
  const res = await fetch("https://zali39.pythonanywhere.com/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input })
  });
  const data = await res.json();
  log.innerHTML += "<div><b>Bot:</b> " + data.reply + "</div>";
  document.getElementById("user-input").value = "";
}
