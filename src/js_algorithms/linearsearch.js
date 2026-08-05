export const array = [4, 2, 3, 7, 9, 5];

const frames = {
  frame_0: {
    arr: [4, 2, 3, 7, 9, 5],
    currIdx: 0,
    visited: [],
    foundIdx: -1,
    target: 7,
    status: "Checking index 0",
  },

  frame_1: {
    arr: [4, 2, 3, 7, 9, 5],
    currIdx: 1,
    visited: [4],
    foundIdx: -1,
    target: 7,
    status: "4 != 7, checking index 1",
  },

  frame_2: {
    arr: [4, 2, 3, 7, 9, 5],
    currIdx: 2,
    visited: [4, 2],
    foundIdx: -1,
    target: 7,
    status: "2 != 7, checking index 2",
  },

  frame_3: {
    arr: [4, 2, 3, 7, 9, 5],
    currIdx: 3,
    visited: [4, 2, 3],
    foundIdx: -1,
    target: 7,
    status: "3 != 7, checking index 3",
  },

  frame_4: {
    arr: [4, 2, 3, 7, 9, 5],
    currIdx: 3,
    visited: [4, 2, 3, 7],
    foundIdx: 3,
    target: 7,
    status: "7 == 7, found at index 3",
  },

  frame_5: {
    arr: [4, 2, 3, 7, 9, 5],
    currIdx: 3,
    visited: [4, 2, 3, 7],
    foundIdx: 3,
    target: 7,
    status: "Search complete, target found",
  },
};