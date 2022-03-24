type Action = {
  type: string;
  payload: any;
  skipTracking?: boolean;
  error: boolean;
}

type Fn<a, b> = (_1: a) => b
type Fn2<a, b, c> = (_1: a, _2: b) => c
type Fn3<a, b, c, d> = (_1: a, _2: b, _3: c) => d
type Fn4<a, b, c, d, e> = (_1: a, _2: b, _3: c, _4: d) => e