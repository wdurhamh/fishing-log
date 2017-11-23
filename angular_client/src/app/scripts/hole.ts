
export interface LatLng{
	lng:number;
	lat:number;
}

export class Hole {
	_id:string;
	name:string;
	bow:string;
	lnglt:LatLng;
	trips?:[string];
	fish?:[string];
	comment?:string;
}
