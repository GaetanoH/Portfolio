import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss']
})
export class MyHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }

  scrollEvent = (event: any): void => {
    event;
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("title").style.fontSize = "1.5em";
    } else {
      document.getElementById("title").style.fontSize = "2.5em";
    }
  }

}
