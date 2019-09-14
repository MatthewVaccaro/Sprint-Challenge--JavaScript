// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(cm_attr) {
    (this.length = cm_attr.length),
      (this.width = cm_attr.width),
      (this.height = cm_attr.height);
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker {
  constructor(attributes) {
    this.area = attributes.area;
  }
  volume() {
    return Math.pow(this.area, 3);
  }
  surfaceArea() {
    return 6 * Math.pow(this.area, 2);
  }
}

const theCube = new CubeMaker({
  area: 2
});

console.log(theCube.volume());
console.log(theCube.surfaceArea());
