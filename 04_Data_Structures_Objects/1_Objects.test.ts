import { expect, it } from "vitest";

//Solucion 1: Type
type AddTwoNumbersArgs = {
  first: number;
  second: number;
};
// export const addTwoNumbers = (params: AddTwoNumbersArgs) => {
//   return params.first + params.second;
// };

//Solucion 2: interface
interface AddTwoNumbersArgs {
  first: number;
  second: number;
}
// export const addTwoNumbers = (params: AddTwoNumbersArgs) => {
//   return params.first + params.second;
// };

//Solucion 3: inline
export const addTwoNumbers = (params: { first: number; second: number }) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 4,
      second: 2,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
