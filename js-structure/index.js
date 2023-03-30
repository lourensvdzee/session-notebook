/** Get authors */

import { authors } from "./utils/authors.js";
import { createHeader } from "./component/header/header.js";
import { createCard } from "./component/card/card.js";
import kika from "./utils/other.js";

/* console.log(`my name is ${name}`);
sayHello();
kika(); */
console.log(kika);

/**
 * Cipher
 * https://en.wikipedia.org/wiki/Caesar_cipher
 */

/** Get root element */
const root = document.querySelector('#root');

/** Header */
const header = createHeader();
root.append(header);


/** Main: Author Cards */
authors.forEach((author) => {
    const card = createCard(author);
    root.append(card);
});
