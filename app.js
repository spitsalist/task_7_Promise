"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function asyncTask1() {
    return new Promise(() => {
        setTimeout(() => {
            console.log('Task 1');
        }, 1000);
    });
}
function asyncTask2() {
    return new Promise(() => {
        setTimeout(() => {
            console.log('Task 2');
        }, 1500);
    });
}
function asyncTask3() {
    return new Promise(() => {
        setTimeout(() => {
            console.log('Task 3');
        }, 2000);
    });
}
function runTask() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield Promise.all([asyncTask1(), asyncTask2(), asyncTask3()]);
            console.log(result);
        }
        catch (error) {
            console.log(error);
        }
    });
}
runTask();
