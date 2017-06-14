import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as data from './Questions.json';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController) {
    console.log(data)
    //

    // var obj = require("../path/jsonfile.json");

  }

}
