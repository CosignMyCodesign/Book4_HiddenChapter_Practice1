// Practice: Big Scary Birds
// The learning objective for this practice exercise is to use the class syntax to establish a reusable definition (i.e. blueprint) of the properties and methods that objects will have in an application.

// Your job is to create a large, flightless bird class that defines the properties of a feathered terror. It should have the following properties:

// height
// flightless (should always be true)
// isExtinct
// name
// running speed
// toString -- This will be a method that outputs a description of the bird based on some of its properties. Example output: "The Cassowary is a big, scary bird that stands up to 6 ft and can run up to 30 mph!"

// Create at least 3 instances of the class. Visit the Wikipedia list of the largest birds in the world for inspiration.

const flightlessBird = {
  height: null,
  flightless: true,
  isExtinct: null,
  runningSpeed: null,
  toString: (bird, height, speed) => {
      console.log(`The ${bird} is a big, scary bird that stand up to ${height} ft and can run up to ${speed} mph!`)
  }
}

class MyBird {
  
  constructor(props) {
    this.name = props.name
    this.height = props.height
    this.flightless = true
    this.isExtinct = props.isExtinct
    this.runningSpeed = props.runningSpeed
  }

  toString () {
    console.log(`The ${this.name} is a big, scary bird that stand up to ${this.height} ft and can run up to ${this.runningSpeed} mph!`)
  }
}

const ostrichProperties = {
  name: "Ostrich",
  height: 6.9,
  flightless: true,
  isExtinct: false,
  runningSpeed: 25,
}

const emuProperties = {
  name: "Emu",
  height:5,
  flightless: true,
  isExtinct: false,
  runningSpeed: 30,
}

const kingPenguinProperties = {
  name: "King Penguin",
  height: 3,
  flightless: true,
  isExtinct: false,
  runningSpeed: 85,
}

const ostrich = new MyBird(ostrichProperties)
const emu = new MyBird(emuProperties)
const kingPenguins = new MyBird(kingPenguinProperties)

ostrich.toString()
emu.toString()
kingPenguins.toString()