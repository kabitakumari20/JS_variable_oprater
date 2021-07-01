# list=[2,2,3,5,6,3,7,8,8]
# i=0
# b=[]
# while i<len(list):
#     j=i+1
#     while j<len(list):
#         if list[i]==list[j]:
#             pass
#     else:
#         b.append(list[i])
#         j=j+1
#     i=i+1
# print(b)


# list=["a","b","c",[7,8,9,[10,11,12]]]
# print(list[2])
# print(list[3][1])
# print(list[3][3][1])


# a=[4,5,7,9,[2,3,8,10,[11,13,12,14,[2,26,25,[1,3]]]]]
# print(a[0])
# print(a[3])
# print(a[4][0])
# print(a[4][3])
# print(a[4][4][0])
# print(a[4][4][1])
# print(a[4][4][3])
# print(a[4][4][4][1])
# print(a[4][4][4][3][0])
# print(a[4][4][4][3][1])

que_list=["Who Invented computer","Who invented Internet","When was python developed","what is the fullform of www."]
opt_list=[["Vint cerf","Mark Jukerberg","Charls babbage","Robert Vintage"],["Vint cerf","vinton cerf", "Guido","John babbage"],["21 feb","20 feb","20 march","19 jan"],["world web wide","world wide web","world web webside","world wide webside"]]
ans_list=[3,1,2,2]
fifty_list=[["Charls babbage","Robert Vintage"],["vint cef","guido"],["21 feb","20 feb"],["world web wide","world wide web"]]
sol_list=[1,1,2,2] 
# ans=[3,5050,] 

lifelinecount = 0
def lifeline(index):  
    global lifelinecount
    j=0 
    if(lifelinecount==0): 
        while j<len(fifty_list[index]):
            print(j+1,fifty_list[index][j])
            j=j+1
        user_ans = int(input('enter the answer***'))
        lifelinecount+=1
        if user_ans==sol_list[index]:
            return True
        else:
            return False
    else:
        print('you Already used 5050')
        return "no"
        
def option(index):
    j=0
    while j<len(opt_list[index]):
        print(j+1,opt_list[index][j])
        j=j+1
    user_ans = int(input('enter the answer***'))
    if user_ans==ans_list[index]:
        return True
        
    if user_ans == 5050:
        return(lifeline(index))
    
    else:
        return False

def que():
    index=0
    while index<len(que_list):
        print("Q.",index+1,que_list[index],"?")
        result=option(index)
        if result=="no":
            index-=1
        elif result==True:
            print("congratulations")
        else:
            print("you loose")
            # print("you already used fifty fifty")
            break   
        index+=1  

def main():
    que()
main()
