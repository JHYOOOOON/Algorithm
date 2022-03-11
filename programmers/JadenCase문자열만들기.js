const jadenCase = (str) => str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();

const solution = (s) => s.split(' ').map(jadenCase).join(' ');