import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { NEWS } from '../Config/news.config';
import { App } from '../Config/app1.config';

@Injectable()
export class NewsService {

  constructor(private http : Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});
  
  // Function to get search text and make service call to get movies fromTMDB
  searchNews(gettingQueryFromComponent) {
    return this.http.get(NEWS.search_api_pre+gettingQueryFromComponent+NEWS.search_api_post)
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }

   private handleError(error: Response){
     return Observable.throw(error.statusText);
   }

   addNews(newsRecievedBynewssingleComponentToSave) {
    return this.http.post(App.apiUrl+"news", newsRecievedBynewssingleComponentToSave, {headers: this.headers})
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
  }

  showFav() {
    return this.http.get(App.apiUrl+"db")
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }

deleteNews(newsRecievedBymovieComponentToDelete) {
 return this.http.delete(App.apiUrl+"news/"+newsRecievedBymovieComponentToDelete.id, { headers: this.headers })
  .map(data => data.json(),
(error: any)=>this.handleError(error));
}

modifyNews(newseRecievedBymovieComponentToModify) {
  var coustomName = prompt("Please enter new news name", "Name of your choice");
  var modifiedData={
    'title':coustomName,
    'description':newseRecievedBymovieComponentToModify.description,
    'publishedAt':newseRecievedBymovieComponentToModify.publishedAt
  }
  return this.http.put(App.apiUrl+"news/"+newseRecievedBymovieComponentToModify.id,modifiedData )
   .map(data => data.json(),
 (error: any)=>this.handleError(error));
 }
}
