// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (drivers, string) => {

    const emptyDrivers = []
    for (let driver of drivers) {
        if (driver.toLowerCase () === string.toLowerCase())
        emptyDrivers.push(driver)
    }
    return emptyDrivers;
}

function fuzzyMatch(drivers, letters) {
    let lengthOfLetters = letters.length;
    return drivers.filter(function (driverName) {
      return driverName.slice(0, lengthOfLetters) === letters;
    });
  }



const matchName = (drivers, name) => {
    const emptyDrivers = []
    for (let driver of drivers) {
      if (driver.name === name)
      emptyDrivers.push(driver)
    }
    return emptyDrivers;
  }