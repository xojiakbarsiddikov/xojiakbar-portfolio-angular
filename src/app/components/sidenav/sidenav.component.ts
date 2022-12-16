import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {navbarData} from "./nav-data";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";
import {fadeInOut, INavbarData} from "./helper";
import {Router} from "@angular/router";

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
           keyframes([
             style({transform: 'rotate(0deg)', offset: '0'}),
             style({transform: 'rotate(2turn)', offset: '1'}),
           ])
         )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit{

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  title = 'Angular';
  name = 'A'
  screenWidth = 0;
  collapsed = false;
  navData = navbarData;
  multiple: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth
    if(this.screenWidth <= 768) {
      this.collapsed = false
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  constructor(public router: Router) {
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav() {
    this.collapsed = false
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  handleClick(item: INavbarData): void {
    this.shirkItems(item)
    item.expanded = !item.expanded
  }

  getActiveClass(data: INavbarData) {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  shirkItems(item: INavbarData): void {
    if(!this.multiple) {
      for(let modelItem of this.navData) {
        if(item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false
        }
      }
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth
  }
}
