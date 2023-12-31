function lifeInWeeks(age) {
    
    var age_left=90-age;
    console.log("you have "+ age_left*12 + "months" +age_left*52 + "weeks"+age_left-365 + "days");
   
}

function BMI(weight,height){
    var bmi=math.round(weight/(height*height));
    console.log(bmi);
}
BMI(65,1.8);