import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
@Input() isTrue=false
@Output() sendNew= new EventEmitter();

handleChangeIstrue(){

  this.isTrue=!this.isTrue
  this.sendNew.emit(this.isTrue)
}
@HostListener('window:resize', ['$event'])
onResize(event: any) {
  this.checkWidth();
}


checkWidth() {
  const screenWidth = window.innerWidth;
  if(screenWidth>1100){
    this.isTrue=false
  }
}


}
