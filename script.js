!function(a){var b="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;"function"==typeof define&&define.amd?define(["exports"],function(c){b.ParticleNetwork=a(b,c)}):"object"==typeof module&&module.exports?module.exports=a(b,{}):b.ParticleNetwork=a(b,{})}(function(a,b){var c=function(a){this.canvas=a.canvas,this.g=a.g,this.particleColor=a.options.particleColor,this.x=Math.random()*this.canvas.width,this.y=Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*a.options.velocity,y:(Math.random()-.5)*a.options.velocity}};return c.prototype.update=function(){(this.x>this.canvas.width+20||this.x<-20)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+20||this.y<-20)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},c.prototype.h=function(){this.g.beginPath(),this.g.fillStyle=this.particleColor,this.g.globalAlpha=.7,this.g.arc(this.x,this.y,1.5,0,2*Math.PI),this.g.fill()},b=function(a,b){this.i=a,this.i.size={width:this.i.offsetWidth,height:this.i.offsetHeight},b=void 0!==b?b:{},this.options={particleColor:void 0!==b.particleColor?b.particleColor:"#fff",background:void 0!==b.background?b.background:"#1a252f",interactive:void 0!==b.interactive?b.interactive:!0,velocity:this.setVelocity(b.speed),density:this.j(b.density)},this.init()},b.prototype.init=function(){if(this.k=document.createElement("div"),this.i.appendChild(this.k),this.l(this.k,{position:"absolute",top:0,left:0,bottom:0,right:0,"z-index":1}),/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background))this.l(this.k,{background:this.options.background});else{if(!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.options.background))return console.error("Please specify a valid background image or hexadecimal color"),!1;this.l(this.k,{background:'url("'+this.options.background+'") no-repeat center',"background-size":"cover"})}if(!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor))return console.error("Please specify a valid particleColor hexadecimal color"),!1;this.canvas=document.createElement("canvas"),this.i.appendChild(this.canvas),this.g=this.canvas.getContext("2d"),this.canvas.width=this.i.size.width,this.canvas.height=this.i.size.height,this.l(this.i,{position:"relative"}),this.l(this.canvas,{"z-index":"20",position:"relative"}),window.addEventListener("resize",function(){return this.i.offsetWidth===this.i.size.width&&this.i.offsetHeight===this.i.size.height?!1:(this.canvas.width=this.i.size.width=this.i.offsetWidth,this.canvas.height=this.i.size.height=this.i.offsetHeight,clearTimeout(this.m),void(this.m=setTimeout(function(){this.o=[];for(var a=0;a<this.canvas.width*this.canvas.height/this.options.density;a++)this.o.push(new c(this));this.options.interactive&&this.o.push(this.p),requestAnimationFrame(this.update.bind(this))}.bind(this),500)))}.bind(this)),this.o=[];for(var a=0;a<this.canvas.width*this.canvas.height/this.options.density;a++)this.o.push(new c(this));this.options.interactive&&(this.p=new c(this),this.p.velocity={x:0,y:0},this.o.push(this.p),this.canvas.addEventListener("mousemove",function(a){this.p.x=a.clientX-this.canvas.offsetLeft,this.p.y=a.clientY-this.canvas.offsetTop}.bind(this)),this.canvas.addEventListener("mouseup",function(a){this.p.velocity={x:(Math.random()-.5)*this.options.velocity,y:(Math.random()-.5)*this.options.velocity},this.p=new c(this),this.p.velocity={x:0,y:0},this.o.push(this.p)}.bind(this))),requestAnimationFrame(this.update.bind(this))},b.prototype.update=function(){this.g.clearRect(0,0,this.canvas.width,this.canvas.height),this.g.globalAlpha=1;for(var a=0;a<this.o.length;a++){this.o[a].update(),this.o[a].h();for(var b=this.o.length-1;b>a;b--){var c=Math.sqrt(Math.pow(this.o[a].x-this.o[b].x,2)+Math.pow(this.o[a].y-this.o[b].y,2));c>120||(this.g.beginPath(),this.g.strokeStyle=this.options.particleColor,this.g.globalAlpha=(120-c)/120,this.g.lineWidth=.7,this.g.moveTo(this.o[a].x,this.o[a].y),this.g.lineTo(this.o[b].x,this.o[b].y),this.g.stroke())}}0!==this.options.velocity&&requestAnimationFrame(this.update.bind(this))},b.prototype.setVelocity=function(a){return"fast"===a?1:"slow"===a?.33:"none"===a?0:.66},b.prototype.j=function(a){return"high"===a?5e3:"low"===a?2e4:isNaN(parseInt(a,10))?1e4:a},b.prototype.l=function(a,b){for(var c in b)a.style[c]=b[c]},b});

const PAGE_ANIMATION_DURATION = 400;
let uiCache = {};

var canvasDiv = document.getElementById('particle-canvas');
var options = {
//   particleColor: '#999',
//   background: '#DDD',
//   interactive: false,
//   speed: 'slow',
//   density: 'high'
particleColor: '#875',
  background: '#333',
  interactive: false,
  speed: 'slow',
  density: 'high'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);

// var canvasDiv2 = document.getElementsByClassName('content-page')[2];
// var options2 = {
//   particleColor: '#775',
//   background: '#333',
//   interactive: false,
//   speed: 'slow',
//   density: 'high'
// };
// var particleCanvas2 = new ParticleNetwork(canvasDiv2, options2);

var currentPage = "home";

//var hash = window.location.hash;

//FIXME: 
//location of second slide (left) broken on smaller browser size


function hideFocusProject()
{
    if ($(".focus_project").is(":hidden")) return;
    $("iframe").remove();
    $(".focus_project *").animate({opacity: "0"}, PAGE_ANIMATION_DURATION/2, function(){
        $(".focus_project").hide();
    });
    // $(".focus_project").animate({top: "-105vh"}, PAGE_ANIMATION_DURATION/2, function(){
    //     $(".focus_project").hide();
    // });
}

function changePage(target)
{
    //hideFocusProject();
    if  (currentPage == target)
    {
        return;
    }

    if (currentPage == "home")
    {
        uiCache.nameTitle.fadeOut( 200, function() {
            uiCache.nameTitle.hide();
        });
        uiCache.sectionsBig.fadeOut( 200, function() {
            uiCache.sectionsBig.hide();
        });
        uiCache.emailLink.fadeOut( 200, function() {
            uiCache.emailLink.hide();
        });

        $(".content-page[data-pageid="+target+"]").animate({left: "0px"}, PAGE_ANIMATION_DURATION, function() {
            
            //$("#particle-canvas").hide();
        });
    }
    else
    {
        if (target == "home")
        {
            uiCache.nameTitle.show( );
            uiCache.sectionsBig.show( );
            uiCache.emailLink.show( );
            $(".content-page").animate({left: "105%"}, 700, function(){
                
            });
        }
        else
        {
            $(".content-page[data-pageid="+currentPage+"]").animate({left: "105%"}, PAGE_ANIMATION_DURATION/2, function()
            {
                $(".content-page[data-pageid="+target+"]").animate({left: "0px"}, PAGE_ANIMATION_DURATION/2, function()
                {
                    uiCache.nameTitle.hide();
                    uiCache.sectionsBig.hide();
                    uiCache.emailLink.hide();
                    //$("#particle-canvas").hide();
                });
            });
        }
    }

    currentPage = target;
}

window.onhashchange = function()
{       
    if (location.hash.length > 0)
    {        
        changePage(location.hash.substring(1));
    } 
}

$( document ).ready(function()
{
    uiCache.nameTitle   = $(".name-title");
    uiCache.sectionsBig = $(".sections-big");
    uiCache.emailLink   = $(".emaillink");

    // if(history.pushState) {
    //     history.pushState(null, null, '#myhash');
    // }
    // else {
    //     location.hash = '#myhash';
    // }

    if (location.hash.length > 0)
    {        
        changePage(location.hash.substring(1));
    } 

    $(".focus_project-close").click(function(){
        hideFocusProject();
    });

    $(".sidebar-icon, .section-tile").each(function ()
    {
      let target = $(this).data("target");

      $(this).click(function()
      {
          $(".sidebar-icon").css("border-color", "transparent");
          $(".sidebar-icon[data-target="+target+"]").css("border-color", "transparent");

          hideFocusProject();
          window.location.hash = target;
      }); //click

    }); //content switchers

    //find all groups
    function onlyUnique(value, index, self) { return self.indexOf(value) === index; }
    //pureList = pureList.filter(onlyUnique);

    let project_groups_strings = [];
    for (let i = 0; i < projects.length; i++)
    {
        projects[i].id = i;
        project_groups_strings.push(projects[i].group);
    }
    project_groups_strings = project_groups_strings.filter(onlyUnique);

    let project_groups = {};
    for (let i = 0; i < project_groups_strings.length; i++)
    {
        project_groups[project_groups_strings[i]] = [];
        for (let pp = 0; pp < projects.length; pp++)
        {
            if (projects[pp].group === project_groups_strings[i])
            {
                project_groups[project_groups_strings[i]].push(projects[pp]);
            }
        }
    }

    let _insert = "";
    for (const [groupname, projects] of Object.entries(project_groups))
    {
        _insert = _insert + `<div class='skill-group' data-group='${groupname}'><h3>${groupname}</h3><div class='skill-group-list' data-group='${groupname}'>`;
        for (let x = 0; x < projects.length; x++)
        {
            if (!projects[x].proglang) projects[x].proglang = "";

            _insert = _insert + `<div class='sprite-cover sprite-cover-${projects[x].img.split(".")[0]} project_tile'  data-arrayindex='${x}' 
            data-project='${projects[x].img}' onclick='projectTileClick(${projects[x].id});'><div class='tile-label'>${projects[x].minilabel}</div>
            <div class='tile-proglang'>${projects[x].proglang}</div></div>`;
        }
        _insert = _insert + "</div></div><br />";
    }
    $(".content-page[data-pageid='projects'] .projects-container").append(_insert);

    $( window ).resize(function() {
        if ($(".focus_project").is(":visible"))
        {
            console.log($(".focus_project-flex").width());
            if ($(".focus_project-slider_prev").is(":visible")) // we are on slide 2
            {
                let slidew = $(".focus_project").width() * 0.5;
                $(".focus_project-slider_slide-1").css("left", "-"+slidew+"px");
                $(".focus_project-slider_slide-2").css("left", "0px");
            }
            else if ($(".focus_project-slider_next").is(":visible")) // we are on slide 1
            {
                let slidew = $(".focus_project").width() * 0.5;
                $(".focus_project-slider_slide-1").css("left", "0px");
                $(".focus_project-slider_slide-2").css("left", slidew + "px");
            }
        }
    });


    $(document).mouseup(function(e) 
    {
        var focus_c = $(".focus_project");
        var focus_inner = $(".focus_project-flex");
        if (focus_c.is(":visible") && $(".focus_project-flex").is(":visible"))
        {
            if (!focus_inner.is(e.target) && focus_inner.has(e.target).length === 0) 
            {
                //focus_c.hide();
                hideFocusProject();
            }
        }

        
    });


});

function projectTileClick(_id)
{
    let obj = projects[_id];

    let slide_one = $(".focus_project-slider_slide-1");
    let slide_two = $(".focus_project-slider_slide-2");

    if (obj.bigimg)
        slide_one.html("<a href='img/project-big-screenshots/"+obj.bigimg+"' target='_blank'><div class='slide-img' style='background-image: url(img/project-big-screenshots/"+obj.bigimg+")' /></div></a>");
    else
        slide_one.html("<div class='slide-img' style='background-image: url(img/project-big-screenshots/missing.jpg)' /></div>");

    if (obj.video) 
        slide_two.html("<iframe src='"+obj.video+"' frameborder='0' allowfullscreen></iframe>");
    else if (obj.bigimg2)
        slide_two.html("<a href='img/project-big-screenshots/"+obj.bigimg2+"' target='_blank'><div class='slide-img' style='background-image: url(img/project-big-screenshots/"+obj.bigimg2+")' /></div></a>");
    else
        slide_two.html("<div class='slide-img' style='background-image: url(img/project-big-screenshots/missing.jpg)' /></div>");

    let wfac = ("" + $(".focus_project-flex").css("width")).split("%")[0];
    wfac = parseInt(wfac) / 100.0;

    let slidew = $(".focus_project").width() * wfac;
    console.log(slidew);
    slide_one.css("left", "0px");
    slide_two.css("left", slidew + "px");

    let slider_arrow_prev = $(".focus_project-slider_prev");
    let slider_arrow_next = $(".focus_project-slider_next");

    slider_arrow_prev.click(function()
    {
        slide_one.animate({left: "0px"}, PAGE_ANIMATION_DURATION/8);
        slide_two.animate({left: slidew+"px"}, PAGE_ANIMATION_DURATION/8);
        slider_arrow_prev.hide();
        slider_arrow_next.show();
    });
    slider_arrow_next.click(function()
    {
        slide_one.animate({left: "-"+slidew+"px"}, PAGE_ANIMATION_DURATION/8);
        slide_two.animate({left: "0px"}, PAGE_ANIMATION_DURATION/8);
        slider_arrow_prev.show();
        slider_arrow_next.hide();    
    });
    slider_arrow_prev.hide();
    slider_arrow_next.show();

    //focus project content start
    $(".focus_project-pic").css("background-image", "url(img/project-big-screenshots/" + obj.bigimg + ")");
    $(".focus_project-title").text(obj.title);
    $(".focus_project-subline").text(obj.minilabel);
    $(".focus_project-proglang").text(obj.proglang);
    $(".focus_project-tags").html("");
    for (let i = 0; i < obj.tags.length; i++)
    {
        const e = obj.tags[i];
        $(".focus_project-tags").append("<span class='tagspan' style='opacity: 1'>" + e + "</span>");
    }
    $(".focus_project-desc").html(obj.desc).css("opacity", "1");
    $(".focus_project-desc *").css("opacity", "1");
    
    //focus project content end

    $(".focus_project").show();
    // $(".focus_project").animate({top: "0px"}, PAGE_ANIMATION_DURATION/2, function()
    // {
    //     $(".focus_project *").animate({opacity: "1.0"}, PAGE_ANIMATION_DURATION/2);
    // });
    $(".focus_project *").animate({opacity: "1.0"}, PAGE_ANIMATION_DURATION/2);
    
}