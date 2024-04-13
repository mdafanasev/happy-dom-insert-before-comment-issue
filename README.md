# Call of insertBefore with a comment node causes duplication of node

[Link to the issue](https://github.com/capricorn86/happy-dom/issues/1406)

## Description

Using `insertBefore` with a comment node results in copying the target node instead of moving it

```js
// Create container
const container = document.createElement("div");
document.body.appendChild(container);

// Create child
const child = document.createElement("p");
child.textContent = "Hi";
container.appendChild(child);

// Create comment node
const comment = document.createComment("");
container.appendChild(comment);

// Query nodes, it returns "['Hi']", as expected
console.log(document.querySelectorAll("p").map(item => item.textContent));

// Try to move node
container.insertBefore(child, comment);

// Query nodes, "['Hi']" expected, but it returns "['Hi', 'Hi']"
console.log(document.querySelectorAll("p").map(item => item.textContent));
```

## Steps to reproduce

1. Create a DOM element and add it to the container
2. Create a comment node and add it to the same container
3. Attempt to move the element using insertBefore, using the comment node as the reference node

Expected result:

The target node should be moved or remain untouched

Actual result:

The target node is duplicated

## Environment

@happy-dom/global-registrator: 14.7.1

NodeJS: 20.11.0

