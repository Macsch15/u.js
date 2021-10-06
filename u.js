/**
 * returns true if the predicate function returns true for all elements in a collection and false otherwise.
 * You can omit the second argument fnif you want to use Booleanas a default value.
 * @param arr
 * @param fn
 */
const all = (arr, fn = Boolean) => arr.every(fn);

/**
 * checks whether all elements of the array are equal.
 * @param arr
 */
const allEqual = arr => arr.every(val => val === arr[0]);

/**
 * checks whether two numbers are approximately equal to each other, with a small difference.
 * @param v1
 * @param v2
 * @param epsilon
 * @returns {boolean}
 */
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

/**
 * converts the elements that don’t have commas or double quotes to strings with comma-separated values.
 * @param arr
 * @param delimiter
 */
const arrayToCSV = (arr, delimiter = ',') => arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');

/**
 * converts the elements of an array into `` tags and appends them to the list of the given ID.
 * @param arr
 * @param listID
 * @returns {*}
 */
const arrayToHtmlList = (arr, listID) => (el => ((el = document.querySelector('#' + listID)), (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))))();

/**
 * executes a function, returning either the result or the caught error object.
 * @param fn
 * @param args
 * @returns {Error|Error|*}
 */
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};

/**
 * returns the average of two or more numerical values.
 * @param nums
 * @returns {number}
 */
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;

/**
 * returns the average of an array after initially doing the mapping of each element to a value using a given function.
 * @param arr
 * @param fn
 * @returns {number}
 */
const averageBy = (arr, fn) => arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) / arr.length;

/**
 * splits values into two groups and then puts a truthy element of filterin the first group, and in the second group otherwise.
 * @param arr
 * @param filter
 */
const bifurcate = (arr, filter) => arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);

/**
 * splits values into two groups, based on a predicate function.
 * If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group.
 * @param arr
 * @param fn
 */
const bifurcateBy = (arr, fn) => arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);

/**
 * checks whether the bottom of a page is visible.
 * @returns {boolean}
 */
const bottomVisible = () => document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight);

/**
 * returns the length of a string in bytes.
 * @param str
 * @returns {number}
 */
const byteSize = str => new Blob([str]).size;

/**
 * capitalizes the first letter of a string.
 * @param first
 * @param rest
 * @returns {string}
 */
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');

/**
 * capitalizes the first letter of every word in a given string.
 * @param str
 */
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

/**
 * converts a non-array value into array.
 * @param val
 * @returns {*|*[]}
 */
const castArray = val => (Array.isArray(val) ? val : [val]);

/**
 * removes false values from an array.
 * @param arr
 */
const compact = arr => arr.filter(Boolean);

/**
 * counts the occurrences of a value in an array.
 * @param arr
 * @param val
 */
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

/**
 * returns the current URL.
 */
const currentURL = () => window.location.href;

/**
 * gets the day of the year from a Date object.
 * @param date
 * @returns {number}
 */
const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

/**
 * turns the first letter of a string into lowercase.
 * @param first
 * @param rest
 * @returns {string}
 */
const decapitalize = ([first, ...rest]) => first.toLowerCase() + rest.join('');

/**
 * flattens an array recursively.
 * @param arr
 * @returns {*[]}
 */
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

/**
 * assigns default values for all properties in an object that are undefined.
 * @param obj
 * @param defs
 * @returns {any}
 */
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

/**
 * delays the execution of a function until the current call stack is cleared.
 * @param fn
 * @param args
 * @returns {number}
 */
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

/**
 * This code snippet can be used to convert a value from degrees to radians.
 * @param deg
 * @returns {number}
 */
const degreesToRads = deg => (deg * Math.PI) / 180.0;

/**
 * finds the difference between two arrays.
 * @param a
 * @param b
 * @returns {*}
 */
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

/**
 * This method returns the difference between two arrays, after applying a given function to each element of both lists.
 * @param a
 * @param b
 * @param fn
 * @returns {*}
 */
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

/**
 * removes the values for which the comparator function returns false.
 * @param arr
 * @param val
 * @param comp
 */
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

/**
 * gets a number as input and returns an array of its digits.
 * @param n
 * @returns {number[]}
 */
const digitize = n => [...`${n}`].map(i => parseInt(i));

/**
 * returns the distance between two points by calculating the Euclidean distance.
 * @param x0
 * @param y0
 * @param x1
 * @param y1
 * @returns {number}
 */
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

/**
 * returns a new array with n elements removed from the left.
 * @param arr
 * @param n
 */
const drop = (arr, n = 1) => arr.slice(n);

/**
 * returns a new array with n elements removed from the right.
 * @param arr
 * @param n
 */
const dropRight = (arr, n = 1) => arr.slice(0, -n);

/**
 * removes elements from the right side of an array until the passed function returns true.
 * @param arr
 * @param func
 * @returns {*}
 */
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

/**
 * removes elements from an array until the passed function returns true.
 * @param arr
 * @param func
 * @returns {*}
 */
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

