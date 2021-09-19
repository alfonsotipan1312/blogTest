import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

	@ViewChild('addPost') addBtn: ElementRef;

	@ViewChild('addPostRem') addRemBtn: ElementRef;

	constructor(private commonService: CommonService){
		
		this.commonService.postEdit_Observable.subscribe(res => {
			this.addBtn.nativeElement.click();
		});
	}
  
}
