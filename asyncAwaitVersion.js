function mowYard(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10);
      if (randomNumber < 5) {
        resolve(`${name} mowed the yard.`);
      } else {
        reject(`${name} fell asleep after mowing the yard.`);
      }
    }, 2000);
  });
}

function weedEat(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10);
      if (randomNumber) {
        resolve(`${name} finished using the weed eater.`);
      } else {
        reject(`${name} fell asleep after weed eating the yard.`);
      }
    }, 1500);

  })
}

function trimHedges(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10);
      if (randomNumber) {
        resolve(`${name} finished trimming the hedges.`);
      } else {
        reject(`${name} fell asleep after trimming the hedges.`);
      }
    }, 1000);

  })
}

function collectWood(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10);
      if (randomNumber) {
        resolve(`${name} finished collecting wood.`);
      } else {
        reject(`${name} fell asleep after collecting wood.`);
      }
    }, 2500);

  })
}

function waterGarden(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10);
      if (randomNumber) {
        resolve(`${name} finished watering the garden.`);
      } else {
        reject(`${name} fell asleep after watering the garden.`);
      }
    }, 500);

  })
}

async function doSummerChores(name) {
  try {
    const mowYardResult = await mowYard(name);
    console.log(mowYardResult);
  
    const weedEatResult = await weedEat(name);
    console.log(weedEatResult);
  
    const trimHedgesResult = await trimHedges(name);
    console.log(trimHedgesResult);
  
    const collectWoodResult = await collectWood(name);
    console.log(collectWoodResult);
  
    const waterGardenResult = await waterGarden(name);
    console.log(waterGardenResult);
    console.log(`${name} finished all their chores!`);
  } catch (err) {
    console.error(err);
  }
}
doSummerChores("Samwise");