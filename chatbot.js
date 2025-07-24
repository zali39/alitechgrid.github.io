
async function sendMessage() {
    const input = document.getElementById("user-input");
    const chatlog = document.getElementById("chatlog");
    const message = input.value;
    if (!message) return;
    chatlog.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
    input.value = "";

    const response = await fetch("https://alitechgrid-chatbot-backend.onrender.com/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
    });
    const data = await response.json();
    chatlog.innerHTML += `<div><strong>Bot:</strong> ${data.reply}</div>`;
    chatlog.scrollTop = chatlog.scrollHeight;
}

function toggleChat() {
    const chatbox = document.getElementById("chatbox");
    chatbox.style.display = chatbox.style.display === "none" ? "block" : "none";
}
