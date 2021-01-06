from flask import Flask, request
from pymongo import MongoClient
from bson import ObjectId
import json
app = Flask(__name__)
client = MongoClient(
    "mongodb+srv://shashiben:shashiben@cluster0.dsnoz.gcp.mongodb.net/untitled?retryWrites=true&w=majority")
db = client.orphanage
orphanages = db.orphanages


@app.route('/orphanagesList', methods=["GET"])
def getList():
    documents = orphanages.find()
    response = []
    for document in documents:
        document['_id'] = str(document['_id'])
        response.append(document)
    return json.dumps(response)


@app.route('/addOrphanage', methods=["POST"])
def addOrphanage():
    req_data = request.get_json()
    x = orphanages.insert(req_data)
    print("X is :{0}".format(x))
    return ('', 201)


@app.route('/editOrphanage/<id>', methods=["PUT"])
def editOrphanage(id):
    req_data = request.get_json()
    filter = {'_id': ObjectId(id)}
    newvalues = {"$set": req_data}
    req_data.pop('_id')
    orphanages.update(
        filter, newvalues
    )
    return ('', 201)


@app.route('/orphanage/<id>', methods=["GET"])
def getDetails(id):
    documents = orphanages.find({"_id": ObjectId(id)})
    response = []
    print(documents.collection)
    for document in documents:
        document['_id'] = str(document['_id'])
        response.append(document)
    return json.dumps(response[0])

@app.route('/orphanage/<id>', methods=["DELETE"])
def deleteorphange(id):
    documents = orphanages.delete_one({"_id": ObjectId(id)})
    return ("Deleted Successfully", 201)
