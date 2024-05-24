function modu(){
    let a=document.getElementById('mod-1').value;

    if(a%3==0){
        document.getElementById('res-3').innerHTML="your number is divided by 3 ..."
    }
    else{
        document.getElementById('res-3').innerHTML="your number is not divided by 3!!"
    }
}

function mainsub(){

    let a=parseInt(document.getElementById('a1').value);
    let b=parseInt(document.getElementById('a2').value);
    let c=parseInt(document.getElementById('a3').value);
    let d=parseInt(document.getElementById('a4').value);

    let sub;

    sub=a-b-c-d;

    document.getElementById('sub1').innerHTML="result:"+sub;
}

function multi(){
     
    let n=parseInt(document.getElementById('b1').value);

    let multi=n*50;

    document.getElementById('mul1').innerHTML=" multi:"+multi;
}

function squre(){
     
    let n=parseInt(document.getElementById('c1').value);

    let squr=n*n;

    document.getElementById('res-4').innerHTML=" squre is:"+squr;
}


function printage(){

    let a=document.getElementById('n1').value;
    let b=document.getElementById('n2').value;

     document.getElementById('ans-5').innerHTML="Name is:"+a;

    document.getElementById('ans-2').innerHTML="age is:"+b;
}

function odd(){
    let a=parseInt(document.getElementById('oddnum').value);


    if(a%2==0){
        document.getElementById("num").innerHTML="this is even number...";
    }
    else{
        document.getElementById("num").innerHTML="this is odd number..";
    }
}

function subsum(){

    let num1=parseInt(document.getElementById("n1").value);
    let num2=parseInt(document.getElementById("n2").value);
    let num3=parseInt(document.getElementById("n3").value);

    let sum=num1+num2+num3;

    document.getElementById("ans_sum").innerHTML="sum is:"+sum;
}