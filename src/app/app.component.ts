import { DOCUMENT } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { A11yModule } from "@angular/cdk/a11y";
import { HeaderComponent } from './header/header.component';
 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, A11yModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  
}
