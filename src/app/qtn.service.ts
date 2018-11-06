import { Injectable } from '@angular/core';
import { Question } from './qtn';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QtnService {

  private questionsUrl = 'https://serene-wildwood-19977.herokuapp.com';

  getQtns(): Observable<Question[]>{
     
    return this.http.get<Question[]>(this.questionsUrl)
    };


  addQtns(qtn:Question): Observable<Question>{
    return this.http.post<Question>(this.questionsUrl+'/api/questions/add',qtn);
  };

  deleteQtn(id:string):Observable<Question>{
    return this.http.delete<Question>(this.questionsUrl+`/api/questions/delete/${id}`);
  }

  getQtn(id:string):Observable<Question>{
     
    return this.http.get<Question>(this.questionsUrl+`/api/questions/edit/${id}`);
    };

  updateQtn(qtnn:Question): Observable<Question>{
    return this.http.put<Question>(this.questionsUrl+`/api/questions/edit/${qtnn._id}`,qtnn);
  };

  constructor(private http:HttpClient) { }
}
