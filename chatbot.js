document.getElementById("chatbot-icon").addEventListener("click", function () {
    const window = document.getElementById("chat-window");
    window.classList.toggle("hidden");
});

async function sendMessage() {
    const input = document.getElementById("user-input");
    const output = document.getElementById("chat-output");
    const userText = input.value.trim();
    if (!userText) return;

    output.innerHTML += `<div><strong>You:</strong> ${userText}</div>`;
    input.value = "";

    const response = await fetch("https://alitechgrid-chatbot-backend.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText })
    });

    const data = await response.json();
    output.innerHTML += `<div><strong>Bot:</strong> ${data.reply}</div>`;
    output.scrollTop = output.scrollHeight;
}
