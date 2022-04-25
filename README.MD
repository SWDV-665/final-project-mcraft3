### 0.8.0 Updates ionic app swdv-665/final-project-mcraft3 proposal app client

#### https://github.com/mcraft3/proposals-server to see the node.js, express, and mongoose proposal-server

#### https://github.com/SWDV-665/week-5-ionic-native-mcraft3 to see before ionic client groceries app
#### https://github.com/SWDV-665/week-6-groceries-app-restful-services-mcraft3 to see the after client groceries app (using the groceries-server below) 
#### https://github.com/mcraft3/groceries-server grocery-server version of this codebase

-----------------------------
1. Adds import { HttpClientModule } from '@angular/common/http'; 
   and add to @NgModule imports HttpClientModule into app.module.ts after BrowserModule

-----------------------------
2. Adds import { HttpClient } from '@angular/common/http'; 
   and adds to Dependency Injection in constructor public http: HttpClient into proposals-service.ts 

3. Adds import { Observable } from 'rxjs/Observable'; into proposals-service.ts 
4. Adds var for dataChanged$: Observable<boolean>; into proposals-service.ts 

5. Adds import { Subject } from 'rxjs'; into proposals-service.ts 
6. Adds var for private dataChangeSubject: Subject<boolean>; to proposals-service.ts 

7. Adds var for baseURL = "http://localhost:8080" to proposals-service.ts 

8. Adds to construction this.dataChangeSubject = new Subject<boolean>() in proposals-service.ts 

9. Adds to construction 
   this.dataChangeSubject = new Subject<boolean>();
   this.dataChanged$ = this.dataChangeSubject.asObservable();
   in proposals-service.ts 

10. Adds import { ToastController } from 'ionic-angular'; in proposals-service.ts

-----------------------------
11. Adds a Data Schema and Adds interface Proposal in types.ts (new file)

-----------------------------
12. Adds import { Proposal } from '../../app/types'; in groceries-service.ts
13. Adds import { map, catchError } from 'rxjs/operators';in groceries-service.ts
14. Updates getProposals() to getAllProposals() in proposals-service.ts 
15. Adds extractData() and handleError() functions in proposals-service.ts
16. Adds getProposal() in proposals-service.ts 
17. Updates removeProposal(), addProposal(), editProposal() with toast & calls to http in groceries-service.ts 
18. Adds window.location.reload() to auto reload page for removeItems(), addItem(), and editItem().

-----------------------------
11. Adds import { Proposal } from '../../app/types' to dashboard.ts 
12. Adds import { Observable } from 'rxjs/Observable'; to dashboard.ts
13. Adds array for proposals: any = []; to dashboard.ts
14. Updates items: any = []; to items: Observable<Grocery[]>; in dashboard.ts 
15. Adds errorMessage: string; to dashboard.ts 
  
16. Adds toast message: 'Retrieving list from database' as part of constructor/startup for dashboard.ts
17. Updates from using loadItems() to constructor/startup call to getAllProposals() in dashboard.ts 

18. Comments out loadItems() in dashboard.ts

-----------------------------
19. Comments out header ngIf no items display no items message in dashboard.html 

-----------------------------
20. Updates call to showEditPrompt() in editItems() and call to showAddPrompt() in addItem() in dashboard.ts 

-----------------------------
21. Updates showPrompt() to showEditPrompt() in input-dialog-service.ts
22. Updates input for _id to value: proposal ? proposal._id : null in input-dialog-service.ts 
23. Copies showEditPrompt() and renames and makes new showAddPrompt() to input-dialog-service.ts (with no _id)

-----------------------------
24. Updates ion-item-sliding ngFor item of items to item of (item | async) in dashboard.html
25. Adds ion refresher to dashboard.html and dashboard.ts to provide pull to refresh of that tab only to provide means to clear or cancel of either the open camera or the open image features.

### Run ionic cordova build browser so camera and filesystem works in browser for desktop, tablet, iOS. or Android
cordova --version
cordova --help 
ionic cordova build browser

### To run ionic client, run ionic cordova run browser or 
ionic cordova run browser

### or in VSC, run Live Server
in VSC navigate client project to final-project-mcraft3/platforms/browser/www/index.html 
right click on index.html in VSC and select Open with Live Server 
Live Server will tell which port it is running on, typically 5500, 5501, etc.
app will be served in browswer at http://127.0.0.1:5503/platforms/browser/www/index.html
in VSC click at top menu, view, command pallet, stop Live Server to stop 