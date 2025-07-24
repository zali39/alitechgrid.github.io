
document.getElementById("chatbot-icon").onclick = function () {
  const chatWindow = document.getElementById("chat-window");
  chatWindow.classList.toggle("hidden");
};

const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");

const faq = {
  "services": "We offer AI development, cloud integration, training, automation, and Python projects.",
  "price": "Pricing depends on your project. Please email us at john@alitechgrid.com for a detailed quote.",
  "quote": "Sure! Please scroll down to our quote request section or email john@alitechgrid.com.",
  "contact": "You can reach us via john@alitechgrid.com or call +1-604-123-4567.",
  "appointment": "Please email or use the quote form to schedule an appointment.",
  "ai tools": "We use GPT-based APIs, cloud AI, and LLMs to build smart solutions.",
  "support": "We provide ongoing support, maintenance, and upgrades for all clients."
};

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const message = userInput.value.toLowerCase();
    chatLog.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
    userInput.value = "";

    let reply = "I'm not sure how to answer that. Please try asking something else or contact us directly.";

    if (message.includes("service")) {
      reply = faq["services"];
      scrollToSection("services");
    } else if (message.includes("price")) {
      reply = faq["price"];
      scrollToSection("pricing");
    } else if (message.includes("quote") || message.includes("appointment")) {
      reply = faq["quote"];
      scrollToSection("quote-form");
    } else if (message.includes("contact") || message.includes("email") || message.includes("phone")) {
      reply = faq["contact"];
      scrollToSection("contact");
    } else if (message.includes("ai tool") || message.includes("technology")) {
      reply = faq["ai tools"];
    } else if (message.includes("support") || message.includes("help")) {
      reply = faq["support"];
    }

    chatLog.innerHTML += `<div><strong>Bot:</strong> 🤖 ${reply}</div>`;
    chatLog.scrollTop = chatLog.scrollHeight;
  }
});
