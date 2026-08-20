export const array = [4, 2, 3, 7, 9, 5];

export const frames = [
  {
    arr: [4, 2, 3, 7, 9, 5],
    currIdx: 0,
    visited: [],
    foundIdx: -1,
    target: 7,
    status: "4 != 7, checked index 1",
  },

  {
    arr: [4, 2, 3, 7, 9, 5],
    currIdx: 1,
    visited: [4],
    foundIdx: -1,
    target: 7,
    status: "2 != 7, checked index 2",
  },

  {
    arr: [4, 2, 3, 7, 9, 5],
    currIdx: 2,
    visited: [4, 2],
    foundIdx: -1,
    target: 7,
    status: "3 != 7, checked index 3",
  },

  {
    arr: [4, 2, 3, 7, 9, 5],
    currIdx: 3,
    visited: [4, 2, 3],
    foundIdx: 3,
    target: 7,
    status: "7 == 7, found at index 3",
  },

  {
    arr: [4, 2, 3, 7, 9, 5],
    currIdx: 3,
    visited: [4, 2, 3, 7],
    foundIdx: 3,
    target: 7,
    status: "7 == 7, found at index 3",
  },

  {
    arr: [4, 2, 3, 7, 9, 5],
    currIdx: 3,
    visited: [4, 2, 3, 7],
    foundIdx: 3,
    target: 7,
    status: "Search complete, target found",
  },
];