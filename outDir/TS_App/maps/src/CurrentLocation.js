"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentLocation = void 0;
const faker_1 = require("@faker-js/faker");
class CurrentLocation {
    constructor() {
        this.name = faker_1.faker.name.lastName("female");
        this.colour = "Green";
        this.location = {
            lat: parseFloat(faker_1.faker.address.latitude()),
            lng: parseFloat(faker_1.faker.address.longitude()),
        };
    }
    markerContent() {
        return `<h3>Current Location: ${this.name}</h3>`;
    }
}
exports.CurrentLocation = CurrentLocation;
//# sourceMappingURL=CurrentLocation.js.map