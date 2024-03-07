export default class HolbertonCourse {
  /* eslint-disable no-underscore-dangle */
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = length;
    if (!Array.isArray(students) || !students.every((str) => typeof str === 'string')) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value) || value.every((str) => typeof str === 'string')) {
      this._students = value;
    } else {
      throw Error('Students must be an array of strings');
    }
  }
}
