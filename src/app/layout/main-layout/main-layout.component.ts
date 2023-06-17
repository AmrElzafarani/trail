import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {

  isCollapsed = false
  getScreenWidth!: number;

  toggleSidebar() {
    console.log("asj")
    this.isCollapsed = !this.isCollapsed
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    if (this.getScreenWidth < 769) {
      this.isCollapsed = true
    } else {
      this.isCollapsed = false

    }
  }
}
