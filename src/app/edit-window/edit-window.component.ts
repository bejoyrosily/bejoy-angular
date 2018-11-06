import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { QtnService } from '../qtn.service';
import { Question } from '../qtn';

@Component({
  selector: 'app-edit-window',
  templateUrl: './edit-window.component.html',
  styleUrls: ['./edit-window.component.css']
})
export class EditWindowComponent implements OnInit {

  qtnn : Question = {
    _id : '',
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '', 
  };
  

  constructor(
    private route: ActivatedRoute,
    private qtnService: QtnService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getQtn();
    console.log("done");
    //console.log(this.qtnn);
  }

  
  getQtn(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.qtnService.getQtn(id)
      .subscribe(qtn => this.qtnn = qtn);
      //console.log(this.qtnn);
  }

  onClick(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.qtnService.updateQtn(this.qtnn)
      .subscribe(qtn => this.qtnn = qtn);
     console.log(this.qtnn);
  }

}
