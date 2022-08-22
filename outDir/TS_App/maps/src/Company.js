"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const faker_1 = require("@faker-js/faker");
class Company {
    constructor() {
        this.companyName = faker_1.faker.company.companyName();
        this.catchPhrase = faker_1.faker.company.catchPhrase();
        this.colour = "blue";
        this.location = {
            lat: parseFloat(faker_1.faker.address.latitude()),
            lng: parseFloat(faker_1.faker.address.longitude()),
        };
    }
    markerContent() {
        return `
    <div>
      <h1>Company Name: ${this.companyName}</h1>
      <h3>What we Do: ${this.catchPhrase}</h3>
    </div
    `;
    }
}
exports.Company = Company;
//# sourceMappingURL=Company.js.map