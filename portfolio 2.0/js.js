let listBut =document.querySelector('#listBut'),
nav=document.querySelector('nav ul'),
cancelBut=document.querySelector('#cancelBut');

listBut.addEventListener('click',()=>{
  nav.style.display='flex'
  listBut.style.display='none'
  cancelBut.style.display='block'
})
cancelBut.addEventListener('click',()=>{
  nav.style.display='none'
  listBut.style.display='block'
  cancelBut.style.display='none'
})



// ----------------- extra skills------

let extraSkillBut=document.querySelector('#extraSkillBut'),
backSkillBut=document.querySelector('#backSkillBut'),
otherSkill=document.querySelectorAll('.other-skill'),
mainSkill=document.querySelectorAll('.main-skill');

extraSkillBut.addEventListener('click',()=>{
  extraSkillBut.style.display='none'
  backSkillBut.style.display='flex'
otherSkill.forEach(e => {
e.style.display='flex'
});
mainSkill.forEach(e => {
e.style.display='none'
});
})


backSkillBut.addEventListener('click',()=>{
  extraSkillBut.style.display='block'
  backSkillBut.style.display='none'
otherSkill.forEach(e => {
e.style.display='none'
});
mainSkill.forEach(e => {
e.style.display='flex'
});
})

// ---------------------- education ----- 
let imgs =document.querySelector('.imgs'),
allInfo =document.querySelector('#allInfo'),
msc=document.querySelector('#msc'),
bca=document.querySelector('#bca'),
del=document.querySelector('#del'),
hs=document.querySelector('#hs'),
exploreBut=document.querySelector('#exploreBut'),
eduBackBut=document.querySelector('#eduBackBut');

exploreBut.addEventListener('click',()=>{
  eduBackBut.style.display='flex'
  exploreBut.style.display='none'
  imgs.style.display='none'
  allInfo.style.width='100%'
  msc.textContent='Master of Science, Information system (MSc (IF)), Osmania University, Hyderabad, India, from 2020-2022.';
  bca.textContent='Bachelor of Computer Applications (BCA), Osmania University, Hyderabad, India, from 2017-2020.';
  del.textContent='Diploma of English Language, INSPORA INTERNATIONAL INSITUTUE, Bangalore, India, from August 2016-Feburauary 2017.'
  hs.textContent='High School, Al Aqsa School, Sana’a, Yemen, 2014-2015.'
})
eduBackBut.addEventListener('click',()=>{
  eduBackBut.style.display='none'
  exploreBut.style.display='flex'
  imgs.style.display='flex'
  allInfo.style.width='50%'
  msc.textContent='MSc(IS) 2020/2022';
  bca.textContent='BCA 2017/2020';
  del.textContent='Diploma of English Language'
  hs.textContent='High School 2015'
if(window.matchMedia('(max-width:767px)').matches){
  allInfo.style.width='100%'
}
if(window.matchMedia('(max-width:920px)').matches){
  allInfo.style.width='100%'
}
})


// -------------------- projects --------
let viewLessProj =document.querySelector('#viewLessProj'),
viewMoreProj =document.querySelector('#viewMoreProj'),
subProj=document.querySelectorAll('.sub-proj');

viewMoreProj.addEventListener('click',()=>{
  viewLessProj.style.display='block'
  viewMoreProj.style.display='none'
subProj.forEach(e=>{
  e.style.display='block';
})
})
viewLessProj.addEventListener('click',()=>{
  viewLessProj.style.display='none'
  viewMoreProj.style.display='block'
subProj.forEach(e=>{
  e.style.display='none';
})
})


// ------------ nav scroll ---------
let homeBut=document.querySelector('#homeBut'),
aboutMeBut=document.querySelector('#aboutMeBut'),
skillsBut=document.querySelector('#skillsBut'),
educationBut=document.querySelector('#educationBut'),
tCBut=document.querySelector('#tCBut'),
projectBut=document.querySelector('#projectBut'),
firstSection=document.querySelector('.first-section'),
skillsSection=document.querySelector('.skills-section'),
education=document.querySelector('.education'),
triningCos=document.querySelector('.trining-cos'),
projectsSection=document.querySelector('.projects-section'),
whatIprovide=document.querySelector('.what-i-provide'),
contactMe=document.querySelector('.contact-me');
aboutMe=document.querySelector('.about-me');

let backBut=document.querySelectorAll('#backBut'),
contactMeBut=document.querySelectorAll('#contactMeBut');

homeBut.addEventListener('click',()=>{
  window.location.reload();
})
skillsBut.addEventListener('click',()=>{
  skillsSection.scrollIntoView();
})
educationBut.addEventListener('click',()=>{
  education.scrollIntoView();
})
tCBut.addEventListener('click',()=>{
  triningCos.scrollIntoView();
})
projectBut.addEventListener('click',()=>{
  projectsSection.scrollIntoView();
})


aboutMeBut.addEventListener('click',()=>{
  aboutMe.style.display='block';
  firstSection.style.display='none'
  skillsSection.style.display='none'
  education.style.display='none'
  triningCos.style.display='none'
  projectsSection.style.display='none'
  whatIprovide.style.display='none'
})
aboutMeBut.addEventListener('click',()=>{
  aboutMe.style.display='block';
  contactMe.style.display='none'
  firstSection.style.display='none'
  skillsSection.style.display='none'
  education.style.display='none'
  triningCos.style.display='none'
  projectsSection.style.display='none'
  whatIprovide.style.display='none'
})

contactMeBut.forEach(e=>{
  e.addEventListener('click',()=>{
    contactMe.style.display='block'
    aboutMe.style.display='none'
    firstSection.style.display='none'
    skillsSection.style.display='none'
    education.style.display='none'
    triningCos.style.display='none'
    projectsSection.style.display='none'
    whatIprovide.style.display='none'
  })
})

backBut.forEach(e=>{
  e.addEventListener('click',()=>{
    aboutMe.style.display='noen';
    contactMe.style.display='noen';
    firstSection.style.display='block'
    skillsSection.style.display='block'
    education.style.display='block'
    triningCos.style.display='block'
    projectsSection.style.display='block'
    whatIprovide.style.display='block'
  })
})


// ------- to the top button -

let toTopBut=document.querySelector('#toTop');

window.onscroll=function(){
  if(this.scrollY >=700){
    toTopBut.style.display='block'
  }else{
    toTopBut.style.display='none'
  }
}
toTopBut.addEventListener('click',function(){
  window.scrollTo(0,0);
})