function addNewField(){
    //console.log("New Field is Added");

    let newNode = document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder', 'Type Here');
    newNode.setAttribute("rows",4);

    let newAcademics = document.getElementById("academics");
    let weAddButtonob = document.getElementById("weAddButton");

    newAcademics.insertBefore(newNode,weAddButtonob);
}

function addNewField(){
    let newAdd = document.createElement("textarea");
    newAdd.classList.add('form-control');
    newAdd.classList.add('aqField');
    newAdd.classList.add('mt-2');
    newAdd.setAttribute('placeholder', 'Type Here');
    newAdd.setAttribute("rows",4);

    let academicsOb = document.getElementById("academics");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    academicsOb.insertBefore(newAdd,aqAddButtonOb);
}

function addNewWEField(){
    //console.log("Adding");
    let newNode = document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder', 'Type Here');
    newNode.setAttribute("rows",4);

    let workexOb = document.getElementById("workex");
    let weAddButtonOb = document.getElementById("weAddButton");

    workexOb.insertBefore(newNode,weAddButtonOb);
}

function addNewProjField(){
    let newProj = document.createElement("textarea");
    newProj.classList.add('form-control');
    newProj.classList.add('proField');
    newProj.classList.add('mt-2');
    newProj.setAttribute('placeholder', 'Type Here');   
    newProj.setAttribute("rows",4);

    let newProjOb = document.getElementById("proj");
    let addNewProjFieldOb = document.getElementById("projAddButton");

    newProjOb.insertBefore(newProj, addNewProjFieldOb);    
}


function addNewAchive(){
    let newAchive = document.createElement("textarea");
    //console.log("New Field is Added");
    newAchive.classList.add('form-control');
    newAchive.classList.add('acField');
    newAchive.classList.add('mt-2');
    newAchive.setAttribute('placeholder', 'Type Here');
    newAchive.setAttribute("rows",4);

    let newAddAchive = document.getElementById("achive");
    let weAddButtonav = document.getElementById("acAddButton");

    newAddAchive.insertBefore(newAchive,weAddButtonav);
    
}


function generateCV(){
    
    
    document.getElementById('nameT').innerHTML = document.getElementById('nameField').value;
    document.getElementById('postT').innerHTML = document.getElementById('postField').value;
    

    //Contact Info
    document.getElementById('phT').innerHTML = document.getElementById('phone').value;
    document.getElementById('emailT').innerHTML = document.getElementById('email').value;
    document.getElementById('addressT').innerHTML = document.getElementById('address').value;

    
    //Links
    document.getElementById('fbT').innerHTML = document.getElementById('fblink').value;
    document.getElementById('naukriT').innerHTML = document.getElementById('naukrilink').value;
    document.getElementById('linkinT').innerHTML = document.getElementById('linkdinlink').value;

    //skills
   //document.getElementById('skillT').innerHTML = document.getElementById('skilllink').value;
   let skils = document.getElementsByClassName('skillField');
    let str4 = "";

    for(let e of skils){
        str4 = str4+`<li> ${e.value} </li>`;
    }
    document.getElementById("skillT").innerHTML = str4;



    //Objective
    document.getElementById('objT').innerHTML = document.getElementById('obj').value;
   
    //Academics

    //document.getElementById('acadT').innerHTML = document.getElementById('academics').value;
    let acads = document.getElementsByClassName('aqField');
    let str1 = "";

    for(let e of acads){
        str1 = str1+`<li> ${e.value} </li>`;
    }
    document.getElementById("acadT").innerHTML = str1;


    //Work Experience
    let wes = document.getElementsByClassName('weField');
    let str = "";

    for(let e of wes){
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;
   

    //Projects
    let projs = document.getElementsByClassName('proField');
    let str3 = "";

    for(let e of projs){
        str3 = str3 + `<li> ${e.value} </li>`;
    }
    document.getElementById("projT").innerHTML = str3;



    //Acheivements
     //document.getElementById('achvT').innerHTML = document.getElementById('achive').value;
    let achvs = document.getElementsByClassName('acField');
    let str2 = "";

    for(let e of achvs){
        str2 = str2+  `<li> ${e.value} </li>`;
    }
    document.getElementById("achvT").innerHTML = str2;
   
    //profile photo
    let file = document.getElementById("imgField").files[0];
    console.log(file);

    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    //Img to Template
    reader.onloadend = function(){
        document.getElementById("imgTemplate").src = reader.result;

    }
   
    
    //document.getElementById("cv-form").style.display = "none";
    //document.getElementById("cv-template").style.display = "block";

}

function printcv(){
  
    window.print();
    
    
}