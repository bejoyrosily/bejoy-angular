import { Component, OnInit } from '@angular/core';
import { QtnService } from '../qtn.service';
import { Question } from '../qtn';

@Component({
  selector: 'app-delete-qtn',
  templateUrl: './delete-qtn.component.html',
  styleUrls: ['./delete-qtn.component.css']
})
export class DeleteQtnComponent implements OnInit {

  qtns: Question[];
  // qtn : Question ={
  //   _id : '',
  //   question: '',
  //   option1: '',
  //   option2: '',
  //   option3: '',
  //   option4: '',
  // };

  constructor(private qtnService:QtnService) { }

  ngOnInit() {
    this.getQtns();
  }

  getQtns():void{
    this.qtnService.getQtns()
      .subscribe(qtns => this.qtns = qtns);
  };

  // deleteQtn(qtn: Question): void {
  //   const _id = +qtn._id;
  //   this.qtnService.deleteQtn(_id)
  //     .subscribe(qtn => qtn = qtn);
  //     console.log(qtn._id);
  //}
  
}
