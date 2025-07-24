function talk() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const chatbox = document.getElementById("chatbox");
  let reply = "🤔 I'm not sure. Try asking about our services, contact, quote, or pricing.";

  if (input.includes("service")) {
    reply = "🔍 We offer AI for Education, AI for Business, Corporate Training, and Resume Analysis.";
    window.location.hash = "services";
  } else if (input.includes("contact") || input.includes("phone") || input.includes("email")) {
    reply = "📞 You can reach us at contact@alitechgrid.com or +1-800-ALITECH.";
    window.location.hash = "contact";
  } else if (input.includes("quote") || input.includes("price")) {
    reply = "💰 Pricing depends on the service. Contact us directly for a quote.";
  }

  chatbox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
  chatbox.innerHTML += `<p><strong>Bot 🤖:</strong> ${reply}</p>`;
  document.getElementById("userInput").value = "";
}