// this is module import file
//  default import

import square from "./es6.js";

console.log(square(3,2));

// named import
import { multiply, add, } from "./es6.js";

console.log(multiply(3,2));