/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Company.ts                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hawadh <hawadh@student.42Abudhabi.ae>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/01 16:19:29 by hawadh            #+#    #+#             */
/*   Updated: 2022/08/09 19:10:22 by hawadh           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  colour: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.colour = "blue";
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
      <h1>Company Name: ${this.companyName}</h1>
      <h3>What we Do: ${this.catchPhrase}</h3>
    </div
    `;
  }
}
