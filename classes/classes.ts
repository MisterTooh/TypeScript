/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   classes.ts                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hawadh <hawadh@student.42Abudhabi.ae>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/07/29 19:05:41 by hawadh            #+#    #+#             */
/*   Updated: 2022/08/01 15:29:25 by hawadh           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/**
 **	In this class we've defined two Methods (functions)
 **	that will print and output the strings within them.
 *?	Any other class that inherits this class will make this
 *?	A super/parent Class
 *
 *? You can initialise a property, OR a constructor.
 *?	There is no need to do both
 **/
class Trees {
  // colour: string;
  //? No need for above if below is declared
  constructor(public colour: string) {}
  //?No need for below if above declared
  //this.colour = colour;

  protected height(): void {
    console.log("Chop Chop");
  }
  public thirsty(): void {
    console.log("Water Please");
  }
  private leaves(): void {
    console.log("Only my Leaves may be green");
  }
}

/**
 **	In this class we have inherited the parent/super class
 **	and overriden the methods height(); and thirsty();
 ** to produce a new output only applicable in the inherited
 ** class
 *?	height is protected and thus can be accessed, but leaves is
 *?	private but cannot be accessed.
 **/
class Bush extends Trees {
  constructor(public amount: number, fruit: string) {
    super(fruit);
  }

  height(): void {
    console.log("Grow Grow!");
  }
  thirsty(): void {
    console.log("I've had enough!");
  }
  private branches(): void {
    console.log("I have many branches");
  }
}

/**
 *?	The string of colours are for the purpose of the Constructor in the class
 */
const tree = new Trees("red");
console.log(tree.colour);

const sapling = new Trees("green");

/**
 *? Thanks to the super call on line 50, we can add another type
 *? variable parameter to the below.
 **/
const bush = new Bush(5, "yellow");
bush.height();
bush.thirsty();
