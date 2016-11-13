export interface StringBox {
    kind: "string";
    value: string;
}
export interface NumberBox {
    kind: "number";
    value: any;
}
export interface BooleanBox {
    kind: "boolean";
    value: any;
}
export interface UndefinedBox {
    kind: "undefined";
    value: any;
}
export interface NullBox {
    kind: "null";
    value: any;
}
export interface ObjectBox {
    kind: "object";
    value: Object;
}
export interface ArrayBox {
    kind: "array";
    value: any[];
}
export interface FunctionBox {
    kind: "function";
    value: Function;
}
export interface SymbolBox {
    kind: "symbol";
    value: symbol;
}
export declare type Box = StringBox | NumberBox | BooleanBox | UndefinedBox | NullBox | ObjectBox | ArrayBox | FunctionBox | SymbolBox;
export declare function box(value: any): Box;
