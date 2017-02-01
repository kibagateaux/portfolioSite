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
                        "./images/skills/nodejs.png",
                        "./images/skills/postgres.png",
                        "./images/skills/react.png",
                        "./images/skills/RubyonRails.png",
                        "./images/skills/reactNative.png",
                        "./images/skills/materialUI.png",
                        "./images/skills/JS.png"
                      ]
  const [nodejs, postgres, react, RubyonRails, native, materialUI, JS] = skillImages

  const projects = [
    {
      head: 'Kireiki',
      site: "https://github.com/kibagateaux/KiReiKi-Native",
      github: "https://github.com/kibagateaux/KiReiKi-Native",
      time: '1 week project',
      desc: `Using React Native and Rails API to build a mobile app
             centered on mens fashion. An adaption of Reddit, you can
             create communities based on topics you are passionate about
             from favorite designers to how you like your jeans cut.`,
      skills: [native, JS, RubyonRails, postgres, materialUI]
    },
    {
      head: 'Manifest-Millenials',
      site: "https://manifestmillenials.herokuapp.com",
      github: "https://github.com/kibagateaux/Manifest-Millennials",
      desc: `Social media platform for college students interested in business,
             finance, design, and technology. Schminop uses news APIs to supply
             information and topics for conversation on the forum.
             Designed, built, managed, and deployed to Heroku by myself.`,
      skills: [nodejs, JS, postgres]
    },
    {
      head: 'Telescope',
      site: "https://dry-hollows-37710.herokuapp.com/login",
      github: "https://github.com/kibagateaux/project3",
      desc: `A game based on Hot or Not for your narcissistic self.
             Never know which picture to post to Facebook or Instagram?
             Use Telescope to have your pictures voted on so you know
             which one to post and get the most likes.
             You upload the photos of yourself you want voted on to Imgur
             and we pull them using Imgur's API.
             View your profile to see your most liked and post it straight away.`,
      skills: [RubyonRails, postgres, materialUI]
    },
  ]
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
             <br> <br>
             Every week we studied a new technology and built an app surrounding it. My favorites were React and
             Ruby on Rails for how complex yet elegant they operate and the time they free up to finesse more interesting aspects of a project.`,
      skills:[nodejs, postgres, react, RubyonRails, native, materialUI],
      projects: projects
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
      head:"Student Wilderness Leader",
      time:"January 2015 - April 2015, August 2012",
      desc: `Intense leadership, environmental, and wilderness educational courses taught through
             experiential learning and daily lessons.
             Techical and interpersonal skills were my primary focus on my courses.
             Inter-personal skills includes leadership, comunication, empathy, decision-making,
             story tellng, and "Expidition Behavior".
             <br> <br>
             Technical skills varied depending on the course.
             Technical skills on my mountaineering course mainly comprised
             glacial traversing in rope teams, rock/ice climbing, and navigation.
             My second course was a full semester in New Zealand,
             split into three sections of sea kayaking, hiking, and sailing.
             Technical skills I learned here included nautical navigation,
             EMT first-aid, and sailing maneuvers.

             `,
      skills: ["Team leadership", "first-aid & wilderness skills", "problem solving"]
    },
    me:{
      head:"Malik Wormsby",
      time:"a.k.a Kiba Gateaux",
      desc:`The son of a designer and engineer, I learned both sides of
            the science-art spectrum from an early age.
            Through my love of challenges and creative problem solving,
            I have focused my software engineering and experience design
            to create interactive, fun web applications for industries
            ranging from fashion to tech.
            <br> <br>
            In addition, with my leadership experience in the states
            and abroad I excel at decision making, communication,
            and team building skills that brings cohesion to my teams.
            Highly driven and motivating leader and member of any team
            that knows how to foster teamwork and cooperation from everyone
            while utilizing each individuals talents for the appropriate job.
            I am eager to learn anything from anyone who is willing to teach
            or through studying on my own.
            No challenge is beyond me so long as I have proper preparation.`,
      projects: projects
    }
  }

  const classes = [$('.blurb'),
                   $('.filfil'),
                   $('.ga'),
                   $('.gsdo'),
                   $('.nols'),
                   $('.schminop'),
                   $('.aboutme'),
                   $('.close')];
const [blurb, filfil, ga, gsdo, nols, schminop, aboutme, close] = classes;

//find current location of click
//transitional popup from position to center
//setTimeout for blurb func when transition complete from planet click function

// const addBlurb = (event) => {
//    let posX = $(this).offset().left,
//        posY = $(this).offset().top,
//        x = event.pageX - posX/ 2,
//        y = event.pageY - posY/ 2;

//   $('body').append('<div class="modal"> </div>')
//   .css({
//     height: 0,
//     width: 0,
//     top: x,
//     left: y,
//     display: none
//   })
  // $(".ripple").css({
  //   width: buttonWidth,
  //   height: buttonHeight,
  //   top: y + 'px',
  //   left: x + 'px'
  // }).addClass("rippleEffect");
// }

const addBlurb = () => {

  $('.blurb').remove()

  $('body').append('<div class="blurb"> </div>');
  $('.blurb').append('<div class="verbage"><div>');
  $('.verbage').append(`<h4 class="head"></h4>`);
  $('.blurb').append(`<img src="./images/icons/whiteX.png"class="close"/>`)

  $('.close').on('click', () => $('.blurb').remove() )

}


const addProjects = () => {
  projects.forEach((project) => {
      $('.verbage').append(`<div id=${project.head} class="project-name">
                              <a href=${project.site} target="_blank">
                                ${project.head}
                              </a>
                            </div>`)
      $(`#${project.head}`).append(`<p class="desc"> ${project.desc} </p>`)
      $(`#${project.head}`).append('<div class="skills"> </div>')
      project.skills.forEach((skill) => {
        $(`#${project.head} .skills`).append(`<img src=${skill} class="skill">`)
      })
    })
}


