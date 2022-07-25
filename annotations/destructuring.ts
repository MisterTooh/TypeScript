/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   destructuring.ts                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hawadh <hawadh@student.42Abudhabi.ae>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/07/25 19:55:16 by hawadh            #+#    #+#             */
/*   Updated: 2022/07/25 19:55:18 by hawadh           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/**
 ** Destructuring
 **/
const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

/**
 *?	Original Syntax
 **/
const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(todaysWeather);

/**
 *?	Destructuring
 **/
const logNewWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logNewWeather(todaysWeather);
