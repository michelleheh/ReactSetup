// search action
export const testAction = (bool, input) => {
  return {
    type: 'TEST',
    display: bool,
    input: input,
  };
};