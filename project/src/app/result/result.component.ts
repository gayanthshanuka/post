import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-result',
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
    </div>
    <p><img src="../../assets/images/b.jpg" style="align-self: center;" ></p>
    <div class ="form-group" ng-app="ngclickApp" ng-controller="ngclickCtrl" >
      
      <br>
      <br>
      <button  type="button" class="btn btn-primary btn-lg">DOWNLOAD</button>
      
    </div>
  `,
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) {}

  
    
  
  ngOnInit() {
    this.spinner.show();
    
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }
  

}
