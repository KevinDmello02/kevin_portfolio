import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { TimelineMax, TweenMax } from 'gsap'
declare var ScrollMagic: any;

@Component({
  selector: 'app-portfolio-overview',
  templateUrl: './portfolio-overview.component.html',
  styleUrls: ['./portfolio-overview.component.scss']
})
export class PortfolioOverviewComponent implements OnInit {

  section: any;
  navLi: any;

  constructor() { }
  controller = new ScrollMagic.Controller();

  navs = [
    {
      'about': false,
    },
    {
      'work': false,
    },
    {
      'education': false,
    },
    {
      'skills': false,
    },
    {
      'resume': false
    }
  ];

  scrWidth: any;

  ngOnInit(): void {

    this.section = document.querySelectorAll('.element-data');
    this.navLi = document.querySelectorAll('li');

    this.scrWidth = window.screen.width;

    console.log(this.scrWidth);

    const introTextTime = new TimelineMax({paused:true, reversed:true});
    const introText2 = TweenMax.fromTo('.intro-text2', 4, {
      opacity: 0
    }, {
      opacity: 1
    });
    const introText3 = TweenMax.fromTo('.intro-text3', 4, {
      opacity: 0
    }, {
      opacity: 1
    });

    let imgBox;

    if (this.scrWidth < 500) {
      imgBox = TweenMax.fromTo('.intro', 1, {
        backgroundImage: 'url()',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        backgroundSize: '50%',
        backgroundPosition: '50% 50%',
        backgroundBlendMode: 'color'
      }, {
        backgroundImage: 'url(/assets/images/potrait.jpg)',
        backgroundSize: '100%',
        backgroundPosition: '50% 38%',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        backgroundBlendMode: 'none'
      });
    } else {
      imgBox = TweenMax.fromTo('.intro', 4, {
        backgroundImage: 'url()',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        backgroundPosition: '100% 50%',
        backgroundBlendMode: 'color'
      }, {
        backgroundImage: 'url(/assets/images/potrait.jpg)',
        backgroundPosition: '85% 50%',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        backgroundBlendMode: 'none'
      });
    }

    
    const textBox = TweenMax.fromTo('.box', 4, {
      opacity: 1,
      scale: 1
    }, {
      opacity: 0,
      scale: 0.7,
      display: 'none'
    });
    const about = TweenMax.fromTo('.heading', 4, {
      opacity: 0,
      translateY: 20 
    }, {
      opacity: 1,
      translateY: 0 
    });
    const aboutText = TweenMax.fromTo('.about-text', 4, {
      opacity: 0,
      translateY: 20 
    }, {
      opacity: 1,
      translateY: 0 
    });
    introTextTime.add(introText2).add(introText3).add(imgBox).add(textBox).add(about).add(aboutText)
    let scene = new ScrollMagic.Scene({
      duration: 3000,
      triggerElement: '.intro',
      triggerHook: 0
    })
    .setTween(introTextTime)
    .addIndicators()
    .setPin('.intro')
    .addTo(this.controller);
  }

  scrollToElement(element) {
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    let current = '';
    this.section.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset + 600 > sectionTop) {
        current = section.getAttribute('id');        
      }
    })
    
    this.navLi.forEach((li) => {
      if (current != '') {
        li.classList.remove('data');
        if (current != '' && li.classList.toString().indexOf(current) !== -1) {
          li.classList.add('data');
        }
      } else {
        if (current != '' && li.classList.toString().indexOf(current) !== -1) {
          li.classList.add('data');
        }
      }
    })
  }

}
