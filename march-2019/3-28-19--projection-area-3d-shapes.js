/*
Projection Area of 3D Shapes

On a N * N grid, we place some 1 * 1 * 1 cubes that are axis-aligned with the x, y, and z axes.
Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).
Now we view the projection of these cubes onto the xy, yz, and zx planes.
A projection is like a shadow, that maps our 3 dimensional figure to a 2 dimensional plane. 
Here, we are viewing the "shadow" when looking at the cubes from the top, the front, and the side.
Return the total area of all three projections.

Example 1:
Input: [[2]]
Output: 5

Example 2:
Input: [[1,2],[3,4]]
Output: 17
Explanation: 
Here are the three projections ("shadows") of the shape made with each axis-aligned plane.

Example 3:
Input: [[1,0],[0,2]]
Output: 8

Example 4:
Input: [[1,1,1],[1,0,1],[1,1,1]]
Output: 14

Example 5:
Input: [[2,2,2],[2,1,2],[2,2,2]]
Output: 21

Note:
1 <= grid.length = grid[0].length <= 50
0 <= grid[i][j] <= 50
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
  let zXPlane = 0;
  let xYPlane = 0;
  let yZPlane = 0;

  for (let idx = 0; grid.length > idx; idx += 1) {
    zXPlane += grid[idx].length;
    xYPlane += Math.max(...grid[idx]);
    const maxMatrixNum = [];

    for (let subIdx = 0; grid[idx].length > subIdx; subIdx += 1) {
      maxMatrixNum.push(grid[subIdx][idx]);

      if (grid[idx][subIdx] < 1) {
        zXPlane -= 1;
      }
    }

    yZPlane += Math.max(...maxMatrixNum);
  }

  return zXPlane + xYPlane + yZPlane;
};

const test1 = projectionArea([[1,2],[3,4]]);
const test2 = projectionArea([[1,1,1],[1,0,1],[1,1,1]]);
const test3 = projectionArea([[2,2,2],[2,1,2],[2,2,2]]);
const test4 = projectionArea([[1,0],[0,2]]);

console.log({ expect: 17, actual: test1, pass: test1 === 17 });
console.log({ expect: 14, actual: test2, pass: test2 === 14 });
console.log({ expect: 21, actual: test3, pass: test3 === 21 });
console.log({ expect: 8, actual: test4, pass: test4 === 8 });