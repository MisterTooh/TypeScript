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
  setAge(age: number): void {
    this.age = age;
  },
};

/**
 *?	ES2015 Destructuring age
 *		This breaks the rules BUT for destructuring
 *		we must write as per structure annotation
 **/
const { age, name }: { age: number; name: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
