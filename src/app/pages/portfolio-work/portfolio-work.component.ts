import { Component, OnInit } from '@angular/core';
import { TimelineMax, TweenMax } from 'gsap'

declare var ScrollMagic: any;

@Component({
  selector: 'app-portfolio-work',
  templateUrl: './portfolio-work.component.html',
  styleUrls: ['./portfolio-work.component.scss']
})
export class PortfolioWorkComponent implements OnInit {

  constructor() { }
  controllerWork = new ScrollMagic.Controller();

  scrWidth: any;

  ngOnInit(): void {

    this.scrWidth = window.innerWidth;

    console.log(window.innerWidth);

    if (this.scrWidth < 500) {
      var workTimeline = new TimelineMax({paused:true, reversed:true});

      const work1 = TweenMax.fromTo(".work1", 1, {
        x: "-30%",
        opacity: 0,
      }, {
        x: "0%",
        opacity: 1,
      })
      const work2 = TweenMax.fromTo(".work2", 1, {
        x: "0%",
        opacity: 0,
      }, {
        x: "-103%",
        opacity: 1,
      })
      const work3 = TweenMax.fromTo(".work3", 1, {
        x: "-500%",
        opacity: 0,
      }, {
        x: "-206%",
        opacity: 1,
      })


      workTimeline.add(work1).add(work2).add(work3);
    } else  {
      var workTimeline = new TimelineMax({paused:true, reversed:true});

      const work1 = TweenMax.fromTo('.work1', 4, {
        opacity: 0,
        translateY: 20 
      }, {
        opacity: 1,
        translateY: 0 
      });

      const work2 = TweenMax.fromTo('.work2', 4, {
        opacity: 0,
        translateY: 20 
      }, {
        opacity: 1,
        translateY: 0 
      });

      const work3 = TweenMax.fromTo('.work3', 4, {
        opacity: 0,
        translateY: 20 
      }, {
        opacity: 1,
        translateY: 0 
      });

      workTimeline.add(work1).add(work2).add(work3);
    }

    let scene = new ScrollMagic.Scene({
      duration: 1200,
      triggerElement: '.work',
      triggerHook: 0
    })
    .setTween(workTimeline)
    .addIndicators()
    .setPin('.work')
    .addTo(this.controllerWork);
  }

}
