import { GlobalRegistrator } from "@happy-dom/global-registrator";

GlobalRegistrator.register();

const container = document.createElement("div");
document.body.appendChild(container);

const child = document.createElement("p");
child.textContent = "Hi";
container.appendChild(child);
const comment = document.createComment("");
container.appendChild(comment);

console.log("Expected ['Hi']");
console.log(document.querySelectorAll("p").map(item => item.textContent));

container.insertBefore(child, comment);
console.log("Expected ['Hi'] again, but...");
console.log(document.querySelectorAll("p").map(item => item.textContent));
