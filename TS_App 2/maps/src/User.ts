/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   User.ts                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hawadh <hawadh@student.42Abudhabi.ae>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/01 16:19:15 by hawadh            #+#    #+#             */
/*   Updated: 2022/08/09 19:10:12 by hawadh           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  colour: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.colour = "red";
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<h3>User Name: ${this.name}</h3>`;
  }
}
