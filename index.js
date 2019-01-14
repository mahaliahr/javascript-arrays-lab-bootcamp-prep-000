var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(kitten){
kittens.push(kitten)
}

function destructivelyPrependKitten(kitten) {
kittens.unshift(kitten)
}

function destructivelyRemoveLastKitten(kitten) {
kittens.pop(kitten)
}

function destructivelyRemoveFirstKitten(kitten) {
kittens.shift(kitten)
}

function appendKitten(kitten) {
kittens = kittens.concat(kitten)
}

function prependKitten(kitten) {
kittens = [...kittens, kitten]
return kittens
}

function removeLastKitten() {

}

function removeFirstKitten() {

}
