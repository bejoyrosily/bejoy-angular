import { Component, OnInit } from '@angular/core';
import { Question } from '../qtn';
import { QtnService } from '../qtn.service';

@Component({
  selector: 'app-qtn-edit',
  templateUrl: './qtn-edit.component.html',
  styleUrls: ['./qtn-edit.component.css']
})
export class QtnEditComponent implements OnInit {

  qtns: Question[];
  

  constructor(private qtnService:QtnService) { }

  ngOnInit() {
    this.getQtns();
  }

  getQtns():void{
    this.qtnService.getQtns()
      .subscribe(qtns => this.qtns = qtns);
  };

  
}
