import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home',
  template : `
  
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
    
<div class="container">
<p class="lead my-3"> <p class="lead my-3"> Instructions
<br>
1) describe as simple as possible
<br>
2) dont use features which are not related to the gender
<br>
3) for accurate results dont use commenly used words to describe </p>

<div class ="form-group" ng-app="ngclickApp" ng-controller="ngclickCtrl" ng-model="myTextarea">
  <label for="exampleFormControlTextarea1">Enter the descripton here</label>
  <textarea class="form-control" rows="20" input #myTextarea type ="text"></textarea>
  <br>  
  <a (click)="match(myTextarea.value)" type="button" class="btn btn-primary btn-lg" routerLink="/result">SUBMIT</a>
  </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'interface';
   public myTextarea ="";
  constructor(private spinner: NgxSpinnerService,private http:HttpClient) {
  }
 
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }
  methodChild(value)
  {
        console.log(value)
  }
  match(value)
  {
  const attributes={
      Arched_Eyebrows :["arched","curved","domed","rounded"],
      Attractive :["good looking","attractive","alluring","beautiful","charming","engaging","enticing","fair","glamorous","good looking","gorgeous","handsome","lovely","pleasant","pleasing","tempting","adorable"],
      Wearing_Earrings:["earring","earrings","bijoux","ear-rings","piercings","trinkets","jewels"],
      Wearing_Hat :["hat","cap"],
      Wearing_Necklace:["pendant","collar","choker","necklace"],
      Wearing_Necktie:["necktie","cravat","bowtie","neckwear","neckties","ascot"],
      Wearing_Lipstick:["lipsticks","chapstick","lip gloss","lip rough","rouges","lip sticks"],
      Five_o_Clock_Shadow :["five o’clock shadow","5 o clock shadow","5 o'clock shadow","vandyke","bristles","brush","fuzz","imperial","stubble"],
      Bags_Under_Eyes:["bags under eyes","dark areas under eyes","puffiness under eyes","eyebags","dark circles"],
      Bald :["bald","barren","hairless"],
      Bangs  :["bangs","fringe","hair covers the forehead"],
      Big_Lips :["full","fat lips","great lips","lubra lips","thick lips","big lips","pouty lips","large lips"],
      Big_Nose  :["big nose","large nose","huge nose","long nose","big fat nose","fat nose"],
      Black_Hair  :["black","very dark"],
      Blond_Hair  :["blonde","pale","yellow","flaxen","platinum","fair","light"],
      Male :["lad", "man", "adult male", "feller", "blighter", "gent", "boy", "male body", "foster-brother","chap", "male child", "bloke", "man-child","fellow", "cuss", "male person", "sirrah", "fella"],
      Mustache :["handle-bars" ,"walrus moustache" ,"moustache" ,"mustachio" ,"toothbrush" ,"soup-strainer" ,"walrus mustache" ,"moustachio"],
      Narrow_Eyes:["slender","thin","narrow"],
      No_Beard:["smooth-faced","shaved","whiskerless","shaven","clean-shaved"],
      Oval_Face:["elliptic","egg-shaped","elliptical","ovoid","oval shaped","oval"],
      Pale_Skin:["albino","white as sheet","boodless","pallid","pasty","peaches and cream","sallow"],
      Pointy_Nose:["beaked","hooked","keen","sharp","long"],
      Rosy_Cheeks:["pink","red","roseate"],
      Blurry :["blurry","fuzzy","foggy","shadowy","smoky","faint"],
      Bushy_Eyebrows: ["bushy eyebrows","hairy eyebrows","fuzzy eyebrows","fuzzy eyebrows","thick and full eyebrows","unplucked eyebrows"],
      Chubby: ["chubby","chunky","flabby","plump","portly","pudgy","stout"],
      Eyeglasses : ["eyeglasses","specs","spectacles","pair of glasses","reading glasses"],
      High_Cheekbones: ["high cheekbones","cheekbones are high"],
      Brown_Hair : ["brown","chromatic", "brownish", "chocolate","brunet","bistered","dusky","pigmented","swart","swarthy","tanned","tawny"],
      Gray_Hair : ["decrepit","gray","mature","tired","venerable",,"versed","veteran","along in years","broken down","debilitated","enfeebled","exhausted","experienced","geriatric","getting on","grizzled","hoary","impaired","inactive"],
      Double_Chin :["wattle","dewlap","jowl","jowly","jowls","gill","buccula","fanon","doublechin","double chin","double chins","baleen","salba","toupee","mot"],
      Heavy_Makeup : ["cosmetics", "maquillage", "paint", "war paint", "paint","blush","foundation","greasepaint","powder","maquillage","heavy makeup","makeups","makeup","heavy makeups"],
      Goatee :["whiskers", "stubble" ,"imperial", "Vandyke", "sideboards", "beaver", "facial hair", "lincoln", "brush", "bush designer","goatee"],
      Mouth_Slightly_Open:["mouth is slightly open","mouth is a little bit open","slightly open mouth","open mouth"],
      Receding_Hairline:["bald spot","receding hairline"],
      mustache : ["moustache","whiskers","whisker","mustaches","mustachio","tache"],
      Sideburns:["side burns","sideburns","mutton chops","muttonchops","hair sideburns","hair side burns"],
      Smiling:["grin","smirk","smile","smiling","happy","laugh","laughter","laughing","cheerful"],
      Straight_Hair:["straight","smooth","sleek","limp","unrully","stringy"],
      Wavy_Hair:["wavy","wavelike","curly","crinkled","crinkly","rippled","rolling","corrugated","ruffled","curls","curled","frizzy","perm"],
      Young:["young","youthful","junior","child","kid","immature"],
  
  
  }
  
  
  var description=value;
  var attribute_arr=[];
  //wearing search
  let flag=false;
  Object.keys(attributes).forEach(key =>{
      for(let j=0;j<attributes[key].length;j++)
      {
          if(description.search(attributes[key][j])!=-1)
          {
              flag=true;
              attribute_arr.push(key)
              break;
          }
      }
  
  
  });
  const all_attribs=["Five_o_Clock_Shadow", "Arched_Eyebrows", "Attractive", "Bags_Under_Eyes", "Bald", "Bangs" ,"Big_Lips", "Big_Nose", "Black_Hair", "Blond_Hair", "Blurry", "Brown_Hair", "Bushy_Eyebrows" ,"Chubby", "Double_Chin" ,"Eyeglasses", "Goatee", "Gray_Hair", "Heavy_Makeup", "High_Cheekbones", "Male", "Mouth_Slightly_Open", "Mustache", "Narrow_Eyes", "No_Beard" ,"Oval_Face", "Pale_Skin", "Pointy_Nose", "Receding_Hairline" ,"Rosy_Cheeks", "Sideburns", "Smiling" ,"Straight_Hair", "Wavy_Hair", "Wearing_Earrings", "Wearing_Hat", "Wearing_Lipstick", "Wearing_Necklace", "Wearing_Necktie", "Young"];
  console.log(attribute_arr)
  
  var output_arr=[]
  for(let i=0;i<all_attribs.length;i++){
      if(attribute_arr.find(function(a) {return all_attribs[i]==a}))output_arr.push(1);
      else output_arr.push(-1);
  }
  var Jasonstring = JSON.stringify(output_arr);
  console.log(Jasonstring);
    this.http.post('',Jasonstring);//url in here

  }
}
