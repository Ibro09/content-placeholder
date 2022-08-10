const header=document.getElementById('header')
const title=document.getElementById('title')
const p=document.getElementById('ab')
const profile=document.getElementById('profile')
const info=document.getElementById('info')
const date=document.getElementById('date')

const animatedBg=document.querySelectorAll('.animatedBg')
const animatedtxt=document.querySelectorAll('.animatedtxt')


setTimeout(data,2500)

function data(){
    header.innerHTML=' <img src="./thumbnail-2.webp "alt="">'
    title.innerHTML='Lorem ipsum dolor sit amet.'
    p.innerHTML='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, illum'
    profile.innerHTML=' <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="" class="profile-img">'
    info.innerHTML='john doe'
    date.innerHTML='nov 9,2002'
    animatedBg.forEach(bg=>bg.classList.remove('animatedBg'))
    animatedtxt.forEach(txt=>txt.classList.remove('animatedtxt'));
    
   
}
