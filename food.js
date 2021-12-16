const myBtn=document.querySelector("#button1");
const myBtn2=document.querySelector("#button2");
const myBtn3=document.querySelector("#button3");
const result=document.querySelector("#output")



myBtn.addEventListener('click',()=>{
    result.innerText="Chicken Tikka\n Mutton \n Biriyani"
    

})

myBtn2.addEventListener('click',()=>{
    result.innerText="Pulao\n Dal Makhani\nChapati"
    

})

myBtn3.addEventListener('click',()=>{
    result.innerText="French Beans\nCorn Soup\nKhichdi"
    

})