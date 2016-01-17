var slide0 = new Slide("assets/image/ComputerizedSportsPools.png", "title slide")
var slide1 = new Slide("assets/image/DesignCriteria.png", "design Criteria")
var slide2 = new Slide("assets/image/RussBucksBlockDiagram.png", "block diagram")
var slide3 = new Slide("assets/image/RussBucksDatabaseDesign.png", "database diagram")
var poolProjectList= [slide0,slide1,slide2,slide3];

                       
var poolProject = new Project(poolProjectList);
var projects = [poolProject];

slide0 = new Slide("assets/image/SDM_s1.png", "slide 1");
slide1 = new Slide("assets/image/SDM_s2.png", "slide 2");
slide2 = new Slide("assets/image/SDM_s3.png", "slide 3");
slide3 = new Slide("assets/image/SDM_s4.png", "slide 4");
var slide4 = new Slide("assets/image/SDM_s5.png", "slide 5");
var slide5 = new Slide("assets/image/SDM_s6.png", "slide 6");
var slide6 = new Slide("assets/image/SDM_s7.png", "slide 7");
var slide7 = new Slide("assets/image/SDM_s8.png", "slide 8");
var slide8 = new Slide("assets/image/SDM_s9.png", "slide 9");
var slide9 = new Slide("assets/image/SDM_s10.png", "slide 10");
var slide10 = new Slide("assets/image/SDM_s11.png", "slide 11");
var slide11 = new Slide("assets/image/SDM_s12.png", "slide 12");
var slide12 = new Slide("assets/image/SDM_s13.png", "slide 13");
var slide13 = new Slide("assets/image/SDM_s14.png", "slide 14");
var slide14 = new Slide("assets/image/SDM_s15.png", "slide 15");
var slide15 = new Slide("assets/image/SDM_s16.png", "slide 16");
var slide16 = new Slide("assets/image/SDM_s17.png", "slide 17");
var slide17 = new Slide("assets/image/SDM_s18.png", "slide 18");
var slide18 = new Slide("assets/image/SDM_s19.png", "slide 19");
var slide19 = new Slide("assets/image/SDM_s20.png", "slide 20");
var slide20 = new Slide("assets/image/SDM_s21.png", "slide 21");
var slide21 = new Slide("assets/image/SDM_s22.png", "slide 22");

var statisticsProjectList = [slide0,slide1,slide2,slide3,slide4,slide5,slide6,slide7,slide8,slide9,slide10,
    slide11,slide12,slide13,slide4,slide15,slide16,slide17,slide18,slide19,slide20,slide21];

var statisticsProject = new Project(statisticsProjectList);
projects.push(statisticsProject);



var slideListElem = document.getElementById("slide-list");

function Slide(src, alt) {
    this.src=src;
    this.alt=alt;
}
 
function Project(slideList) {
     this.slideList = slideList;
}

function getSlides(projectName) {
     for (var i in projectName.slideList) {
         var listElem = document.createElement('li');
         var imgElem = document.createElement('img');
         imgElem.src = projectName.slideList[i].src;
         imgElem.alt = projectName.slideList[i].alt;        
         listElem.appendChild(imgElem);
         slideListElem.appendChild(listElem);         
     }
}

function clearProject() {
   
    slideListElem.innerHTML= "";
    return
}
 
$(document).ready(function() {
    
    getSlides(projects[0]);
    
    

    $(".rslides").responsiveSlides({maxwidth:640,
                                    auto: false,
                                    pager: true});
 });
 

 
 