import {
    Component, OnInit, AfterViewInit, ViewChild,
    OnDestroy, AfterViewChecked, HostListener
  } from '@angular/core';
  import { DomSanitizer,SafeUrl } from '@angular/platform-browser'; 
  import { Router } from '@angular/router';
  import { FormsModule } from '@angular/forms';
  
  @Component({
    selector: 'page-projects',
    templateUrl: './documents.component.html',
    styleUrls: ['./documents.component.scss'],
  })
  
  
  export class DocumentsComponent
  { 
  constructor(private sanitizer: DomSanitizer ){}
  link:SafeUrl=null; 
   // public portalurl:string="http://vishal/QPR2017-1/Portal/QPR.Isapi.dll";
    //public modelid:string="655625500";
    public objectid:string="0";
   // public iframeurl:string="http://vishal/QPR2017-1/Portal/QPR.Isapi.dll?PGPLUGIN&*10&FMT=p&LAN=en%2c1&MODELID=655625500&OBJECTID=47&ZOOM=fs&VIE=0&SMI=&SCNAME=Dentorex%20Group%20Scorecard&PERIOD=latestforall&DPMODE=0";
    // private ModelImportService:  private customModalService: NgbModal {
    // }
    ngOnInit() {
     // this.link=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl) 
    
  
     };
    //  open() {
    //   const modalRef = this.customModalService.open(NewDemoModalComponent);
     
    // }
  }