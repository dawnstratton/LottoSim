var startBtnClk = false;
var rndArr = [];
//var strArr = [];



function init(){
    startBtnClk = true;
    document.getElementById("startBtn").disabled = true;
    
    getArr();
   
    document.getElementById("rndNum").innerHTML = rndArr;
  //  document.getElementById("demo").innerHTML = rndArr;
    }


function getArr(){
    var num;

    if(startBtnClk = true){
    for(i=0; i<=4; i++)
    {
        num = getRnd(1,10);
        getNumber(num); 
    }
    //Array should be full at this point
    startBtnClk = false; 
    console.log('getArr fn Array should be full');
    } //if statement
}

function getRnd(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
}

    
function getNumber(num)
{
    
//     if(rndArr.length == 0)
//     {
//            rndArr.push(num);
//            console.log('Array was empty added '+num+' to da Array ');
//            console.log(rndArr);
//            return;
//     }    
//    
    for(var i = 0; i<rndArr.length; i++)
    {

        if(num == rndArr[i])
            {
            console.log('numbers matched '+num+' Array '+rndArr[i]);
            return;
            }   
         
        if(rndArr.length == 4)
            {
       
        console.log('Array issa full & out of getNumber for loop rndArr= '+rndArr);
         console.log(rndArr);
        return;

            }
           console.log('no match '+num+' Array '+rndArr[i]);
    }
        rndArr.push(num);
       // console.log(rndArr);  
        // show rndArr
    document.getElementById("rndNum").innerHTML = rndArr;
   
}

function quit(){
    
    rndArr = [];
    console.log('Goodbye! You have: $'+wallet);
}