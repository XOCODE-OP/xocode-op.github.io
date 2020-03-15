// particle.min.js hosted on GitHub
// Scroll down for initialisation code

!function(a){var b="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;"function"==typeof define&&define.amd?define(["exports"],function(c){b.ParticleNetwork=a(b,c)}):"object"==typeof module&&module.exports?module.exports=a(b,{}):b.ParticleNetwork=a(b,{})}(function(a,b){var c=function(a){this.canvas=a.canvas,this.g=a.g,this.particleColor=a.options.particleColor,this.x=Math.random()*this.canvas.width,this.y=Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*a.options.velocity,y:(Math.random()-.5)*a.options.velocity}};return c.prototype.update=function(){(this.x>this.canvas.width+20||this.x<-20)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+20||this.y<-20)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},c.prototype.h=function(){this.g.beginPath(),this.g.fillStyle=this.particleColor,this.g.globalAlpha=.7,this.g.arc(this.x,this.y,1.5,0,2*Math.PI),this.g.fill()},b=function(a,b){this.i=a,this.i.size={width:this.i.offsetWidth,height:this.i.offsetHeight},b=void 0!==b?b:{},this.options={particleColor:void 0!==b.particleColor?b.particleColor:"#fff",background:void 0!==b.background?b.background:"#1a252f",interactive:void 0!==b.interactive?b.interactive:!0,velocity:this.setVelocity(b.speed),density:this.j(b.density)},this.init()},b.prototype.init=function(){if(this.k=document.createElement("div"),this.i.appendChild(this.k),this.l(this.k,{position:"absolute",top:0,left:0,bottom:0,right:0,"z-index":1}),/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background))this.l(this.k,{background:this.options.background});else{if(!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.options.background))return console.error("Please specify a valid background image or hexadecimal color"),!1;this.l(this.k,{background:'url("'+this.options.background+'") no-repeat center',"background-size":"cover"})}if(!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor))return console.error("Please specify a valid particleColor hexadecimal color"),!1;this.canvas=document.createElement("canvas"),this.i.appendChild(this.canvas),this.g=this.canvas.getContext("2d"),this.canvas.width=this.i.size.width,this.canvas.height=this.i.size.height,this.l(this.i,{position:"relative"}),this.l(this.canvas,{"z-index":"20",position:"relative"}),window.addEventListener("resize",function(){return this.i.offsetWidth===this.i.size.width&&this.i.offsetHeight===this.i.size.height?!1:(this.canvas.width=this.i.size.width=this.i.offsetWidth,this.canvas.height=this.i.size.height=this.i.offsetHeight,clearTimeout(this.m),void(this.m=setTimeout(function(){this.o=[];for(var a=0;a<this.canvas.width*this.canvas.height/this.options.density;a++)this.o.push(new c(this));this.options.interactive&&this.o.push(this.p),requestAnimationFrame(this.update.bind(this))}.bind(this),500)))}.bind(this)),this.o=[];for(var a=0;a<this.canvas.width*this.canvas.height/this.options.density;a++)this.o.push(new c(this));this.options.interactive&&(this.p=new c(this),this.p.velocity={x:0,y:0},this.o.push(this.p),this.canvas.addEventListener("mousemove",function(a){this.p.x=a.clientX-this.canvas.offsetLeft,this.p.y=a.clientY-this.canvas.offsetTop}.bind(this)),this.canvas.addEventListener("mouseup",function(a){this.p.velocity={x:(Math.random()-.5)*this.options.velocity,y:(Math.random()-.5)*this.options.velocity},this.p=new c(this),this.p.velocity={x:0,y:0},this.o.push(this.p)}.bind(this))),requestAnimationFrame(this.update.bind(this))},b.prototype.update=function(){this.g.clearRect(0,0,this.canvas.width,this.canvas.height),this.g.globalAlpha=1;for(var a=0;a<this.o.length;a++){this.o[a].update(),this.o[a].h();for(var b=this.o.length-1;b>a;b--){var c=Math.sqrt(Math.pow(this.o[a].x-this.o[b].x,2)+Math.pow(this.o[a].y-this.o[b].y,2));c>120||(this.g.beginPath(),this.g.strokeStyle=this.options.particleColor,this.g.globalAlpha=(120-c)/120,this.g.lineWidth=.7,this.g.moveTo(this.o[a].x,this.o[a].y),this.g.lineTo(this.o[b].x,this.o[b].y),this.g.stroke())}}0!==this.options.velocity&&requestAnimationFrame(this.update.bind(this))},b.prototype.setVelocity=function(a){return"fast"===a?1:"slow"===a?.33:"none"===a?0:.66},b.prototype.j=function(a){return"high"===a?5e3:"low"===a?2e4:isNaN(parseInt(a,10))?1e4:a},b.prototype.l=function(a,b){for(var c in b)a.style[c]=b[c]},b});

// Initialisation

const PAGE_ANIMATION_DURATION = 400;

var canvasDiv = document.getElementById('particle-canvas');
var options = {
  particleColor: '#999',
  background: '#DDD',
  interactive: true,
  speed: 'slow',
  density: 'high'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);

var currentPage = "home";

//var hash = window.location.hash;



function hideFocusProject()
{
    if ($(".focus_project").is(":hidden")) return;
    $(".focus_project *").animate({opacity: "0"}, PAGE_ANIMATION_DURATION/2);
    $(".focus_project").animate({top: "-105vh"}, PAGE_ANIMATION_DURATION/2, function(){
        $(".focus_project").hide();
    });
}

function changePage(target)
{
    //hideFocusProject();
    if  (currentPage == target)
    {
        return;
    }

    $(".name-title").show();
    $(".sections-big").show();
    $("#particle-canvas").show();

    if (currentPage == "home")
    {
        $(".content-page[data-pageid="+target+"]").animate({left: "0px"}, PAGE_ANIMATION_DURATION, function() {
        $(".name-title").hide();
        $(".sections-big").hide();
        $("#particle-canvas").hide();
        });
    }
    else
    {
        if (target == "home")
        {
            $(".content-page").animate({left: "105%"}, 700);
        }
        else
        {
            $(".content-page[data-pageid="+currentPage+"]").animate({left: "105%"}, PAGE_ANIMATION_DURATION/2, function()
            {
                $(".content-page[data-pageid="+target+"]").animate({left: "0px"}, PAGE_ANIMATION_DURATION/2, function()
                {
                    $(".name-title").hide();
                    $(".sections-big").hide();
                    $("#particle-canvas").hide();
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
          hideFocusProject();
          window.location.hash = target;
      }); //click

    }); //content switchers

    //skills
    let _insert = "";
    for (let i = 0; i < skills.length; i++)
    {
        _insert = _insert + "<span>" + skills[i] + "</span>";
    }
    $(".content-page[data-pageid='skills'] .skills-container").append(_insert);

    //projects page
    _insert = "";
    for (let i = 0; i < projects.length; i++)
    {
        if (!projects[i].proglang) projects[i].proglang = "";
        _insert = _insert + 
        "<div class='project_tile' style='background-image: url(img/tile_thumbnails/"+
        projects[i].img+")' data-arrayindex='"+i+"' data-project='"+projects[i].title+"'><div class='tile-label'>"+
        projects[i].minilabel+"</div><div class='tile-proglang'>"+
        projects[i].proglang+"</div></div>";
    }
    $(".content-page[data-pageid='projects'] .projects-container").append(_insert);

    $(".project_tile").each(function()
    {
        $(this).click(function()
        {
            let ii = parseInt($(this).data("arrayindex"));
            let obj = projects[ii];
            $(".focus_project-video iframe").attr("src", "");

            $(".focus_project").show();
            $(".focus_project").animate({top: "0px"}, PAGE_ANIMATION_DURATION/2, function()
            {
                $(".focus_project *").animate({opacity: "1.0"}, PAGE_ANIMATION_DURATION/2);
                if (obj.bigimg) 
                {
                    $(".focus_project-pic").css("background-color", "black");
                    $(".focus_project-pic").css("background-image", "url(img/project-big/" + obj.bigimg + ")");
                    //console.log("big image load: " + $(".focus_project-pic").css("background-image"));
                }
                else
                {
                    $(".focus_project-pic").css("background-color", "transparent");
                }
                //$(".focus_project-pic").css("background-image", "url(img/project-big/construct.png)");
                $(".focus_project-title").text(obj.title);
                $(".focus_project-proglang").text(obj.proglang);
                $(".focus_project-tags").html("");
                for (let i = 0; i < obj.tags.length; i++)
                {
                    const e = obj.tags[i];
                    $(".focus_project-tags").append("<span class='tagspan' style='opacity: 1'>" + e + "</span>");
                }
                $(".focus_project-desc").html(obj.desc);
                $(".focus_project-desc").css("opacity", "1");
                $(".focus_project-desc *").css("opacity", "1");
                if (obj.video) 
                {
                    $(".focus_project-video iframe").show();
                    if (obj.video.startsWith("http"))
                    {
                         $(".focus_project-video iframe").attr("src", obj.video);
                    }
                    else
                    {
                        $(".focus_project-video iframe").attr("src", "https://www.youtube.com/embed/" + obj.video);
                    }
                }
                else
                {
                    //$(".focus_project-video iframe").hide();
                    $(".focus_project-video iframe").attr("src", "img/novid.png");
                }
                
            });
            
        });
    });

    // $(document).mouseup(function(e) 
    // {
    //     var container = $(".focus_project");
    //     if (!container.is(e.target) && container.has(e.target).length === 0) 
    //     {
    //         container.hide();
    //     }
    // });


});

