var que_list=["Who Invented computer","Who invented Internet","When was python developed","what is the fullform of www."]
var opt_list=[["Vint cerf","Mark Jukerberg","Charls babbage","Robert Vintage"],["Vint cerf","vinton cerf", "Guido","John babbage"],["21 feb","20 feb","20 march","19 jan"],["world web wide","world wide web","world web webside","world wide webside"]]
var ans_list=[3,1,2,2]
var fifty_list=[["Charls babbage","Robert Vintage"],["vint cef","guido"],["21 feb","20 feb"],["world web wide","world wide web"]]
var sol_list=[1,1,2,2]  
var solution_arry=[3,4,1]
var readlineSync  = require("readline-sync")

var lifelinecount = 0;
function lifeline(index){ 
    
    var j=0 
    if(lifelinecount==0){
        while(j<fifty_list[index].length){
            console.log(j+1,fifty_list[index][j]);
        
            j++;
        }
    
        var user = readlineSync.questionInt("choose your option......")
        lifelinecount++
        if(user==sol_list[index]){
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
    while(j<opt_list[index].length){
        console.log(j+1,opt_list[index][j])
        j++
    }
    
    var user1 = readlineSync.questionInt("choose option...");
    if (user1==ans_list[index]){
        return true
    }
    if (user1 == 5050){
        return(lifeline(index))
    }
    else{
        return false
    }
}
function que(){
    var index=0
    while (index<que_list.length){
        console.log("Q.",index+1,que_list[index],"?")
        result=option(index)
        console.log(result)
        if (result=="no"){
            
            
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
    que();
}
main();




