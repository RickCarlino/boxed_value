
export interface StringBox { kind: "string"; value: string; }
export interface NumberBox { kind: "number"; value: any; }
export interface BooleanBox { kind: "boolean"; value: any; }
export interface UndefinedBox { kind: "undefined"; value: any; }
export interface NullBox { kind: "null"; value: any; }
export interface ObjectBox { kind: "object"; value: Object; }
export interface ArrayBox { kind: "array"; value: any[]; }
export interface FunctionBox { kind: "function"; value: Function; }
export interface SymbolBox { kind: "symbol"; value: symbol; }

export type Box = StringBox
    | NumberBox
    | BooleanBox
    | UndefinedBox
    | NullBox
    | ObjectBox
    | ArrayBox
    | FunctionBox
    | SymbolBox

export function box(value: any): Box {
    // FIRST PASS:
    // Cover the "easy cases"- use cases where typeof doesn't act weird.
    switch (typeof value) {
        case "string": return { kind: "string", value };
        case "number": return { kind: "number", value };
        case "boolean": return { kind: "boolean", value };
        case "undefined": return { kind: "undefined", value };
        case "function": return { kind: "function", value };
        case "symbol": return { kind: "symbol", value };
    }

    // SECOND PASS:
    // If that didn't turn up any results, check if its an Array, Object or Null
    switch (JSON.stringify(value)[0]) {
        case "[": return { kind: "array", value };
        case "{": return { kind: "object", value };
        case "n": return { kind: "null", value };
    }

    throw new Error("You broke `boxed_value`. Please raise an issue.");
}
