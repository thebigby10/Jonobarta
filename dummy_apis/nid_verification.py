user_data = [
    {
        "name": "Arham Apon Utsho",
        "nid": "4444444444",
        "image_url": "https://example.com/image.jpg"
    },
    {
        "name": "Riyad Hosen",
        "nid": "3333333333",
        "image_url": "https://example.com/image.jpg"
    },
    {
        "name": "Md. Abidur Rahman",
        "nid": "2222222222",
        "image_url": "https://example.com/image.jpg"
    },
    {
        "name": "Arham Ibrahim",
        "nid": "1111111111",
        "image_url": "https://example.com/image.jpg"
    },

]

def userExists(nid, name, image_url):
    for user in user_data:
        if user['nid'] == nid and user['name'].lower() == name.lower() and matchFace(user['image_url'], image_url):
            return True
    return False

def matchFace(image_url1, image_url2):
    # TODO: Implement face matching algorithm
    return True



from flask import Flask, jsonify, request

# Initialize the Flask app
app = Flask(__name__)

# Define a route for a simple GET request
@app.route('/verify', methods=['GET'])
def hello():
    data = request.get_json()
    name = data.get('name')
    nid = data.get('nid')
    image_url = data.get('image_url')

    if(userExists(nid, name, image_url)):
        return jsonify({"message": "OK"}),200
    else:
        return jsonify({"message": "User not found"}),404


# Run the app
if __name__ == '__main__':
    app.run(debug=True)
