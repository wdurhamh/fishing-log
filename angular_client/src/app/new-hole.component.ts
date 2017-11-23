
//TODO: should really use *ngif so that we're not loading all this until we have to
import { Component, Input, ChangeDetectorRef } from '@angular/core'
import { Hole, LatLng } from './hole';


@Component({
	selector:'new-hole',
	templateUrl: './NewHoleModal.html'
})
export class NewHoleComponent{
	static debug_id:number = 0;
	protected _hole:Hole;
	protected _error_msg:string;
	private __myID:number;
	private __latlng:LatLng;
	private __changeDetctRef:ChangeDetectorRef;

	visibleAnimate = false;
	visible = false;

	public constructor(private ref: ChangeDetectorRef){
		this._hole = new Hole();
		this.__myID = NewHoleComponent.debug_id;
		NewHoleComponent.debug_id = NewHoleComponent.debug_id + 1;
		console.log("created new NewHoleComponent: " + this.__myID);
		this.__changeDetctRef = ref;
	}
  	

	public showModal(): void {
		this._hole = new Hole();
		this.visible = true;
		this.visibleAnimate = true;
		setTimeout(() => this.visibleAnimate = true, 100);
		this.__changeDetctRef.detectChanges();
	}

	public hideModal(): void {
		//need to clean up this._hole here
		this.visibleAnimate = false;
		setTimeout(() => this.visible = false, 300);
		this.__changeDetctRef.detectChanges();
	}

	public onContainerClicked(event: MouseEvent): void {
		if ((<HTMLElement>event.target).classList.contains('modal')) {
		  this.hideModal();
		}
	}


	public createHoleOnDB():void{
		this._hole._id="new"
		this._hole.lnglt=this.__latlng;
		this._hole.bow;
		
		//need to figure out angular2 posting
	}
};
