import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div>
  <nav class="navbar navbar-expand navbar-primary bg-#589af0">
    <a class="navbar-brand" routerLink="/home">HOME</a>
      <div class="collapse navbar-collapse" id="navbarsExampleDefault" >
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="navbar-brand" routerLink="/instruction" routerLinkActive="active">INFORMATION<span class="sr-only">(current)</span></a>
        </li>
      </ul>
    </div>
  </nav>
  <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
}
