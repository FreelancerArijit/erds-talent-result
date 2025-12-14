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

//disable dev tools 
// Disable right-click
document.addEventListener("contextmenu", e => e.preventDefault());

// Block inspect shortcuts
document.addEventListener("keydown", e => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
    (e.ctrlKey && e.key === "u")
  ) {
    e.preventDefault();
  }
});

// Detect DevTools (deterrent only)
setInterval(() => {
  if (
    window.outerWidth - window.innerWidth > 160 ||
    window.outerHeight - window.innerHeight > 160
  ) {
    document.body.innerHTML = `
      <h2 style="text-align:center;margin-top:20%;font-family:sans-serif">
        Inspect Disabled
      </h2>
    `;
  }
}, 1000);


