import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numberInitial : number = 0

  plus(num: number){
    this.numberInitial += num
  }

  minus(){
    this.numberInitial -= 1
  }

}
