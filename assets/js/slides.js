var slide0 = new Slide("assets/image/ComputerizedSportsPools.png", "title slide")
var slide1 = new Slide("assets/image/DesignCriteria.png", "design Criteria")
var slide2 = new Slide("assets/image/RussBucksBlockDiagram.png", "block diagram")
var slide3 = new Slide("assets/image/RussBucksDatabaseDesign.png", "database diagram")
var poolProjectList= [slide0,slide1,slide2,slide3];
                       
var poolProject = new Project(poolProjectList);
var projects = [poolProject];

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
 

 
 