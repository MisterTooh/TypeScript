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

import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { CurrentLocation } from "./CurrentLocation";
import { NearHospital } from "./NearHospital";

const user = new User();
const company = new Company();
const customMap = new CustomMap("map");
const currentLocation = new CurrentLocation();
const nearHospital = new NearHospital();

customMap.addMarker(user);
customMap.addMarker(company);
customMap.addMarker(currentLocation);
customMap.addMarker(nearHospital);
