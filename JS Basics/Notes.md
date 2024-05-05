# Notes:

- NaN is also returned as number 
<br>"33" => 33
<br>"33a" => NaN

- `a++` postIncrement, `++a` preIncrement

## Memory:
- Stack `LIFO` (Primitive), Heap (Non-Primitive)
- Stack => copy of the value is given
- Heap => reference is given

## Async:
- JavaScript is Synchronous
- Javascript is Single Threaded (by default)

## Block Code vs Non Blocking Code
- Blocking => Sync
- Non-Blocking => Async
- WebAPI/BrowserAPI is found on browser
- Task Queue allows the speed of execution

## Fetch vs Axios
### Fetch: 
- inbuilt Async function in node
- Convert the response into json to read the data
- Type of the request is mentioned as an argument after the url `fetch(url, {method: "POST"})`
- lightweight
- Does not have interceptors support

### Axios:
- An external library
- Import axios to use it
- Can automatically understand the data and convert it into json
- Type of the request can be mentioned using `.get()` or `.post()` format 
- Has interceptors support ( Interceptors in Axios are middleware functions that allow developers to tap into the request and response flows. They provide a centralized gateway to modify, authenticate, or handle errors in HTTP requests and responses. Axios interceptors can be used to add headers, modify requests, handle errors, and more, making them a powerful tool for customizing the behavior of HTTP calls )