/**
 * checks whether the parent element contains the child.
 * @param parent
 * @param child
 * @returns {false}
 */
const elementContains = (parent, child) => parent !== child && parent.contains(child);

/**
 * removes duplicate values in an array.
 * @param arr
 * @returns {any[]}
 */
const filterNonUnique = arr => [ ...new Set(arr)];

/**
 * returns the first key that satisfies a given function.
 * @param obj
 * @param fn
 * @returns {string}
 */
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

/**
 * returns the last element for which a given function returns a truthy value.
 * @param arr
 * @param fn
 */
const findLast = (arr, fn) => arr.filter(fn).pop();

/**
 * flattens an array up to a specified depth using recursion.
 * @param arr
 * @param depth
 */
const flatten = (arr, depth = 1) => arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

/**
 * executes a function for each element of an array starting from the array’s last element.
 * @param arr
 * @param callback
 */
const forEachRight = (arr, callback) => arr.slice(0).reverse().forEach(callback);

/**
 * iterates on each property of an object and iterates a callback for each one respectively.
 * @param obj
 * @param fn
 */
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));

/**
 * prints the name of a function into the console.
 * @param fn
 */
const functionName = fn => (console.debug(fn.name), fn);

/**
 * can be used to get the time from a Dateobject as a string.
 * @param date
 * @returns {string}
 */
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

/**
 * can be used to find the difference in days between two dates.
 * @param dateInitial
 * @param dateFinal
 * @returns {number}
 */
const getDaysDiffBetweenDates = (dateInitial, dateFinal) => (dateFinal - dateInitial) / (1000 * 3600 * 24);

/**
 * can be used to get the value of a CSS rule for a particular element.
 * @param el
 * @param ruleName
 */
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

/**
 * can be used to get the type of a value.
 * @param v
 * @returns {string|string}
 */
const getType = v => v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();

/**
 * checks whether an element has a particular class.
 * @param el
 * @param className
 * @returns {boolean}
 */
const hasClass = (el, className) => el.classList.contains(className);

/**
 * returns the head of a list.
 * @param arr
 */
const head = arr => arr[0];

/**
 * can be used to hide all elements specified.
 * @param el
 */
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

/**
 * can be used to redirect from HTTP to HTTPS in a particular domain.
 */
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

/**
 * can be used to get all indexes of a value in an array, which returns an empty array, in case this value is not included in it.
 * @param arr
 * @param val
 */
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

/**
 * returns all elements of an array except the last one.
 * @param arr
 */
const initial = arr => arr.slice(0, -1);

/**
 * can be used to insert an HTML string after the end of a particular element.
 * @param el
 * @param htmlString
 */
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

/**
 * can be used to insert an HTML string before a particular element.
 * @param el
 * @param htmlString
 */
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

/**
 * can be used to get an array with elements that are included in two other arrays.
 * @param a
 * @param b
 * @returns {*}
 */
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

/**
 * can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays.
 * @param a
 * @param b
 * @param fn
 * @returns {*}
 */
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

/**
 * can be used to return a list of elements that exist in both arrays by using a comparator function.
 * @param a
 * @param b
 * @param comp
 */
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

/**
 * can be used to check if a value is of a particular type.
 * @param type
 * @param val
 * @returns {boolean}
 */
const is = (type, val) => ![, null].includes(val) && val.constructor === type;

/**
 * can be used to check whether a date is after another date.
 * @param dateA
 * @param dateB
 * @returns {boolean}
 */
const isAfterDate = (dateA, dateB) => dateA > dateB;

/**
 * can be used to check whether a particular string is an anagram with another string.
 * @param str1
 * @param str2
 * @returns {boolean}
 */
const isAnagram = (str1, str2) => {
  const normalize = str => str.toLowerCase().replace(/[^a-z0-9]/gi, '').split('').sort().join('');
  return normalize(str1) === normalize(str2);
};

/**
 * can be used to check if a provided argument is iterable like an array.
 * @param obj
 * @returns {boolean}
 */
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

/**
 * can be used to check whether a date is before another date.
 * @param dateA
 * @param dateB
 * @returns {boolean}
 */
const isBeforeDate = (dateA, dateB) => dateA < dateB;

/**
 * can be used to check whether an argument is a boolean.
 * @param val
 * @returns {boolean}
 */
const isBoolean = val => typeof val === 'boolean';

/**
 * can be used to determine whether the current runtime environment is a browser.
 * This is helpful for avoiding errors when running front-end modules on the server (Node).
 * @returns {boolean}
 */
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

/**
 * can be used to determine whether the browser tab is focused.
 * @returns {boolean}
 */
const isBrowserTabFocused = () => !document.hidden;

/**
 * can be used to determine whether a string is lower case.
 * @param str
 * @returns {boolean}
 */
const isLowerCase = str => str === str.toLowerCase();

/**
 * can be used to check whether a value is null or undefined.
 * @param val
 * @returns {boolean}
 */
