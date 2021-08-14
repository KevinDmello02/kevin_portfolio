import { Component, OnInit } from '@angular/core';
import { TimelineMax, TweenMax } from 'gsap';

declare var ScrollMagic: any;

@Component({
  selector: 'app-portfolio-skills',
  templateUrl: './portfolio-skills.component.html',
  styleUrls: ['./portfolio-skills.component.scss']
})
export class PortfolioSkillsComponent implements OnInit {

  constructor() { }
  controller = new ScrollMagic.Controller();

  showText = false;

  ngOnInit(): void {
    if (window.innerWidth < 600) {
      this.showText = true;
    } else {
      this.showText = false;
    }
    
    const skillsTimeline = new TimelineMax({paused:true, reversed:true});

    const angular = TweenMax.fromTo('.angular', 4, {
      opacity: 0,
      translateY: 50
    }, {
      opacity: 1,
      translateY: 0
    });
    const sass = TweenMax.fromTo('.sass', 4, {
      opacity: 0,
      translateY: 50,
      translateX: -50
    }, {
      opacity: 1,
      translateY: 0,
      translateX: 0
    });
    const mysql = TweenMax.fromTo('.mysql', 4, {
      opacity: 0,
      translateY: -50,
      translateX: -50
    }, {
      opacity: 1,
      translateY: 0,
      translateX: 0
    });
    const node = TweenMax.fromTo('.node', 4, {
      opacity: 0,
      translateY: -50
    }, {
      opacity: 1,
      translateY: 0
    });
    const mongodb = TweenMax.fromTo('.mongodb', 4, {
      opacity: 0,
      translateY: -50,
      translateX: 50
    }, {
      opacity: 1,
      translateY: 0,
      translateX: 0
    });
    const html = TweenMax.fromTo('.html', 4, {
      opacity: 0,
      translateY: 50,
      translateX: 50
    }, {
      opacity: 1,
      translateY: 0,
      translateX: 0
    });

    skillsTimeline.add(angular).add(sass).add(mysql).add(node).add(mongodb).add(html)
    let scene = new ScrollMagic.Scene({
      duration: 2000,
      triggerElement: '.skills',
      triggerHook: 0
    })
    .setTween(skillsTimeline)
    .addIndicators()
    .setPin('.skills')
    .addTo(this.controller);

  }

}
