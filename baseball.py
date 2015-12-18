from pymongo import MongoClient
import json
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
  return render_template('index.html')

@app.route('/start', methods=['POST'])
def get_results():
  searchword = request.args.get('key', '')
  
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

if __name__ == '__main__':
  app.run()

main()
