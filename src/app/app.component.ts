import { Component } from '@angular/core';
import { ToastService } from 'ngx-jaka';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-jaka-demo';

  constructor(private toasterService: ToastService) {
    
  }

  publishMessage() {
    this.toasterService.pushMessage({
      message: 'bonjour',
      type: 'info',
      title: 'Test'
    })
  }
}
