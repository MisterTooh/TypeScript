/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   NearHospital.ts                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hawadh <hawadh@student.42Abudhabi.ae>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/09 15:04:06 by hawadh            #+#    #+#             */
/*   Updated: 2022/08/09 19:10:40 by hawadh           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class NearHospital implements Mappable {
  name: string;
  colour: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName("female");
    this.colour = "purple";
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<h3>Hospital Name: ${this.name}</h3>`;
  }
}
