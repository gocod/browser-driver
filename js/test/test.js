"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const _1 = require('../');
const bro = new _1.Browser({
    init: { url: 'http://localhost:9515' },
    desiredCapabilities: {
        browserName: 'chrome'
    }
});
main();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield bro.start();
            yield bro.url('http://google.com');
            console.log(yield bro.title());
        }
        catch (e) {
            console.log(e);
        }
    });
}