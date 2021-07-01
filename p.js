var que_list=["Who Invented computer","Who invented Internet","When was python developed","what is the fullform of www."]
var opt_list=[["Vint cerf","Mark Jukerberg","Charls babbage","Robert Vintage"],["Vint cerf","vinton cerf", "Guido","John babbage"],["21 feb","20 feb","20 march","19 jan"],["world web wide","world wide web","world web webside","world wide webside"]]
var ans_list=[3,1,2,2]
// var fifty_list=[["Charls babbage","Robert Vintage"],["vint cef","guido"],["21 feb","20 feb"],["world web wide","world wide web"]]
// var sol_list=[1,1,2,2] 
// # ans=[3,5050,] 

var lifelinecount = 0
function lifeline(index){  
    
    var j=0 
    if(lifelinecount==0){ 
        while (j<fifty_list.length[index]){
            console.log(j+1,fifty_list[index][j])
            j++
        }
        
        var readlineSync  = require("readlinr-sync")
        var user = readlineSync.questionInt("....")
        lifelinecount++
        if (user==sol_list[index]){
            return true
        }
        else{
            return false
        }
    }else{
        console.log('you Already used 5050')
        return "no"
    }
}
function option(index){
    var j=0
    while (j<opt_list.length[index]){
        console(j+1,opt_list[index][j])
        j++
    
    }
    // user_ans = int(input('enter the answer***'))
    var readlineSync  = require("readlinr-sync")
    var user = readlineSync.questionInt("....")
    if (user==ans_list[index]){
        return true
    }
        
    if (user == 5050){
        return(lifeline(index))
    }
    
    else{
        return False
    }
}

function que(){
    var index=0
    while (index<que_list.length){
        console.log("Q.",index+1,que_list[index],"?")
        result=option(index)
        if (result=="no"){
            index--
        }
        else if (result==true){
            console.log("congratulations")
        }
        else{
            console.log("you loose")
            break  
        } 
        index++
    }  
}

function main(){
    que()
}
main();
