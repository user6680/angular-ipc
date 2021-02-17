import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
const remote = require('electron').remote;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public router: Router) { }

  ngOnInit(): void {

  }
  closeApp() {

    const win = remote.getCurrentWindow();
    win.close();

  }

}
