import sys
import json
import ast #abstract syntax tree

data_to_pass_back = 'Send this to node process.'

# string
# input = sys.argy[1]
# output = data_to_pass_back
# print(output)

# list
# input = ast.literal_eval(sys.argv[1])
# output = input
# output.append(data_to_pass_back)
# print(json.dumps(output))

# dict
input = ast.literal_eval(sys.argv[1])
output = input
output['data_returned'] = data_to_pass_back
print(json.dumps(output))

sys.stdout.flush()