// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(catName) {
    return cats.splice(3, 0, catName)
}
function destructivelyPrependCat(catName) {
    return cats.splice(0, 0, catName)
}
function destructivelyRemoveLastCat() {
    return cats.splice(-1, 1)
}
function destructivelyRemoveFirstCat() {
    return cats.splice(0, 1)
}
function appendCat(catName) {
    const catArray2 = cats.slice();
    catArray2.push(catName);
    return catArray2;
}
function prependCat(catName) {
    const catArray3 = [catName, ...cats.slice()];
    return catArray3;
}
function removeLastCat() {
    return cats.slice(0, -1);
}
function removeFirstCat() {
    return cats.slice(1);
}