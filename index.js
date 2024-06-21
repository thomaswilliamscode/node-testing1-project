/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
function trimProperties(obj) {
  // ✨ implement
  const newObj = {};

  for (let key in obj) {
    if ( typeof obj[key] === 'string') {
      newObj[key] = obj[key].trim();
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj

}
// let obj = {
//   name: '      thomas  ',
//   bio: ' Greatest Wizzard   Eva '
// }
// console.log(trimProperties(obj))

/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */
function trimPropertiesMutation(obj) {
  // ✨ implement
  for (let key in obj) {
		if (typeof obj[key] === 'string') {
			obj[key] = obj[key].trim();
		} else {
			obj[key] = obj[key];
		}
	}
	return obj;
}

// let obj = {
//   name: '      thomas  ',
//   bio: ' Greatest Wizzard   Eva '
// }
// console.log(trimPropertiesMutation(obj))

/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]) // returns 3
 */
function findLargestInteger(integers) {
  // ✨ implement
  let largestNum = 0;
  for (let num of integers) {
    if (num.integer > largestNum) {
      largestNum = num.integer
    }
  }
  return largestNum
}

// const input = [{ integer: 2 }, { integer: 5 }, { integer: 10 }, { integer: 1 }];
// console.log(findLargestInteger(input))

class Counter {
  /**
   * [Exercise 4A] Counter creates a counter
   * @param {number} initialNumber - the initial state of the count
   */
  constructor(initialNumber) {
    // ✨ initialize whatever properties are needed
    this.start = false
    this.count = initialNumber
  }

  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   *
   * EXAMPLE
   * const counter = new Counter(3)
   * counter.countDown() // returns 3
   * counter.countDown() // returns 2
   * counter.countDown() // returns 1
   * counter.countDown() // returns 0
   * counter.countDown() // returns 0
   */
  countDown() {
    // ✨ implement
    if (this.start === false) {
      this.start = true;
      return this.count;
    } else {
      if (this.count === 0) {
      return this.count
    } else {
      this.count --
      return this.count;
    }
    }
  }
}

class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    // ✨ initialize whatever properties are needed
    this.seasons = ['summer', 'fall', 'winter', 'spring']
    this.start = false;
    this.current = 0
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
   * EXAMPLE
   * const seasons = new Seasons()
   * seasons.next() // returns "summer"
   * seasons.next() // returns "fall"
   * seasons.next() // returns "winter"
   * seasons.next() // returns "spring"
   * seasons.next() // returns "summer"
   */
  next() {
    // ✨ implement
    if (this.start === false) {
      this.start = true;
      return this.seasons[0]
    } else {
      if (this.current < this.seasons.length - 1) {
        this.current ++ 
        return this.seasons[this.current]
      } else {
        this.current = 0
        return this.seasons[this.current]
      }
    }
  }
}

// const test = new Seasons
// for (let i = 1; i < 40; i++) {
//   console.log(i)
//   test.next()
// }
// console.log(test.next());

// console.log(test.next())
// console.log(test.next());
// console.log(test.next());
// console.log(test.next());
// console.log(test.next());

class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0 // car initilizes with zero miles
    this.tank = tankSize // car initiazes full of gas
    this.tankSize = tankSize
    this.mpg = mpg
    // ✨ initialize whatever other properties are needed
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
  drive(distance) {
    // ✨ implement
    let milesCanDrive = this.tank * this.mpg
    if (milesCanDrive >= distance) {
      this.odometer = this.odometer + distance;
      milesCanDrive = milesCanDrive - distance
      let gallons = milesCanDrive / this.mpg
      this.tank = gallons
      return this.odometer;
    } else {
      return this.tankSize * this.mpg
    }
    
  }

  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  refuel(gallons) {
    // ✨ implement
    if (this.tankSize >= (this.tank + gallons)) {
      return gallons;
    } else {
      return this.tankSize;
    }
  }
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 */
function isEvenNumberAsync(number) {
  // ✨ implement
  let answer = number % 2 === 0;
  return answer
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
