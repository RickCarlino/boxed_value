
type AbstractBox = { kind: string; }
export interface StringBox { kind: "string"; value: string; }
export interface NumberBox { kind: "number"; value: any; }
export interface BooleanBox { kind: "boolean"; value: any; }
export interface UndefinedBox { kind: "undefined"; value: any; }
export interface NullBox { kind: "null"; value: any; }
export interface ObjectBox { kind: "object"; value: Object; }
export interface ArrayBox { kind: "array"; value: any[]; }
export interface FunctionBox { kind: "function"; value: any[]; }
export interface SymbolBox { kind: "symbol"; value: any[]; }
export type Box = StringBox
    | NumberBox
    | BooleanBox
    | UndefinedBox
    | NullBox
    | ObjectBox
    | ArrayBox

export function box(input: any) {
    switch (typeof input) {
        case "string":
            return {
                kind: "",
                value: input
            };
        case "number":
            return {
                kind: "",
                value: input
            };
        case "boolean":
            return {
                kind: "",
                value: input
            };
        case "undefined":
            return {
                kind: "",
                value: input
            };
        case "null":
            return {
                kind: "",
                value: input
            };
        case "object":
            return {
                kind: "",
                value: input
            };
        case "array":
            return {
                kind: "",
                value: input
            };
        case "function":
            return {
                kind: "",
                value: input
            };
        case "symbol":
            return {
                kind: "",
                value: input
            };
    }
    throw new Error("You broke `boxed_value`. Please raise an issue.");
}
