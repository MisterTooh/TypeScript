"use strict";
/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.ts                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hawadh <hawadh@student.42Abudhabi.ae>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/01 16:14:00 by hawadh            #+#    #+#             */
/*   Updated: 2022/08/09 19:12:57 by hawadh           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const Company_1 = require("./Company");
const CustomMap_1 = require("./CustomMap");
const CurrentLocation_1 = require("./CurrentLocation");
const NearHospital_1 = require("./NearHospital");
const user = new User_1.User();
const company = new Company_1.Company();
const customMap = new CustomMap_1.CustomMap("map");
const currentLocation = new CurrentLocation_1.CurrentLocation();
const nearHospital = new NearHospital_1.NearHospital();
customMap.addMarker(user);
customMap.addMarker(company);
customMap.addMarker(currentLocation);
customMap.addMarker(nearHospital);
//# sourceMappingURL=index.js.map