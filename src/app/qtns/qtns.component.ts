import { Component, OnInit } from '@angular/core';
import { QtnService } from '../qtn.service';
import { Question } from '../qtn';

@Component({
  selector: 'app-qtns',
  templateUrl: './qtns.component.html',
  styleUrls: ['./qtns.component.css']
})
export class QtnsComponent implements OnInit {

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
