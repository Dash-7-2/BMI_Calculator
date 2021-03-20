var age = document.getElementById("age");

var height = document.getElementById("height");

var weight = document.getElementById("weight");

var form = document.getElementById("form");

const validateForm=()=>{
   
    if(age.value=="" || height.value=="" || weight.value=="")
    
    {

        alert("All Feilds Required!");
        document.getElementById("submit").removeEventListener("click",countBmi);

    }else
    
    {

        countBmi()

    }
}

document.getElementById("submit").removeEventListener("click",validateForm);

const countBmi=()=>{
    var p=[age.value, height.value, weight.value];
    form.reset()

    var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);

    var result='';

    if(bmi<18.25){
        result='Oopsies! You are underwheight! Gotta add some pounds healthfully.';
    }else if(18.25<=bmi&&bmi<=24.9){
        result='Yay! You are definetely healthy! You can have a pizza or two.';

    }else if(25<=bmi&&bmi<=29.9){
        result="Cut down on some unhealthy stuff & you'll be perfectly healthy!";
    }else if(30<=bmi&&bmi<=34.9){
        result="Oh no! Gotta train your brain to stick to healthy food!!";
    }else if(30<=bmi){
        result="Obesity Alert!! No more junk food!";
    }

    var h1=document.createElement('h1');
    var pr=document.createElement('p');
    var t =document.createTextNode(result);
    var b=document.createTextNode('BMI');
    var r = document.createTextNode(parseFloat(bmi).toFixed(2));
    h1.appendChild(b);
    h1.appendChild(r);
    pr.appendChild(t);
    document.body.appendChild(pr);
    document.body.appendChild(h1);
    document.getElementById("submit").removeEventListener("click", countBmi);
    document.getElementById("submit").removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", countBmi);



