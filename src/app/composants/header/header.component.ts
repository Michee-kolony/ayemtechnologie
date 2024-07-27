import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menu: boolean = false;
  modal : boolean = false;
  menumobile: boolean = true;
  togglemenu() {
    this.menu = true;
  }

  closemenu() {
    this.menu = false;
  }

  openmodal(){
    this.modal = true;
  }
  closemodale(){
    this.modal = false;
  }
 togglemobile(){
  this.menumobile = false;
 }
 openmobile(){
  this.menumobile = true;
 }
}
