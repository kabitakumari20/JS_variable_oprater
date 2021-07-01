var que_list=["Who Invented computer","Who invented Internet","When was python developed","what is the fullform of www."]
var opt_list=[["Vint cerf","Mark Jukerberg","Charls babbage","Robert Vintage"],["Vint cerf","vinton cerf", "Guido","John babbage"],["21 feb","20 feb","20 march","19 jan"],["world web wide","world wide web","world web webside","world wide webside"]]
var ans_list=[3,1,2,2]
// var fifty_list=[["Charls babbage","Robert Vintage"],["vint cef","guido"],["21 feb","20 feb"],["world web wide","world wide web"]]
// var sol_list=[1,1,2,2]  
// var solution_arry=[3,4,1]
var readlineSync=require('readline-sync')

var d = 0
function option(list){
    var c = 0 
    for(y of list){
        console.log(c+1,y)
        c++;
    }
    var user = readlineSync.question("enter the ans---")
    if(ans_list[d] == user){
        console.log("congratualaion ur ans correct--")
    }else{
        console.log("sorry,u r lost the game.")
        return false;
    }
}



var count = 0
for (x of que_list){
    console.log("Q.",count+1,x)
    option(opt_list[count])
    count++;
    d++;
}