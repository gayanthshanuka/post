import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-instruction',
  template:`
  <ngx-spinner
  bdOpacity = 0.9
  bdColor = "#fffdfd"
  size = "medium"
  color = "#4b9bc1"
  type = "timer"
  [fullScreen] = "true"
  >
  <br>
  <p style="color: #4b9bc1" > Loading... </p>
  </ngx-spinner>
 
  <div class=" py-1 mb-2">
      
    <div class="jumbotron">
      <div class="col-md-6 px-0">
        <h1 class="display-4 font-italic">FACEMAKER</h1>
        <p class="lead my-3"> AI based face generator </p>
      </div>
    </div>
    </div>`,
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) {}
  ngOnInit() {
    this.spinner.show();
    
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }
}
