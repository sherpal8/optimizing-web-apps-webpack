!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){t(1),e.exports=t(6)},function(e,n,t){"use strict";t.r(n);t(2),t(3),t(4),t(5);angular.module("solitaire",["klondike","ngDraggable"])},function(e,n){angular.module("klondike.scoring",[]).service("scoring",[function(){"use strict";this.score=0,this.newGame=function(){this.score=0},this.tableauCardTurnedUp=function(){this.score+=5},this.dropped=function(e,n){this.score+=function(e,n){if("TableauPile"===n.name)return"FoundationPile"===e.name?-15:5;if("FoundationPile"===n.name&&("TableauPile"===e.name||"WastePile"===e.name))return 10}(e,n)||0},this.wasteRecycled=function(){this.score=Math.max(this.score-100,0)}}])},function(e,n){angular.module("klondike",["klondike.game","klondike.board","klondike.scoring"])},function(e,n){!function(){"use strict";angular.module("klondike.board",["ngRoute","klondike.game"]).config(["$routeProvider",function(e){e.when("/board",{templateUrl:"klondike/board.html",controller:"KlondikeController"}).otherwise({redirectTo:"/board"})}]).controller("KlondikeController",["$scope","klondikeGame","scoring",function(e,n,t){n.newGame(),e.game=n,e.scoring=t}]).directive("sNoPile",(function(){return{restrict:"E",template:'<div class="no-pile"></div>'}})).directive("sTableau",(function(){return{restrict:"E",templateUrl:"klondike/piles/tableau.html"}})).directive("sFoundation",(function(){return{restrict:"E",templateUrl:"klondike/piles/foundation.html"}})).directive("sCard",(function(){return{restrict:"A",templateUrl:"cards/card.html",scope:{card:"="}}})).directive("sRemainder",(function(){return{restrict:"E",templateUrl:"klondike/piles/remainder.html"}})).directive("sWaste",(function(){return{restrict:"E",templateUrl:"klondike/piles/waste.html"}}))}()},function(e,n){!function(){"use strict";function e(e){this.newGame=function(){var e=(new Deck).shuffled();this.newGameFromDeck(e)},this.newGameFromDeck=function(n){e.newGame(),function(e){e.forEach((function(e){e.turnDown()}))}(n),this.tableaus=function(n){var t=[new TableauPile(n.slice(0,1),e),new TableauPile(n.slice(1,3),e),new TableauPile(n.slice(3,6),e),new TableauPile(n.slice(6,10),e),new TableauPile(n.slice(10,15),e),new TableauPile(n.slice(15,21),e),new TableauPile(n.slice(21,28),e)];return t.forEach((function(e){e.turnTopCardUp()})),t}(n),this.foundations=_.range(1,5).map((function(){return new FoundationPile([],e)})),this.remainder=function(n){return new RemainderPile(n.slice(28),e)}(n)}}angular.module("klondike.game",[]).service("klondikeGame",["scoring",e]),e.prototype.tryMoveTopCardToAnyFoundation=function(e){if(!e.isEmpty()){var n=_.find(this.foundations,(function(n){return n.willAcceptCard(e.topCard())}));n&&n.moveCardsFrom(e)}}}()},function(e,n){!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n),t(1),t(2),t(3),t(4),angular.module("solitaire",["klondike","ngDraggable"])},function(e,n){angular.module("klondike.scoring",[]).service("scoring",[function(){"use strict";this.score=0,this.newGame=function(){this.score=0},this.tableauCardTurnedUp=function(){this.score+=5},this.dropped=function(e,n){this.score+=function(e,n){return"TableauPile"===n.name?"FoundationPile"===e.name?-15:5:"FoundationPile"!==n.name||"TableauPile"!==e.name&&"WastePile"!==e.name?void 0:10}(e,n)||0},this.wasteRecycled=function(){this.score=Math.max(this.score-100,0)}}])},function(e,n){angular.module("klondike",["klondike.game","klondike.board","klondike.scoring"])},function(e,n){!function(){"use strict";angular.module("klondike.board",["ngRoute","klondike.game"]).config(["$routeProvider",function(e){e.when("/board",{templateUrl:"klondike/board.html",controller:"KlondikeController"}).otherwise({redirectTo:"/board"})}]).controller("KlondikeController",["$scope","klondikeGame","scoring",function(e,n,t){n.newGame(),e.game=n,e.scoring=t}]).directive("sNoPile",(function(){return{restrict:"E",template:'<div class="no-pile"></div>'}})).directive("sTableau",(function(){return{restrict:"E",templateUrl:"klondike/piles/tableau.html"}})).directive("sFoundation",(function(){return{restrict:"E",templateUrl:"klondike/piles/foundation.html"}})).directive("sCard",(function(){return{restrict:"A",templateUrl:"cards/card.html",scope:{card:"="}}})).directive("sRemainder",(function(){return{restrict:"E",templateUrl:"klondike/piles/remainder.html"}})).directive("sWaste",(function(){return{restrict:"E",templateUrl:"klondike/piles/waste.html"}}))}()},function(e,n){!function(){"use strict";function e(e){this.newGame=function(){var e=(new Deck).shuffled();this.newGameFromDeck(e)},this.newGameFromDeck=function(n){e.newGame(),function(e){e.forEach((function(e){e.turnDown()}))}(n),this.tableaus=function(n){var t=[new TableauPile(n.slice(0,1),e),new TableauPile(n.slice(1,3),e),new TableauPile(n.slice(3,6),e),new TableauPile(n.slice(6,10),e),new TableauPile(n.slice(10,15),e),new TableauPile(n.slice(15,21),e),new TableauPile(n.slice(21,28),e)];return t.forEach((function(e){e.turnTopCardUp()})),t}(n),this.foundations=_.range(1,5).map((function(){return new FoundationPile([],e)})),this.remainder=function(n){return new RemainderPile(n.slice(28),e)}(n)}}angular.module("klondike.game",[]).service("klondikeGame",["scoring",e]),e.prototype.tryMoveTopCardToAnyFoundation=function(e){if(!e.isEmpty()){var n=_.find(this.foundations,(function(n){return n.willAcceptCard(e.topCard())}));n&&n.moveCardsFrom(e)}}}()}])}]);