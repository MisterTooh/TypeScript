"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NearHospital = void 0;
const faker_1 = require("@faker-js/faker");
class NearHospital {
    constructor() {
        this.name = faker_1.faker.name.firstName("female");
        this.colour = "purple";
        this.location = {
            lat: parseFloat(faker_1.faker.address.latitude()),
            lng: parseFloat(faker_1.faker.address.longitude()),
        };
    }
    markerContent() {
        return `<h3>Hospital Name: ${this.name}</h3>`;
    }
}
exports.NearHospital = NearHospital;
//# sourceMappingURL=NearHospital.js.map