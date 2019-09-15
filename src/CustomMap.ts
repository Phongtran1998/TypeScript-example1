export interface Mappable {
  location: { lat: number; lng: number };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string, lat: number, lng: number) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat,
        lng
      }
    });
  }

  addMarker(mappable: Mappable): void {
    let url = 'http://maps.google.com/mapfiles/ms/icons/';
    url += mappable.color + '-dot.png';
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      },
      icon: url
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
