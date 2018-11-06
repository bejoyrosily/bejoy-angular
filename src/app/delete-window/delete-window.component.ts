import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { QtnService } from '../qtn.service';
import { Question } from '../qtn';


@Component({
  selector: 'app-delete-window',
  templateUrl: './delete-window.component.html',
  styleUrls: ['./delete-window.component.css']
})
export class DeleteWindowComponent implements OnInit {

  qtn : Question;

  constructor(
    private route: ActivatedRoute,
    private qtnService: QtnService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.deleteQtn();
    console.log("done");
  }

  
  deleteQtn(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.qtnService.deleteQtn(id)
      .subscribe(qtn => this.qtn = qtn);
      console.log(id);
  }

}


