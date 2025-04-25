import { Component } from '@angular/core';
import { AppBarComponent } from './core/app-bar/app-bar.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { Router, RouterOutlet } from '@angular/router'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppBarComponent, MatSidenavModule, SidebarComponent, RouterOutlet],
  templateUrl:'app.component.html',
  styleUrl:'app.component.scss'
})
export class AppComponent {}