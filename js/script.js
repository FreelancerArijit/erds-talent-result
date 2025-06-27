console.log("Script");

const currentyear = document.querySelector("#currentyear");

const calyear = new Date().getFullYear();
currentyear.textContent = calyear;


//send email function using emailJs

function sendEmail(){
    let parms = {
        name: document.querySelector("#name").value,
        number: document.querySelector("#number").value,
        message: document.querySelector("#message").value
    }

     if(document.querySelector("#name").value === "" && document.querySelector("#number").value === "" && document.querySelector("#message").value === ""){
        alert("Please filled the form");
    }else{
  emailjs.send("service_qdkpvti", "template_spu3wek", parms).then(alert("Message send"));
    }

    console.log("click submit");

}