const addTech = (obj) => {
  $('body').append('<div class="blurb"> </div>');
  $('.blurb').append('<div class="verbage"> <div>');
  $('.verbage').append(`<h4 class="head">
                          ${obj.head}
                          <span class="time"> ${obj.time} </span>
                        </h4>`);
  $('.verbage').append(`<p class="desc"> ${obj.desc} </p>`)
  $('.blurb').append(`<img src="./images/icons/whiteX.png"class="close"/>`)


  // obj.skills.forEach(function(skill){
  //     $('.skills').append(`<img src="${skill}" class="skill"/>`);
  // });
  obj.projects.forEach((project) => {
    $('.verbage').append(`<div id=${project.head} class="project-name">
                            <a href=${project.site} target="_blank">
                              ${project.head}
                            </a>
                          </div>`)
    console.log($(`#${project.head}`))
    $(`#${project.head}`).append(`<p class="desc"> ${project.desc} </p>`)
    $(`#${project.head}`).append('<div class="skills"> </div>')
    project.skills.forEach((skill) => {
      $(`#${project.head} .skills`).append(`<img src=${skill} class="skill">`)
    })
  })
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
  $('.blurb').append(`<img src="./images/icons/whiteX.png"class="close"/>`)
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


$("div").click(function (e) {

  // Remove any old one
  $(".ripple").remove();
  // Setup
  let posX = $(this).offset().left,
      posY = $(this).offset().top,
      divWidth = $(this).width(),
      divHeight =  $(this).height();

  // Add the element
  $(this).prepend("<span class='ripple'></span>");


 // Make it round!
  if(divWidth >= divHeight) {
    divHeight = divWidth;
  } else {
    divWidth = divHeight;
  }

  // Get the center of the element
  let x = e.pageX - posX - divWidth / 2;
  let y = e.pageY - posY - divHeight / 2;


  // Add the ripples CSS and start the animation
  $(".ripple").css({
    width: divWidth,
    height: divHeight,
    top: y + 'px',
    left: x + 'px'
  }).addClass("rippleEffect");
});



$('#projects').on('click', () => {
  addBlurb();
  addProjects();
})


$('#filfil').on('click', function(event){
  console.log(event);
   console.log(event.currentTarget.attributes.id)
  console.log(event.currentTarget.attributes[1].nodeValue)
  $('.blurb').remove();
  // createBlurb(event);
  addDesign(info.filfil)
  console.log("filfil showing");
});
$('#ga').on('click', function(event){
  $('.blurb').remove();
  console.log(event.currentTarget.attributes[1].nodeValue)
  // createBlurb(event);
  console.log(event)
  addTech(info.ga)
  console.log("ga showing");
});
$('#gsdo').on('click', function(event){
  $('.blurb').remove();
  console.log(event)
  // createBlurb(event);
  console.log(event.currentTarget.attributes[1].nodeValue)
  addDesign(info.gsdo)
  console.log("gsdo showing");
});
$('#nols').on('click', function(event){
  $('.blurb').remove();
  // createBlurb(event);
  console.log(event)
  addDesign(info.nols)
  console.log(event.currentTarget.attributes[1].nodeValue)
  console.log("nols showing");
});
$('#aboutme').on('click', function(event){
  $('.blurb').remove();
  // createBlurb(event);
  console.log(event.currentTarget.attributes[1].nodeValue)
  console.log(event.currentTarget.attributes.id)
  addTech(info.me)
  console.log("aboutme showing");
});

// $('.planet').on('click', (event) => {
//   console.log(event.currentTarget.attributes.id)
// })

})
