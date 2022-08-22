"use strict";
/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   objects.ts                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hawadh <hawadh@student.42Abudhabi.ae>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/07/25 19:44:31 by hawadh            #+#    #+#             */
/*   Updated: 2022/07/25 20:04:41 by hawadh           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */
/**
 *? Functiond defined inside object
 */
const profile = {
    name: "alex",
    age: 20,
    coords: {
        lat: 0,
        lng: 15,
    },
    setAge(age) {
        this.age = age;
    },
};
/**
 *?	ES2015 Destructuring age
 *		This breaks the rules BUT for destructuring
 *		we must write as per structure annotation
 **/
const { age, name } = profile;
const { coords: { lat, lng }, } = profile;
//# sourceMappingURL=objects.js.map