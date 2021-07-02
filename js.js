// header fixed 
let header =document.querySelector('header');
window.addEventListener("scroll",function(){

  if(window.scrollY>=350){
    header.style.cssText=('background: #505050a3;')
  }else{
    header.style.cssText=('background: transparent;')
    
  }
})

// ----------------------------------------


// 3-buttens

let skillsBut=document.querySelector("#skills"),
educationBut=document.querySelector("#education"),
trainingCoursesBut=document.querySelector("#trainingCourses")
let skillsList=document.querySelector('.skills'),
educationList=document.querySelector('.education'),
traingingList=document.querySelector('.trainging-c');

skillsBut.addEventListener('click',function(){
  skillsBut.style.cssText=('background-color:var(--silverText);')
  if(skillsList.style.display="none"){
    trainingCoursesBut.style.cssText=('background-color:transparent')
    educationBut.style.cssText=('background-color:transparent')
    skillsList.style.display="grid"
    educationList.style.display="none"
    traingingList.style.display="none"
  }else{
    skillsList.style.display="none"
    skillsBut.style.cssText=('background-color:transparent;')

  }
  })

educationBut.addEventListener('click',function(){
if(educationList.style.display="none"){
  educationBut.style.cssText=('background-color:var(--silverText);');
  skillsBut.style.cssText=('background-color:transparent')
  trainingCoursesBut.style.cssText=('background-color:transparent')
  educationList.style.display="grid"
  skillsList.style.display="none"
  traingingList.style.display="none"
}else{
  educationList.style.display="none"
  educationBut.style.cssText=('background-color:red;')

  
}
})
trainingCoursesBut.addEventListener('click',function(){
if(traingingList.style.display="none"){
  trainingCoursesBut.style.cssText=('background-color:var(--silverText);')
  skillsBut.style.cssText=('background-color:transparent')
  educationBut.style.cssText=('background-color:transparent')
  traingingList.style.display="grid"
  skillsList.style.display="none"
  educationList.style.display="none"
}else{
  traingingList.style.display="none"
  trainingCoursesBut.style.cssText=('background-color:transparent;')
}
})

// ---------------------------------------------

// show and hidde nav 

let nav =document.querySelector('#burgerList'),
cancelBurgerList=document.querySelector('#cancelBurgerList'),
navList=document.querySelector('#navList');

nav.addEventListener('click',function(){
  navList.style.cssText=('display: block;');
  nav.style.cssText=('display:none;');
  cancelBurgerList.style.display='block';
  
})
cancelBurgerList.addEventListener('click',function(){
  navList.style.display='none'
  cancelBurgerList.style.display='none'
  nav.style.display='block'
})
// ------------------------------------------------------

// nav list scroll to 
let
skillsNav=document.querySelector('#nav2'),
educationNav=document.querySelector('#nav3'),
trainingNav=document.querySelector('#nav4');



skillsNav.addEventListener('click',function(){
  skillsList.scrollIntoView(false);
})
educationNav.addEventListener('click',function(){
  educationBut.style.cssText=('background-color:var(--silverText')
  skillsBut.style.cssText=('background-color:transparent')
  trainingCoursesBut.style.cssText=('background-color:transparent')
  educationList.scrollIntoView(false);
educationList.style.cssText=('display: grid;')
skillsList.style.cssText=('display: none;')
traingingList.style.cssText=('display: none;')
})
trainingNav.addEventListener('click',function(){
  trainingCoursesBut.style.cssText=('background-color:var(--silverText')
  skillsBut.style.cssText=('background-color:transparent')
  educationBut.style.cssText=('background-color:transparent')
  traingingList.scrollIntoView(false);
educationList.style.cssText=('display: none;')
skillsList.style.cssText=('display: none;')
traingingList.style.cssText=('display: grid;')
})


// // ---------------------------------
// // scrollTo for small screens 

let x = window.matchMedia("(max-width: 767px)")
if(x.matches){

  skillsNav.addEventListener('click',function(){
    skillsList.scrollIntoView(false);
  })
  educationNav.addEventListener('click',function(){
    educationList.scrollIntoView(false);
  educationList.style.cssText=('display: grid;')
  skillsList.style.cssText=('display: none;')
  traingingList.style.cssText=('display: none;')
  })
  trainingNav.addEventListener('click',function(){
    traingingList.scrollIntoView(false);
  educationList.style.cssText=('display: none;')
  skillsList.style.cssText=('display: none;')
  traingingList.style.cssText=('display: grid;')
  })

}

// --------------------------------
