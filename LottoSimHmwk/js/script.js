var wallet = 10; 
var bet = 2;
var userInputs = [];
var rndArr = [];
var startBtnClk = false;

function verifyWallet()
{
    if (wallet<2){
        console.log('verifyWallet false');
        //alert("not enough funds");
        return false;
    }
    if(wallet >= bet){
         console.log("verifyWallet true" +wallet);
        return true;       
    }
}

function makebet()
{
  var msg = "You have $ "; 
  if(verifyWallet() == true)
  {
      wallet -= bet;
      document.getElementById("show").innerHTML = wallet;
      console.log("you wallet on bet is:"+wallet);
      return;
    } 
}

function verifyInputs(){
    var temp;
    var tempArr = [];
    getInputs();
    console.log("getInputs fn called should have userInputs: "+userInputs);
    // you want to verify inputs by BET button and then enable the play button 
    //var tempArr = userInputs;
    tempArr.push(userInputs[0]);
    console.log("tempArr has the first el: "+tempArr);
    
    for(var i=0; i<tempArr.length; i++)
           {
               //**
               if(userInputs[i+1] == tempArr[i])
               {
                //alert("stop");
                console.log("fn verifyInputs for loop duplicate! clearing user inputs and return false");
                
                document.getElementById("demo").innerHTML = userInputs; 
                return false;
               }
               console.log("no match ");  
               tempArr.push(userInputs[i+1]);
            
            if(tempArr.length == 4){
                   console.log('tempArr full of distinct numbers'+tempArr);
                   return true;
    }               // userInputs = tempArr
               }
    document.getElementById("show").innerHTML = tempArr;    
}   //end verifyInputs

function getInputs(){
    var numOne = document.getElementById('num1');
    var input1 = numOne.value;
    var numTwo = document.getElementById('num2');
    var input2 = numTwo.value;
    var numThree = document.getElementById('num3');
    var input3 = numThree.value;
    var numFour = document.getElementById('num4');
    var input4 = numFour.value;           
    //var temp = input1;
    
    userInputs = [input1,input2,input3,input4];
    userInputs = userInputs.map(parseFloat);  
}
function playersNums()
{            
    if(verifyWallet() == true){
              console.log("verifyInputs ");
             
              if(verifyInputs() == true){
                 //then lets play 
                  console.log("verifyInputs is true caling fn makebet");
                  makebet();
                  document.getElementById("betbtn").style.display = 'block';
                 
                  init();
                  calculateWinning(userInputs,rndArr);
                  document.getElementById("winnings").innerHTML = wallet;
                  document.getElementById("demo").innerHTML = userInputs;
                  document.getElementById("show").innerHTML = wallet;
                  console.log("These are the users inputs: "+userInputs);  
                  // call other fn like get rndArr and button wins
                  //document.getElementById("ShowBtnBetAgain").innerHMTL.syle.display = 'show';
                  //element.style.display = 'none';
              }
              if(verifyInputs() == false){
                 
                  console.log("The verifyWallet is true; but verifyInputs false");
                  //playersNums();
                  //update your numbers please
                  //return;
                  //What are you going to do bad inputs
              }        
    }
    if(verifyWallet() == false){
        //alert no funds avail Loser!
        console.log('No funds loser!!!!');
        return;
    }
}//end fn PlayerNums
        
function playersAgain()
{            
    if(verifyWallet() == true){
              console.log("verifyInputs ");
             
              if(verifyInputs() == true){
                 //then lets play 
                  console.log("verifyInputs is true caling fn makebet");
                  makebet();
                  document.getElementById("betbtn").style.display = 'block';
                 
                  init();
                  calculateWinning(userInputs,rndArr);
                  document.getElementById("winnings").innerHTML = wallet;
                  document.getElementById("demo").innerHTML = userInputs;
                  document.getElementById("show").innerHTML = wallet;
                  console.log("These are the users inputs: "+userInputs);  
                  // call other fn like get rndArr and button wins
                  //document.getElementById("ShowBtnBetAgain").innerHMTL.syle.display = 'show';
                  //element.style.display = 'none';
              }
              if(verifyInputs() == false){
                 
                  console.log("The verifyWallet is true; but verifyInputs false");
                  //playersNums();
                  //update your numbers please
                  //return;
                  //What are you going to do bad inputs
              }        
    }
    if(verifyWallet() == false){
        //alert no funds avail Loser!
        console.log('No funds loser!!!!');
        return;
    }
}//end fn PlayerNums        
function myFun(dup) {
    alert("Duplicate numbers not allowed. change the "+dup+" Please.");
    
}

function init(){
    startBtnClk = true;
    //document.getElementById("startBtn").disabled = true;
    
    getArr();
   
    document.getElementById("rndNum").innerHTML = rndArr;
    //document.getElementById("demo").innerHTML = rndArr;
    }


function getArr(){
    var num;
    //rndArr = [];
    if(startBtnClk = true){
    for(i=0; i<=4; i++)
    {
        num = getRnd(1,10);
        getNumber(num); 
    }
    //Array should be full at this point
     
    console.log('getArr fn Array should be full');
    } //if statement
    startBtnClk = false;
}

function getRnd(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
}

    
function getNumber(num)
{
    
   if(rndArr.length == 0)
   {
           rndArr.push(num);
            console.log('Array was empty added '+num+' to da Array ');
            console.log(rndArr);
            return;
     }    
    
    for(var i=0; i<=rndArr.length; i++)
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
    document.getElementById("rndNum").innerHTML = rndArr;
   
}

function calculateWinning(a,b)
{
    var matches = [];
  
    for(var i=0; i<a.length; i++){
        for (var j=0; j<b.length; j++){
    
        if ( a[i] === b[j] ) matches.push( a[i] );
        }
    }
    if(matches.length == 0){ wallet = wallet + 0; 
                  return;
                 }
        
    if(matches.length == 1){ wallet = wallet + 2; 
                  return;
                 }
        
    if(matches.length == 2){ wallet = wallet + 4;
                  return;
                 }
        
    if(matches.length == 3){ wallet = wallet + 16; 
                  return;
                 }
        
    if(matches.length == 4){ wallet = wallet + 64;
                  return;
                 } 
}


function quit(){
    
    rndArr = [];
    console.log('Goodbye! You have: $'+wallet);
}