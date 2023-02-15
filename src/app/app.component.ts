import { stagger } from '@angular/animations';
import { Component, HostListener, ElementRef, ViewChild, OnInit } from '@angular/core';
import { gsap } from 'gsap';
declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  //DECLARATE ANIMATION TIMELIME FOR BURGUER MENU 
  tl_burguer = gsap.timeline({paused:true, reversed:true});

  title = 'proyecto-angular';
  open: boolean = false;
  navfixed: boolean = false;
  isActive: boolean = false;
  contente: any =[];
   constructor(){

    
   }

   ngOnInit(){
    /* SCROLL SMOOT */

    var elems = document.querySelectorAll(".btn-menu");

    var onClick = function (event:any) {
        var btn = event.target.getAttribute("href");
        event.preventDefault();
        $("html, body").animate({ scrollTop: $(btn).offset().top }, 1000);
    }
    elems.forEach((el) =>{
        el.addEventListener("click", onClick);
    });

    // CALL ANIMATION BURGER
    this.CrateAnimationMenu();

   }

   ngAfterViewInit(){

    /* ANIMATION HEADER LETTERS */
  
    var tl = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}});

        tl.to('.texto', {
          opacity: 1, 
          duration: 1,
          ease: "SlowMo.easeOut",
          stagger: 0.2
        })
        tl.fromTo('#icon_frist', {
          opacity: 0,
          scale: 0.6
        }, {
          duration: 1,
          opacity: 1, 
          scale: 1,
          ease: "elastic" //"power2.inOut"
        })
        tl.to('#laptop', {
          y: 0,
          duration:1
        })
        tl.fromTo('#fondoPc', {
    
          opacity: 0
        },
        {
          opacity: 1
        })
        tl.to('#menorQue', {
          opacity: 1
        })
        tl.to('#mayorQue', {
          opacity: 1
        })
        tl.to('.animain', {
          opacity: 1, 
          duration: 0.5
        })
        tl.to('#anitext', {
          y: 0,
          x: 0, 
          duration: 1
        })
        tl.to('#hranimate', {
          x: 0, 
          duration: 1
        })
        tl.to('#bg-video', {
          opacity: 0.2,
          duration: 0.5
        });



  }

  //NAVBAR FIXED
   @HostListener('window:scroll', ['$event']) onscroll(){
    if(window.scrollY > 411){
      this.navfixed = true
      this.isActive = true
    }
    else{
      this.navfixed = false
      this.isActive = false
    }
   }

   CrateAnimationMenu(){

    /* ANIMATION BURGER MENU  */

    this.tl_burguer.to(' .top', {duration: .2, y:'-9px', transformOrigin: '50% 50%'}, 'burg')
    this.tl_burguer.to(' .bot', {duration: .2, y:'9px', transformOrigin: '50% 50%'}, 'burg')
    this.tl_burguer.to(' .mid', {duration: .2, scale:0.1, transformOrigin: '50% 50%'}, 'burg')
    this.tl_burguer.add('rotate')
    this.tl_burguer.to(' .top', {duration: .2, y:'5'}, 'rotate')
    this.tl_burguer.to(' .bot', {duration: .2, y:'-5'}, 'rotate')
    this.tl_burguer.to(' .top', {duration: .2, rotationZ:45, transformOrigin: '50% 50%'}, 'rotate')
    this.tl_burguer.to(' .bot', {duration: .2, rotationZ:-45, transformOrigin: '50% 50%'}, 'rotate')
   }


   openNav(){

    //EVEN ON CLICK FOR STAR ANIMATION
    this.tl_burguer.reversed() ? this.tl_burguer.play() : this.tl_burguer.reverse();

    //EVEN ON CLICK FOR DISPLAY MENU
    this.open = !this.open;
  }

}

