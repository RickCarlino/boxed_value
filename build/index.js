"use strict";
function box(value) {
    // FIRST PASS:
    // Cover the "easy cases"- use cases where typeof doesn't act weird.
    switch (typeof value) {
        case "string": return { kind: "string", value: value };
        case "number": return { kind: "number", value: value };
        case "boolean": return { kind: "boolean", value: value };
        case "undefined": return { kind: "undefined", value: value };
        case "function": return { kind: "function", value: value };
        case "symbol": return { kind: "symbol", value: value };
    }
    // SECOND PASS:
    // If that didn't turn up any results, check if its an Array, Object or Null
    switch (JSON.stringify(value)[0]) {
        case "[": return { kind: "array", value: value };
        case "{": return { kind: "object", value: value };
        case "n": return { kind: "null", value: value };
    }
    throw new Error("You broke `boxed_value`. Please raise an issue.");
}
exports.box = box;
