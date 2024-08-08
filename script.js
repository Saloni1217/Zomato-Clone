const wrap= document.querySelector('.wrap');
const loginlink= document.querySelector('.login-link');
const reglink= document.querySelector('.signup-link');
const btnpopup= document.querySelector('.login-pop');
const btnsignup= document.querySelector('.signup-pop');
const closee=document.querySelector('.close');
const geti = document.querySelector('#si-btn');

reglink.addEventListener('click', ()=> {
    wrap.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrap.classList.remove('active');
});

btnpopup.addEventListener('click', ()=> {
    wrap.classList.add('active-popup');
});


closee.addEventListener('click', ()=> {
    wrap.classList.remove('active-popup');
});
geti.addEventListener('click', ()=> {
    document.getElementById('signup').style.display ="none";
//     document.getElementsByClassName('.wrap').style.display = "block";/ 
});
geti.addEventListener('click', ()=>{
    wrap.classList.add('active-pop');
})
btnsignup.addEventListener('click', ()=> {
        wrap.classList.add('active-popp');
     })
