import { Component, OnInit } from '@angular/core';
import { Question } from '../qtn';
import { QtnService } from '../qtn.service';

@Component({
  selector: 'app-add-qtn',
  templateUrl: './add-qtn.component.html',
  styleUrls: ['./add-qtn.component.css']
})
export class AddQtnComponent implements OnInit {

  qtn : Question = {
    _id : 'k',
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
  };
  qtns: Question[];

  onClick():void{
    console.log(this.qtn.question);
    this.addQuestions(this.qtn);
  };

  addQuestions(qtn:Question){
    this.qtnService.addQtns(this.qtn as Question)
      .subscribe(qtn => {this.qtns.push(qtn)})
  };
  
  constructor(private qtnService:QtnService) { }

  ngOnInit() {
    
  }

}
