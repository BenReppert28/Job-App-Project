from pymongo import MongoClient
import json

@app.route('/', methods=['GET', 'POST'])
def index():
  return render_template('index.html')

@app.route('/start', methods=['POST'])
def get_counts():
  #get url
  data = json.loads(request.data.decode())
  url = data["url"]
  #form URL, id necessary
  if 'http://' not in url[:7]:
    url = 'http://' + url
  #start job
  job = q.enqueue_call(
    func=count_and_save_words, args=(url,), result_ttl=5000
  )
  return job.get_id()




client = MongoClient('localhost', 27017)
db = client.test_database #find out how to input variable from JS to get to db
collection = db.test_collection #same as above for collection
cursor = db.variable.find({<field1>:<value1>})#empty find() brings it all

for document in cursor:
  print(document) #this iterates through the documents that are brought back
