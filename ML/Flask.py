from flask import Flask, request, jsonify
from ObjIdentifier import ObjIdentifier, PersonIdentifier
app = Flask(__name__)

@app.route('/Obj_vector',methods=['POST'])
def vector():
    obj_id = ObjIdentifier()
    image_url = request.json['image_url']
    if image_url != None:
        return jsonify({"image_vector": f"{obj_id.vector_generator(image_url)}"})
    else:
        return jsonify({"status": "error", "message": "No image url provided."}), 400

@app.route('/indetify_object', methods=['POST'])
def identify_object():
    obj_id = ObjIdentifier()
    image1vector = request.json['image_vector']
    image2vector = request.json['image_vector']
    if image1vector != None or image2vector != None:
        return jsonify(obj_id.identify_object(image1vector, image2vector))
    else:
        return jsonify({"status": "error", "message": "No image vector provided."}), 400

@app.route('/person_vector', methods=['POST'])
def person_vector():
    person_id = PersonIdentifier()
    image_url = request.json['image_url']
    if image_url != None:
        embedding = person_id.embedding_generator(image_url)
        return jsonify({"image_vector":f"{embedding}"})
    else:
        return jsonify({"status": "error", "message": "No image url provided."}), 400
@app.route('/identify_person', methods=['POST'])
def identify_person():
    person_id = PersonIdentifier()
    image1vector = request.json['image_vector']
    image2vector= request.json['image_vector']
    if image1vector != None or image2vector != None:
        return jsonify(person_id.is_Same(image1vector, image2vector))
    else:
        return jsonify({"status": "error", "message": "No image vector provided."}), 400

if __name__ == '__main__':
    app.run(debug=True)
