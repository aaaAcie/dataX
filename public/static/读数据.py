import os
# path = os.path.join(os.getcwd(), r'app/static/uploads/')
# print(path)
path0 = os.getcwd()
lst = []
def get_file(path):
  ls = os.listdir(path)
  for i in ls:
    # c_path = os.path.join(path, i)
    if(os.path.isdir(i)):
      pass
    else:
      lst.append(i.split('.')[0])


get_file(path0)
print(lst)
