
function sendMessage() {
    const input = document.getElementById('user-input');
    const chatWindow = document.getElementById('chat-window');
    const message = input.value.toLowerCase().trim();

    let response = "Sorry, I didn't understand that.";
    if (message.includes("quiz")) {
        response = "You can use our Quiz Generator to create quizzes based on your uploaded course outline.";
    } else if (message.includes("plagiarism")) {
        response = "Our Plagiarism Checker helps detect originality in your documents.";
    } else if (message.includes("outline")) {
        response = "Upload your course outline in DOCX or PDF format to analyze learning outcomes.";
    } else if (message.includes("contact")) {
        response = "You can email us at info@alitechgrid.com or call +1-800-123-4567.";
    }

    chatWindow.innerHTML += `<div><b>You:</b> ${input.value}</div>`;
    chatWindow.innerHTML += `<div><b>Bot:</b> ${response}</div>`;
    input.value = '';
}
