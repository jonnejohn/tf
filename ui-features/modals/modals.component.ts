import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from './modal/modal.component';
import { DomSanitizer,SafeUrl } from '@angular/platform-browser'; 

@Component({
  selector: 'ngx-modals',
  styleUrls: ['./modals.component.scss'],
  templateUrl: './modals.component.html',
})
export class ModalsComponent {

  constructor(private modalService: NgbModal,private sanitizer: DomSanitizer) { }

  // showLargeModal() {
  //   const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });

  //   activeModal.componentInstance.modalHeader = 'Large Modal';
  // }
  // showSmallModal() {
  //   const activeModal = this.modalService.open(ModalComponent, { size: 'sm', container: 'nb-layout' });

  //   activeModal.componentInstance.modalHeader = 'Small Modal';
  // }

  // showStaticModal() {
  //   const activeModal = this.modalService.open(ModalComponent, {
  //     size: 'sm',
  //     backdrop: 'static',
  //     container: 'nb-layout',
  //   });

  //   activeModal.componentInstance.modalHeader = 'Static modal';
  //   activeModal.componentInstance.modalContent = `This is static modal, backdrop click
  //                                                   will not close it. Click × or confirmation button to close modal.`;
  // }
 
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
