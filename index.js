// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];


function destructivelyAppendDriver(driver) {
    drivers.push(driver)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
    drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name) {
    drivers.shift(name)
}

function appendDriver (name) {
    return [...drivers, name];
  }
  
  function prependDriver (name) {
    return [name, ...drivers];
  }
  
  function removeFirstDriver () {
    return drivers.slice(1);
  }
  
  function removeLastDriver () {
    return drivers.slice(0, drivers.length - 1);
  }
