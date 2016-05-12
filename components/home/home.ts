import {Component} from '@angular/core'
import {JSONP_PROVIDERS} from '@angular/http';

import {MarkerComponent} from './marker'
import {GoogleMapService} from './service'

@Component({
  selector: 'my-app',
  template: `
    <div id="map">
      <marker *ngFor="let item of items"
              lat-data="{{item.Latitude}}"
              lng-data="{{item.Longitude}}">
      </marker>
    </div>
  `,
  styles:[`
    #map {
      width:  100%;
      height: 600px;
    }
  `],
  providers:[JSONP_PROVIDERS, GoogleMapService],
  directives: [MarkerComponent]
})

export class AppComponent {
  
  private items: any;
  private googlemap: GoogleMapService;
  
  constructor (googlemap: GoogleMapService){
    this.googlemap = googlemap;
  }
  
  ngOnInit() {
    this.googlemap.mapping()
      .subscribe (
        res => this.items = res.json(),
        error => console.log(error)
      );
      
    this.googlemap.init();
  }
}
　