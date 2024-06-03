const context = {
  createRunAsync: (fn: Function) => {
    return fn;
  },
};

export const Worklets = {
  defaultContext: context,
  createSharedValue: (value: any) => {
    return {
      value,
      addListener: (fn: Function) => {
        return () => {};
      },
    };
  },
  createContext: (name: string) => {
    return context;
  },
};
