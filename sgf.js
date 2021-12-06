/*class NodeObj {
    constructor(parentTree, parentNode) {
        this.parentTree = parentTree;
        this.parentNode = parentNode;
        this.nextNode = null;
        this.subtrees = [];
        this.rootProperties = null;
        this.gameInfoProperties = null;
        this.moveProperties = null;
        this.setupProperties = null;
        this.nodeAnnotationProperties = null;
        this.moveAnnotationProperties = null;
    }

    setNext(next) {
        this.nextNode = next;
    }

    addSubtree(subtree) {
        this.subtrees.push(subtree)
    }
}

class RootProperties {
    constructor() {
        this.applicationName = "";
        this.applicationVersion = "";
        this.charset = "UTF-8";
        this.format = 1;
        this.gameType = 1;
        this.boardSize = [19,19];
    }
}

class GameInfoProperties {
    constructor() {
        this.annotator = "";
        this.blackRank = "";
        this.blackTeamName = "";
        this.copyright = "";
        this.date = "";
        this.eventName = "";
        this.gameName = "";
        this.gameComment = "";
        this.openingComment = "";
        this.overtimeMethod = "";
        this.blackPlayer = "";
        this.placeName = "";
        this.whitePlayer = "";
        this.result = "";
        this.round = "";
        this.rules = "";
        this.source = "";
        this.timeLimits = 0;
        this.userName = "";
        this.whiteRank = "";
        this.whiteTeamName = "";
        this.handicap = 0;
        this.komi = 0;
        this.blackTerritory = [];
        this.whiteTerritory = [];
    }
}

const MOVE_LOOKUP = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

let gameTreeSequence = later();

class MoveInfo {
    constructor(text, boardSize, color) {
        if((boardSize[0] <= 19 && boardSize[1] <= 19 && text === "tt") || text === "") {
            this.isPass = true;
            this.x = 0;
            this.y = 0;
            this.invalid = false;
        } else {
            this.isPass = false;
            this.x = MOVE_LOOKUP.indexOf(text[0])+1
            this.y = MOVE_LOOKUP.indexOf(text[1])+1
            this.invalid = (this.x == 0 || this.y == 0)
        }
        this.color = color;
    }
}

class MoveProperties {
    constructor() {
        this.move = null;
        this.ko = false;
        this.moveNumber = 0;
    }
}

class SetupProperties {
    constructor() {
        this.addBlack = [];
        this.clearPoints = [];
        this.addWhite = [];
        this.whoseTurn = "";
    }
}

class NodeAnnotationProperties {
    constructor() {
        this.comment = "";
        this.name = "";
    }
}

class MoveAnnotationProperties {
    constructor() {
        this.badMove = false;
        this.doubful = false;
        this.interesting = false;
        this.tesuji = false;
    }
}

class GameTreeObj {
    constructor() {
        this.root = null;
        this.gameInfoNode = null;
    }
    
}*/
