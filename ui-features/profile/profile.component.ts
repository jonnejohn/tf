import { Component, OnInit } from '@angular/core';
//require('style-loader!fullcalendar/dist/fullcalendar.css');

@Component({
  selector: 'ngx-buttons',
  styleUrls: ['./profile.component.scss'],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
	picture: any;
	fileInput: any;
	noPicture: any;
	
	ngOnInit() {
		this.picture = './assets/images/Nasta.png';
	}
  
  
    uploadPicture() {
      this.fileInput = document.getElementById('uploadFile');
      this.fileInput.click();
    };
	
	removePicture() {
      this.picture = './assets/images/no-photo.png';
      this.noPicture = true;
    };
	
	// getFile() {
      // fileReader.readAsDataUrl(file)
          // .then(function (result) {
            // this.picture = result;
          // });
    // };
}
