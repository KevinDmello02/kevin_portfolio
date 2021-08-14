import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  windowWidth: string;
  showSplashScreen = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.windowWidth = '-' + window.innerHeight +'px';
      setTimeout(() => {
        this.showSplashScreen = false;
      },500); 
    }, 3000);
  }

}
