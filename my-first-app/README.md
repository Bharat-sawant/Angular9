# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Type scripts 
varable :
 public showAttachmentPopupFromMemory: boolean = false;
 config:any = {};
 public attachmentURLs = [];
  public URLArray: Array<string> = [];
Constructor 
 constructor(private appConstants: AppConstants, private contractConstatnts: ContractConstants , private dateService: SmartDateService)

 Property :any={
    Id:1,
    Name:'Birala house',
    Type:"House",
    Price:12000
  }
Properties:Array<any>=[
				{
				  Id:1,
				  Name:'Birala house',
				  Type:"House",
				  Price:12000
				},
				{
				  Id:2,
				  Name:'Silicon house',
				  Type:"House",
				  Price:13000
				}
	]
	*ngFor(press a-ngFor)
	<div *ngFor="let Property of Properties" class="shadow-lg col-sm-4 p-3">
	
	@Input() Property:any
	
	
	inheritance
	export class ContractBulkUploadComponent  implements OnInit, OnDestroy, AfterViewInit{
	

var listEntityUOM = new object();
listEntityUOM = (from UnitOfMeasure objUnitOfMeasure in lstEntityUOM
                                     where (objUnitOfMeasure.UOMDescription.ToLower().Contains(Searchtext.ToLower())
                                            || objUnitOfMeasure.UOMCode.ToLower().Contains(Searchtext.ToLower()))
                                     select new
                                     {
                                         label = string.Empty,
                                         value = objUnitOfMeasure.UOMDescription,
                                         UOMCode = objUnitOfMeasure.UOMCode
                                     }).ToList().Take(10);