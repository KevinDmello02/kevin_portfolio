import { Component, OnInit } from '@angular/core';
import { TimelineMax, TweenMax } from 'gsap'

declare var ScrollMagic: any;

@Component({
  selector: 'app-portfolio-education',
  templateUrl: './portfolio-education.component.html',
  styleUrls: ['./portfolio-education.component.scss']
})
export class PortfolioEducationComponent implements OnInit {

  constructor() { }

  controller = new ScrollMagic.Controller();

  ngOnInit(): void {

    const eduTimeline = new TimelineMax({paused:true, reversed:true});

    const time1 = TweenMax.fromTo('.time1', 4, {
      opacity: 0,
      translateY: 30,
    }, {
      opacity: 1,
      translateY: 0,
    });
    const time2 = TweenMax.fromTo('.time2', 4, {
      opacity: 0,
      translateY: 30,
    }, {
      opacity: 1,
      translateY: 0,
    });
    const time3 = TweenMax.fromTo('.time3', 4, {
      opacity: 0,
      translateY: 30,
    }, {
      opacity: 1,
      translateY: 0,
    });

    eduTimeline.add(time1).add(time2).add(time3)

    let scene = new ScrollMagic.Scene({
      duration: 1500,
      triggerElement: '.education',
      triggerHook: 0
    })
    .setTween(eduTimeline)
    .addIndicators()
    .setPin('.education')
    .addTo(this.controller);
  }

}
