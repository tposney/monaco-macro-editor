import type { editor } from "monaco-editor";

export type AnyFn = (...args:any) => any

export type Uints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
export type LoopIndex = [-1, ...Uints];

export type TupleOf<Value, Length extends LoopIndex[number]> = Length extends 0 | -1
  ? []
  : [Value, ...TupleOf<Value, LoopIndex[Length]>];


export type InputFunctionArg<Input> = readonly [(arg: Input) => unknown, ...AnyFn[]];
export type OutputFunctionReturn<Output> = readonly [
  ...TupleOf<AnyFn, LoopIndex[number]>,
  (...args: never[]) => Output
];
export type PipeInput<Input, Output> = InputFunctionArg<Input> & OutputFunctionReturn<Output>;
export type NewOptionsType = Parameters<editor.IStandaloneCodeEditor['updateOptions']>[0]
