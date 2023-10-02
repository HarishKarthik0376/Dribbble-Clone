const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting)
        {
            entry.target.classList.add("show");
        }
        else
        {
            entry.target.classList.remove("show");
        }
    })
})
const elements = document.querySelectorAll(".maintext");
elements.forEach((el)=> observer.observe(el));
const hidelements = document.querySelectorAll(".maintext2");
hidelements.forEach((el)=> observer.observe(el));
const hidelements1 = document.querySelectorAll(".start");
hidelements1.forEach((el)=> observer.observe(el));

const observer2 = new IntersectionObserver((entries2) =>{
entries2.forEach((entry2)=>{
    console.log(entry2);
    if(entry2.isIntersecting){
        entry2.target.classList.add("hey1");
    }
    else
    {
        entry2.target.classList.remove("hey1");
    }
})
})
const hidelements2 = document.querySelectorAll(".pink");
hidelements2.forEach((el)=> observer2.observe(el));
const hidelements3 = document.querySelectorAll(".slideimages");
hidelements3.forEach((el)=> observer2.observe(el));
const hidelements4 = document.querySelectorAll(".justtext");
hidelements4.forEach((el)=> observer2.observe(el));



document.getElementById("onlymob").addEventListener("click",function(){
    document.getElementById("onlymob").style.display = "none";
    document.getElementById("onlymob1").style.display = "block";
    document.getElementById("optionsmobile").style.display = "block";

})

document.getElementById("onlymob1").addEventListener("click",function(){
    document.getElementById("onlymob1").style.display = "none";
    document.getElementById("onlymob").style.display = "block";
    document.getElementById("optionsmobile").style.display = "none";

})
let change = document.body;
document.getElementById("sun").addEventListener("click",function(){
    change.classList.toggle("darkmode")
})
