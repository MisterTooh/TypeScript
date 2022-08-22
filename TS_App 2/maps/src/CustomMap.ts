/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   CustomMap.ts                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hawadh <hawadh@student.42Abudhabi.ae>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/03 10:05:00 by hawadh            #+#    #+#             */
/*   Updated: 2022/08/09 19:07:16 by hawadh           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export interface Mappable {
  location: {
    lng: number;
    lat: number;
  };
  colour: string;
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  /**
   ** Below is Best Practice
   */
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
  /**
   ** Above is Best Practice
   */

  /**
   *! Bad Practice:
   *! Creating three separate Methods
   **/
  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng,
  //     },
  //   });
  // }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     },
  //   });
  // }

  // addCurrentLocation(currentLocation: CurrentLocation): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: currentLocation.location.lat,
  //       lng: currentLocation.location.lng,
  //     },
  //   });
  // }

  // addNearHospital(nearHospital: NearHospital): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: nearHospital.location.lat,
  //       lng: nearHospital.location.lng,
  //     },
  //   });
  // }
  /**
   *! Bad Practice:
   *! Creating four separate Methods
   **/
}
