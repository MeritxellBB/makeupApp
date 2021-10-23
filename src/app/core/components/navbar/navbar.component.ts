import { Component, OnInit } from '@angular/core';
import { MenuItem } from './models/menuItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public menuitem: MenuItem[] = [
    {imgUrl: "/assets/home.png", url: "/"},
    {imgUrl: "/assets/lipstick.png", url: "/lipstick"},
    {imgUrl: "/assets/blush.png", url: "/blush"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
