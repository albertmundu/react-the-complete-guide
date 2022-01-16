// imports

import person from "./lib/person.js";
import prs from "./lib/person.js"; //person is default export

import { baseData } from "./lib/utility.js"; // importing named exports; named exports have to be imported by their names
import { clean } from "./lib/utility.js";

// using alias
import { baseData as b } from "./lib/utility.js";

// using alias for every named exports; can also import all named exports
import * as bundled from "./lib/utility.js";

console.table(person);
console.log(prs, baseData, clean());

console.log(b);
console.log(bundled.clean(), bundled.baseData);
