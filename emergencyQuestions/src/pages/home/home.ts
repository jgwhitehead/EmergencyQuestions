import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as questionList from './Questions.json';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  question: String;


  constructor(public navCtrl: NavController) {
    //

    // var obj = require("../path/jsonfile.json");

  }
  pickQuestion() {
    const randomIndex = Math.floor(Math.random() * (<any>questionList).Questions.length);
    this.question = (<any>questionList).Questions[randomIndex];
    console.log(this.question);
  }

}
