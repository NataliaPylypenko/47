import React, {
    useState,
    useRef,
    useContext,
    useReducer,
    useCallback,
    useMemo,
    useEffect,
    useLayoutEffect
  } from 'react';

// --------- useState ---------
// Inferred as number
const [value11, setValue11] = useState(0);

// Explicitly setting the types
const [value12, setValue12] = useState<number | undefined>(undefined);
const [value13, setValue13] = useState<Array<number>>([]);

interface IUser {
  name: string;
  age?: number;
}
const [value14, setValue14] = useState<IUser>({ name: 'Yauhen' });


// --------- useRef ---------
const ref1 = useRef<HTMLElement>(null!);
const ref2 = useRef<HTMLElement | null>(null);


// // --------- useContext ---------
// interface ITheme {
//   backgroundColor: string;
//   color: string;
// }
//
// // Context creation
// const ThemeContext = createContext<ITheme>({
//   backgroundColor: 'black',
//   color: 'white',
// })
//
// // Accessing context in a child component
// const themeContext = useContext<ITheme>(ThemeContext);


// // --------- useReducer ---------
// interface State { count: number; }
//
// type Action = { type: 'increment' | 'decrement' }
//
// const counterReducer = ({ count }: State, { type }: Action) => {
//   switch (type) {
//     case 'increment': return { count: count + 1 };
//     case 'decrement': return { count: count - 1 };
//     default: return {};
//   }
// };
//
// const [state, dispatch] = useReducer(counterReducer, { count: 0 });
//
// dispatch({ type: 'increment' });
// dispatch({ type: 'decrement' });


// // --------- useCallback & useMemo ---------
// // Callback
// // Inferred as number
// const memoizedCallback = useCallback(() => { sum(a, b); }, [a, b]);
//
// // Memo
// // Inferred as (value1: number, value2: number) => number
// const memoizedValue = useMemo((a: number, b: number) => sum(a, b), [a, b]);


// // --------- useEffect & useLayoutEffect ---------
// useEffect(() => {
//   const subscriber = subscribe(options);
//   return () => {
//     unsubscribe(subscriber)
//   };
// }, [options]);
