const users = [
  { name: "Ammu", age: 26, isActive: true },
  { name: "Ponnu", age: 30, isActive: false },
  { name: "Krishna", age: 25, isActive: true },
  { name: "Keshav", age: 23, isActive: true },
  { name: "Sunitha", age: 35, isActive: false },
];

const activeUsers = users
  .filter((user) => user.isActive)
  .sort((a, b) => a.age - b.age)
  .map((user) => user.name);

console.log(activeUsers);
