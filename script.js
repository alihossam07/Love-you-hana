function check(){
  if(document.getElementById("pass").value==="692025"){
    document.getElementById("login").style.display="none";
    document.getElementById("content").style.display="block";
    typeMessage();
  }else{
    alert("الباسورد غلط");
  }
}

const text = `هلا اي يعمري عامله اي  
بما ان طبعا مش هعرف اجيبلك حاجه عشان العيله الكريمه  
ف يعني دي اقل حاجه اقدر اقدمهالك  

المهم يعمري بصي ينونو  
خليكي عارفه اني بحبك وبموت فيكي  
وخليكي عارفه ان كل حاجه جت بسرعه  

الماسيج دي ومعرفتش اطلع فيها كل حاجه  
بس كل الي اقدر اقوله  
اني بحبك وبعشقك وبموت فيكي  

خليكي عارفه اني قد وعدي  
وبحبك ومش عايز غيرك  

خليكي عارفه انك احن  
واحلا واجمل واغلا الناس عندي  

ذكريات حلوه  
وايام متتعوضش  

بحبك امواااههههه 💋💋💋`;

let i=0;
function typeMessage(){
  if(i<text.length){
    const colors = ["#ff4d6d","#ff85a2","#ffc0cb","#ffa6c9"];
    const char = <span style="color:${colors[Math.floor(Math.random()*colors.length)]}">${text.charAt(i)}</span>;
    document.getElementById("message").innerHTML+=char;
    i++;
    setTimeout(typeMessage,40);
  }
}

let index=0;
const imgs=document.querySelectorAll(".slider img");
function show(){imgs.forEach(img=>img.classList.remove("active")); imgs[index].classList.add("active");}
function next(){index=(index+1)%imgs.length; show();}
function prev(){index=(index-1+imgs.length)%imgs.length; show();}

function createHeart(){
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  heart.style.left = Math.random()*window.innerWidth + "px";
  heart.style.fontSize = (10 + Math.random()*20) + "px";
  document.getElementById("heartsContainer").appendChild(heart);
  heart.innerText = "❤️";
  setTimeout(()=>{heart.remove()},5000);
}
setInterval(createHeart, 300);
