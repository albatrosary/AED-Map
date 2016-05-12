import {Injectable} from '@angular/core';

import {Jsonp, URLSearchParams} from '@angular/http';

@Injectable()
export class GoogleMapService {
  
  private map: any;
  private params: any;
  private jsonp: any;
  
  private url: string = 'http://localhost:8000/api/sed/'
  
  constructor (jsonp: Jsonp) {
    this.jsonp = jsonp;
    this.params = new URLSearchParams();
    this.params.set('action', 'opensearch');
    this.params.set('format', 'json');
    this.params.set('callback', 'JSONP_CALLBACK'); 
  }
    
  public mapping() {
    return this.jsonp
      .get(this.url, { search: this.params })
  }
  
  public init () {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 31.6473515, lng: 130.572884899999}, 
      scrollwheel: false,
      zoom: 11
    });
  }
  
  public addMarker(feature) {
   new google.maps.Marker({
      position: feature,
      map: this.map
    });
  }
}