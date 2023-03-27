
#https://www.youtube.com/watch?v=lSAFVMaaH-w&ab_channel=ApesinCapes
import sys
import json #used for arrays/json
import ast #used for arrays/json

data = "job 1"
#data = ["job 1", "job 2"]

#for just a string
input = sys.argv[1]
print("hello")
print(json.dumps({"1": "yes", "2": "not", "3": "no"}))
print(json.dumps({"1": "no", "2": "yes", "3": "yes"}))

#for array
#input = ast.literal_eval(sys.argv[1])
#print(json.dumps(data))

sys.stdout.flush()