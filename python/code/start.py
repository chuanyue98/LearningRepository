# print("打印输出")
# print(666)

money = 10
# print("我还有：",money)

print(type("name"))

num = str(11)
print(type(num))

print(9 / 2)

name = "川月"
message = "%sGOOD GOOD" % name
print(message)

year = 2025
salary = 20000
message = "川月%s年平均工资:%s" % (year,salary)
print(message)

name = "什么"
set_up_year = 2003
stock_price = 33.50
print(f"我是{name},我成立于:{set_up_year}年,我今天的股价是:{stock_price}")

print("inputTest")
name = input()
print(name)

age = 20
if age >= 18:
    print("我成年了")

i = 0
while i < 100:
    print(i)
    i += 1

name = "chuanyue"
for x in name:
    print(x)

for x in range(5):
    print(x)
print(x)# 不符合规范 但实际能访问到


for i in range(1,10):
    for j in range(1,i+1):
        print(f"{j}*{i}={j*i}\t",end='')
    print()


str = "我好惨"
def length(str):
    count = 0
    for i in str:
        count +=1
    print(f"字符串的长度是:{count}")
length(str)

def add(x,y):
    """_summary_

    Args:
        x (_type_): _description_
        y (_type_): _description_

    Returns:
        _type_: _description_
    """
    result = x+y
    print(f"两数相加的结果是:{result}")
    return result