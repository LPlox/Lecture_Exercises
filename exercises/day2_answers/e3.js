const nameArray = grades.map((grades) => grades.name);
console.log(nameArray);

const gradesBelow10 = grades.filter((grades) => grades.grade <= 10);
console.log(gradesBelow10);

grades.forEach((grades) => console.log(grades.sex));
