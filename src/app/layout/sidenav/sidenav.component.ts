import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  items = [
    {
      name: "Dashboard",
      icon: "fa fa-house",
      // path: "/HR/recruitment"
    },
    {
      name: "Recruitment",
      icon: "fa fa-magnet",
      path: "/HR/recruitment"
    },
    {
      name: "Personnel",
      icon: "fa fa-users",
      path: "/HR/personnel"
    },
    {
      name: "Payroll",
      icon: "fa fa-hand-holding-dollar",
      // path: "/HR/recruitment"
    },
    {
      name: "Accounts",
      icon: "fa fa-user-lock",
      path: "/HR/accounts"
    }
  ]
}
