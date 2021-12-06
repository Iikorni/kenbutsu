import parjs from "parjs";
const {anyChar, pipe, upper, string, ResultKind, letter, anyCharOf, noCharOf, whitespace} = parjs;
import parsjcomb from "parjs/combinators.js"
const {many, stringify, between, then, or, mapConst, thenq, map, later} = parsjcomb;

import fs from "fs"

class GameTree {
    constructor(nodes, subtrees) {
        this.nodes = nodes;
        this.subtrees = subtrees;
    }
}

class Node {
    constructor(properties) {
        this.properties = properties
    }
}

class Property {
    constructor(name, values) {
        this.name = name;
        this.values = values;
    }
}

let gameTreeSequence = later();

let escapeChar = string("\\]").pipe(
    mapConst("]")
)

let character = escapeChar.pipe(
    or(noCharOf("]"))
)

let nodeDelimiter = string(";")

let propertyValueType = character.pipe(
    many(),
    stringify()
)


let propertyValue = propertyValueType.pipe(
    between("[", "]"),
    thenq(
        whitespace()
    )
)

let propIdent = upper().pipe(
    then(
        upper().pipe(
            many(),
        )
    ),
    stringify()
)

let property = propIdent.pipe(
    then(
        propertyValue.pipe(
            many()
        )
    ),
    thenq(
        whitespace()
    ),
    map(
        arr => new Property(arr[0], arr[1])
    )
)

let node = nodeDelimiter.pipe(
    then(
        property.pipe(
            many()
        )
    ),
    thenq(
        whitespace()
    ),
    map(arr => new Node(arr[1]))
)

let sequence = node.pipe(
    then(
        node.pipe(
            many()
        )
    ),
    map(
        arr => arr.flat()
    )
)

let gameTree = sequence.pipe(
    then(
        gameTreeSequence.pipe(
            many()
        )
    ),
    between("(", ")"),
    thenq(
        whitespace()
    ),
    map(
        arr => new GameTree(arr[0], arr[1])
    )
)

gameTreeSequence.init(gameTree)

let collection = gameTree.pipe(
    then(
        gameTree.pipe(
            many()
        )
    ),
    map(
        arr => arr.flat()
    )
)

fs.readFile("real_game_ai.sgf", "utf8", (err, data) => {
    if(err) {
        console.error(err)
        return
    }
    let result = collection.parse(data)

    if (result.kind !== ResultKind.Ok) {
        console.log(result.trace);
    } else {
        console.log(JSON.stringify(result.value));
    }
})

