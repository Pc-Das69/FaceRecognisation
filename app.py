from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/identify', methods=['POST'])
def identify():
    # This is where you would implement the identification logic
    # For demonstration purposes, I'll just return a dummy result
    result = "Chapri identified!"
    return result

if __name__ == '__main__':
    app.run(debug=True)