const isNil = val => val === undefined || val === null;

/**
 * can be used to check whether a value is null.
 * @param val
 * @returns {boolean}
 */
const isNull = val => val === null;

/**
 * can be used to check whether a provided value is a number.
 * @param n
 * @returns {boolean}
 */
const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);

/**
 * can be used to check whether a provided value is an object.
 * It uses the Object constructor to create an object wrapper for the given value.
 * If it is already an object, then an object type that corresponds to the given value will be returned.
 * Otherwise, a new object will be returned.
 * @param obj
 * @returns {boolean}
 */
const isObject = obj => obj === Object(obj);

/**
 * can be used to check if a value is not nulland that its typeof is "object".
 * @param val
 * @returns {boolean}
 */
const isObjectLike = val => val !== null && typeof val === 'object';

/**
 * checks whether a value is an object created by the Object constructor.
 * @param val
 * @returns {boolean}
 */
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

/**
 * checks whether an object looks like a Promise.
 * @param obj
 * @returns {boolean}
 */
const isPromiseLike = obj => obj !== null && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';

/**
 * can be used to check whether two dates are equal.
 * @param dateA
 * @param dateB
 * @returns {boolean}
 */
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();

/**
 * can be used to check whether an argument is a string.
 * @param val
 * @returns {boolean}
 */
const isString = val => typeof val === 'string';

/**
 * can be used to check whether an argument is a symbol.
 * @param val
 * @returns {boolean}
 */
const isSymbol = val => typeof val === 'symbol';

/**
 * can be used to check whether a value is undefined.
 * @param val
 * @returns {boolean}
 */
const isUndefined = val => val === undefined;

/**
 * can be used to check whether a string is upper case.
 * @param str
 * @returns {boolean}
 */
const isUpperCase = str => str === str.toUpperCase();

/**
 * can be used to check whether a string is a valid JSON.
 * @param str
 * @returns {boolean}
 */
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * returns the last element of an array
 * @param arr
 */
const last = arr => arr[arr.length - 1];

/**
 * compares two objects to determine if the first one contains the same property values as the second one.
 * @param obj
 * @param source
 * @returns {this is string[]}
 */
const matches = (obj, source) => Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

/**
 * can be used to get the latest date.
 * @param dates
 * @returns {Date}
 */
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

/**
 * returns the n largest elements from a list.
 * If n is greater than or equal to the list’s length, then it will return the original list (sorted in descending order).
 * @param arr
 * @param n
 * @returns {*[]}
 */
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

/**
 * can be used to get the earliest date.
 * @param dates
 * @returns {Date}
 */
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

/**
 * returns the n smallest elements from a list.
 * If n is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order).
 * @param arr
 * @param n
 * @returns {*[]}
 */
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

/**
 * can be used to apply the not operator (!) to a predicate function with its arguments.
 * @param func
 * @returns {function(...[*]): boolean}
 */
const negate = func => (...args) => !func(...args);

/**
 * can be used to convert a nodeList to an array.
 * @param nodeList
 * @returns {*[]}
 */
const nodeListToArray = nodeList => [...nodeList];

/**
 * can be used to pad a string on both sides with a specified character if it is shorter than the specified length.
 * @param str
 * @param length
 * @param char
 * @returns {*}
 */
const pad = (str, length, char = ' ') => str.padStart((str.length + length) / 2, char).padEnd(length, char);

/**
 * can be used to convert an angle from radians to degrees.
 * @param rad
 * @returns {number}
 */
const radsToDegrees = rad => (rad * 180.0) / Math.PI;

/**
 * can be used to generate a random hexadecimal color code.
 * @returns {string}
 */
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

/**
 * can be used to generate an array with n random integers in a specified range.
 * @param min
 * @param max
 * @param n
 * @returns {unknown[]}
 */
const randomIntArrayInRange = (min, max, n = 1) => Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);

/**
 * can be used to generate a random integer in a specified range.
 * @param min
 * @param max
 * @returns {*}
 */
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * can be used to return a random number in a specified range.
 * @param min
 * @param max
 * @returns {*}
 */
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

/**
 * can be used to do a redirect to a specified URL.
 * @param url
 * @param asLink
 * @returns {*}
 */
const redirect = (url, asLink = true) => asLink ? (window.location.href = url) : window.location.replace(url);

/**
 * can be used to reverse a string.
 * @param str
 * @returns {string}
 */
const reverseString = str => [...str].reverse().join('');

/**
 * can be used to round a number to a specified number of digits.
 * @param n
 * @param decimals
 * @returns {number}
 */
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

/**
 * can be used to run an array of promises in series.
 * @param ps
 */
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());

/**
 * can be used to get a random number from an array.
 * @param arr
 */
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

/**
 * can be used to get n random elements from unique positions from an array up to the size of the array.
 * Elements in the array are shuffled using the Fisher-Yates algorithm
 * @param arr
 * @param n
 * @returns {*}
 */
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};
