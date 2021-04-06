/* eslint-disable @typescript-eslint/no-explicit-any */

export const spy = (): {fn: (args:any) => void, receivedArguments: () => any, receivedArgument: (n:string | number) => any} => {
  let receivedArguments:any = undefined;


  return {
    fn: (...args) => receivedArguments = args,
    receivedArguments: () => receivedArguments,
    receivedArgument: (n:string | number) => receivedArguments[n]
  };
};