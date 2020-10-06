const url = require('url');

const myUrl = new URL('http://mywebsite.com:8080/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname (does not get port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Leep through params
myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`);
});
