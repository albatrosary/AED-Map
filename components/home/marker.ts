import {Component, Input} from '@angular/core'

import {GoogleMapService} from './service'

@Component({
  selector: 'marker',
  template: ``
})

export class  MarkerComponent {
  
  @Input('lat-data')
  private lat: number;
  
  @Input('lng-data')
  private lng: number;
  private googlemap;
  
  constructor (googlemap: GoogleMapService){
    this.googlemap = googlemap;
  }
  
  ngOnInit() {
    this.googlemap.addMarker({lat: parseFloat(this.lat), lng: parseFloat(this.lng)})
  }
}
　