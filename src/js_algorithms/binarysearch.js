export const array =[2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
export const frames = [
  {
    arr: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91],
    low: 0,
    mid: 4,
    high: 9,
    foundIdx: -1,
    target: 23,
    status: "Checking middle element: 16"
  },

  {
    arr: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91],
    low: 5,
    mid: 7,
    high: 9,
    foundIdx: -1,
    target: 23,
    status: "23 > 16, searching the right half"
  },

  {
    arr: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91],
    low: 5,
    mid: 6,
    high: 6,
    foundIdx: -1,
    target: 23,
    status: "23 < 56, searching the left half"
  },

  {
    arr: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91],
    low: 5,
    mid: 5,
    high: 5,
    foundIdx: 5,
    target: 23,
    status: "23 == 23, target found at index 5"
  },

  {
    arr: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91],
    low: 5,
    mid: 5,
    high: 5,
    foundIdx: 5,
    target: 23,
    status: "23 == 23, target found at index 5"
  },

  {
    arr: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91],
    low: 5,
    mid: 5,
    high: 5,
    foundIdx: 5,
    target: 23,
    status: "Search complete, target found"
  }
];