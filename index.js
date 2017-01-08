$(document).ready(function(){
  console.log("script loaded");


  const classes = [$('.blurb'), $('.filfil'), $('.ga'), $('.gsdo'), $('.nols'), $('.schminop')];
  [blurbs, filfil, ga, gsdo, nols, schminop] = classes;

  blurbs.hide();

// $('body'),on('click', function(){
//       blurbs.hide();
// });

$('.planet').on('click',function(event) {
    event.preventDefault();
    blurbs.hide();
    console.log("blubs hidden");
    /* Act on the event */
});


$('#filfil').on('click', function(e){
  filfil.show();
  console.log("filfil showing");
});
$('#ga').on('click', function(e){
  ga.show();
  console.log("ga showing");
});
$('#gsdo').on('click', function(e){
  gsdo.show();
  console.log("gsdo showing");
});
$('#nols').on('click', function(e){
  nols.show();
  console.log("nols showing");
});
$('#filfil').on('click', function(e){
  filfil.show();
  console.log("filfil showing");
});







})
