from flask import Flask, jsonify, request
app = Flask(__name__)

@app.route("/api/chat", methods=["POST"])
def chat():
    user_msg = request.json.get("message", "").lower()
    if "service" in user_msg:
        return jsonify(reply="We offer AI for Education, AI for Business, Corporate Training, and Resume Analysis.")
    elif "contact" in user_msg:
        return jsonify(reply="You can reach us at contact@alitechgrid.com or +1-800-ALITECH.")
    elif "quote" in user_msg or "price" in user_msg:
        return jsonify(reply="Pricing depends on the service. Contact us for a quote.")
    return jsonify(reply="I'm not sure. Try asking about our services, contact, quote, or pricing.")
    
if __name__ == "__main__":
    app.run()