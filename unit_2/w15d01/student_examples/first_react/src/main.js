const arrWithUpdater = arr => {
	return [
		arr,
		newValue => {
			arr.unshift(newValue);
		}
	];
};

const [myArr, unshiftMyArr] = arrWithUpdater([1, 2, 3]);

unshiftMyArr(8);

console.log(myArr);

const coolStudents = ['Shaun', 'Mike'];

const [student1, student2] = coolStudents;

const someVal = someVal => {
	return someVal.toString();
};

const age = someVal(132);

const add = (num1, num2) => num1 + num2;

add(23, 32);
add(13, 31);
add(23, 32);
