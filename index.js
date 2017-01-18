$(document).ready(function(){

  const backgroundImages = [
      './images/space/galaxy.png',
      './images/space/space-uterus.jpeg',
      './images/space/space.jpeg',
      './images/space/blurbablubadoongonk.jpeg',
      './images/space/trippy-sauron.jpg'
  ];

  console.log("script loaded");
  const skillImages = [
                        "./images/skills/nodejs.jpg",
                        "./images/skills/postgres.png",
                        "./images/skills/react.png",
                        "./images/skills/ruby.png",
                        "./images/skills/RubyonRails.png"
                      ]
  const [nodejs, postgres, react, ruby, RubyonRails] = skillImages


  const info = {
    filfil:{
      head:"Brand Strategist & Executive Account Manager",
      time: "Septmeber 2014 - October 2016",
      desc: `Coming out of school I wanted to gain more experience in startups and business strategy.
             As their first employee I was initiated with caution. My responsibilites grew as we grew as a team and a company
             and as the cofounders familiarized themselves with my unique talents and capabilities to complement their own.
             Through my contribution in business planning, marketing, and salesmanship we started out producing in a Manhattan kitchen after hours
             to currently being housed in over 40+ local stores, 50+ nationwclasse, and significant revenue through our online sales platforms.`,
      skills: ["Brand Strategy", "Digital & Social Media Marketing"]
    },
    ga:{
      head:"Web Development Immersive, Graduate",
      time:"October 2016 - January 2017",
      desc: `Programming had never been a part of my school curriculum despite going to an engineering school, I was introduced to the subject after my formal studies.
             Immediately enamored with everything about coding, I enlisted in General Assembly's Immersive course.
             There are many reasons why I chose this route but the most salient is that
             I am an entrepreneur so I want to build my own products which is what GA focuses on, doing not talking.
             Every day is an opportunity to delve further into your passions and GA exemplifies this with their interactive curriculum and exuberant teachers.

             Every week we studied a new technology and built an app surrounding it. My favorites were React and
             Ruby on Rails for how complex yet elegant they operate and the time they free up to finesse more interesting aspects of a project.`,
      skills:[nodejs, postgres, react, ruby, RubyonRails]
    },
    gsdo:{
      head:"Strategy Design Intern",
      time:"July 2015 - February 2016, Part-Time",
      desc:`While I shadowed startegy and experience design directors throughout the day participating in internal meetings,
            product and service review sessions, global initiative drives and other office duties.
            Assistant user testing experiments for medical devices by collecting and analyzing data.
            Studied design thinking, strategy design, global marketing strategies, and project management in an active, high-level work environment`,
    skills:["Strategic foresight & design" , "ethnographic research" , "international product design"]
    },
    nols:{
      head:"Student Leader",
      time:"January 2015 - April 2015, August 2012",
      desc: "",
      skills: ["Team leadership", "first-aid & wilderness skills", "problem solving"]
    },
    schminop:{
      head: "Schminop",
      time: "1 week sprint",
      desc: `Social media platform for college students interested in business,
             finance, design, and technology. Schminop uses news APIs to supply
             information and topics for conversation on the forum.
             Designed, built, and managed by myself`,
      skills: [nodejs, postgres]
    }
  };


  const classes = [$('.blurb'),
                   $('.filfil'),
                   $('.ga'),
                   $('.gsdo'),
                   $('.nols'),
                   $('.schminop'),
                   $('.aboutme'),
                   $('.close')];
 const [blurb, filfil, ga, gsdo, nols, schminop, aboutme, close] = classes;

const addTech = function(obj){
  $('body').append('<div class="blurb"> </div>');
  $('.blurb').append('<div class="verbage"> <div>');
   $('.blurb').append('<div class="skills"> </div>')
  $('.verbage').append(`<h4 class="head">
                          ${obj.head}
                          <span class="time"> ${obj.time} </span>
                        </h4>`);
  $('.verbage').append(`<p class="desc"> ${obj.desc} </p>`)
  $('.blurb').append(`<img src="./images/skills/close.svg"class="close"/>`)


  obj.skills.forEach(function(skill){
      $('.skills').append(`<img src="${skill}" class="skill"/>`);
  });
  $('.close').on('click', function(e){
    console.log('d')
    console.log(e);
    $('.blurb').remove();
    console.log('close clicked');
  });
};

const addDesign = (obj) => {
  $('body').append('<div class="blurb"> </div>');
  $('.blurb').append('<div class="verbage"> <div>');
  $('.blurb').append('<div class="skills"> </div>')
  $('.verbage').append(`<h4 class="head"> ${obj.head}

                  <span class="time"> ${obj.time} </span>

               </h4>`);
  $('.verbage').append(`<p class="desc"> ${obj.desc} </p>`)
  $('.blurb').append(`<img src="./images/skills/close.svg"class="close"/>`)
  $('.verbage').append('<div class="skills"> </div>');

  obj.skills.forEach(function(skill){

    $('skills').append(`<li class="skill">${skill}</li>`);
  })
  $('.close').on('click', function(e){
    console.log('d')
    console.log(e);
    $('.blurb').remove();
    console.log('close clicked');
  });
};


$('.planet').on('click',function(event) {
    event.preventDefault();
    blurb.remove();
    console.log("planet clicked");

//   // Remove any old one
//   // $(".ripple").remove();

//   // Setup
//   var posX = $(this).offset().left,
//       posY = $(this).offset().top,
//       buttonWidth = $(this).width(),
//       buttonHeight =  $(this).height();




//  // Make it round!
//   if(buttonWidth >= buttonHeight) {
//     buttonHeight = buttonWidth;
//   } else {
//     buttonWidth = buttonHeight;
//   }

//   // Get the center of the element
//   var x = e.pageX - posX - buttonWidth / 2;
//   var y = e.pageY - posY - buttonHeight / 2;

//   // Add the element
//   $(this).prepend("<span class='ripple'></span>");
//   // Add the ripples CSS and start the animation
//   $(".ripple").css({
//     width: buttonWidth,
//     height: buttonHeight,
//     top: y + 'px',
//     left: x + 'px'
//   }).addClass("rippleEffect");
});


$('#filfil').on('click', function(e){
  addDesign(info.filfil)
  console.log("filfil showing");
});
$('#ga').on('click', function(e){
  addTech(info.ga)
  console.log("ga showing");
});
$('#gsdo').on('click', function(e){
  addDesign(info.gsdo);
  console.log("gsdo showing");
});
$('#nols').on('click', function(e){
  addDesign(info.nols)
  console.log("nols showing");
});
$('#aboutme').on('click', function(e){
  aboutme.show();
  console.log("aboutme showing");
});



})
