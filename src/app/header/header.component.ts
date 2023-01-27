import { Component } from '@angular/core';
import { AuthService } from "../common/auth.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor(public AuthService: AuthService) {}
}
