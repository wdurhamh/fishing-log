import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MainMenuComponent } from './main-menu.component';
import { NewHoleComponent } from './new-hole.component';
import { LatLng } from './hole';
declare var google: any;//reference google from html page, where it will be included via script tag


@Component({
  selector: 'the-map',
  templateUrl: './AppComponent.html'
})
export class AppComponent implements OnInit, AfterViewInit  { name = 'Angular';
	@ViewChild(NewHoleComponent) new_hole_component:NewHoleComponent; 
	private map:any;

	public ngOnInit(){
		var mapProps = {
			center: new google.maps.LatLng(41, -110),
			zoom: 7
		}
		this.map = new google.maps.Map(document.getElementById('google_map'), mapProps);
		this.map.setMapTypeId('terrain');
	}

	public ngAfterViewInit(){
		//TODO: LOAD bow's from DB
		google.maps.event.addListener(this.map, 'rightclick', this.__mapRightClickHandler);
	}

	__mapRightClickHandler = (function(event:any):void{
		let lat = event.latLng.lat();
	    let lng = event.latLng.lng();
	    this.new_hole_component.showModal();
	}).bind(this);

 }