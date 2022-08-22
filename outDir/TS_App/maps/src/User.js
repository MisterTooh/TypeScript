"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const faker_1 = require("@faker-js/faker");
class User {
    constructor() {
        this.name = faker_1.faker.name.firstName();
        this.colour = "red";
        this.location = {
            lat: parseFloat(faker_1.faker.address.latitude()),
            lng: parseFloat(faker_1.faker.address.longitude()),
        };
    }
    markerContent() {
        return `<h3>User Name: ${this.name}</h3>`;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map