/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   CurrentLocation.ts                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hawadh <hawadh@student.42Abudhabi.ae>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/03 15:02:35 by hawadh            #+#    #+#             */
/*   Updated: 2022/08/09 19:10:59 by hawadh           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class CurrentLocation implements Mappable {
  name: string;
  colour: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.lastName("female");
    this.colour = "Green";
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<h3>Current Location: ${this.name}</h3>`;
  }
}
