import {
    Component, OnInit, AfterViewInit, ViewChild,
    OnDestroy, AfterViewChecked, HostListener
  } from '@angular/core';
  import { DomSanitizer,SafeUrl } from '@angular/platform-browser'; 
  import { Router } from '@angular/router';
  import { FormsModule } from '@angular/forms';
  
  @Component({
    selector: 'page-projects',
    templateUrl: './ebooks.component.html',
    styleUrls: ['./ebooks.component.scss'],
  })
  
  
  export class EbooksComponent
  { 
  constructor(private sanitizer: DomSanitizer ){}
  link:SafeUrl=null; 
    //public portalurl:string="http://vishal/QPR2017-1/Portal/QPR.Isapi.dll";
    //public modelid:string="655625500";
    public objectid:string="0";
    //public iframeurl:string="http://vishal/QPR2017-1/Portal/QPR.Isapi.dll?PGPLUGIN&*10&SES=null&FMT=p&LAN=en%2c1&MODELID=655625500&OBJECTID=0&SMI=&PERIOD=latestforall&ZOOM=fs&DEP=1";
    // private ModelImportService:  private customModalService: NgbModal {
    // }
    ngOnInit() {
      //this.link=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl) 
    
  
     };
    
  }