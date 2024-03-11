let input = prompt(`Enter your flavors with a comma in between them`);

input = input.split(`,`);

const findUniqueItems = (order) => {
  // finds unique items
  const flavors = [];
  for(item of order) {
    if(!flavors.includes(item)) {
      flavors.push(item);
    }
  }
  return flavors;
}

const calculateOrder = (order) => {

  const myFlavors = findUniqueItems(order);
  // adds the unique items into the object
  const orderOutput = {};
  for(flavor of myFlavors) {
    orderOutput[flavor] = 0;
  }
  // adds the quantities to each attribute
  for(item of order)
  {
    orderOutput[item]++;
  }
  return orderOutput;
}

const yourOrder = calculateOrder(input);

console.table(yourOrder);
