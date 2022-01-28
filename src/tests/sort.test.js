import { findSortModeName } from "helpers/functions";

test("findSortModeName should work properly", () => {
  expect(findSortModeName()).toBe("All");
  expect(findSortModeName(0)).toBe("All");
  expect(findSortModeName(1)).toBe("Asc");
  expect(findSortModeName(-1)).toBe("Desc");
});
