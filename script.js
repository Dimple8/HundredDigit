// ���������� ��������
var operations = [{key: "+", value: 0}, {key: "-", value: 1}, {key: " ", value: 2}];
// ���������� ������� �������
var count = 0;

// ��������� ����� 100
var result = getFormulaForHundredDigit(1);

// ������� ���������� �������
var out = "<font color='green'>�������:" + "<br>������� �������: " + count;
out += "<br>�������: " + (stringResult).replace(/\s+/g, '') + " = " + result + "</font>";
document.getElementById("output").innerHTML += out;

function getFormulaForHundredDigit(result)
 {
	 while (result != 100) {
		count++;		
		result = 1;
		stringResult = "1";
		for (let i = 2; i < 10; i++) {
			// �������� ��������� �������� "+", "-", " "
			random = getRandomInt(0, 2);
			stringResult += operations[random].key + i;
		}
		result = getResultFromFormula(stringResult);
		return getFormulaForHundredDigit(result);
	 }
	 return result;
 }

function getResultFromFormula(stringResult) {
	// ������� ������� ����� �������
	stringResult = (stringResult).replace(/\s+/g, '');

	// �������� ��������� ������
	var nums = stringResult.split("+");
	nums.forEach( function(value, i, nums) { nums[i] = nums[i].split("-"); } );

	// ����������� � ���������� ������, ������ ������� �������� �������� ��������� ���������� �������
	for(var i = 0; i < nums.length; i++){
		for(var j = 0; j < nums[i].length; j++){
			var razn = nums[i].reduce((x, y) => +x - +y);
		}
		nums[i] = razn;
	}
	// ���������� ��� �������� �������
	var result = nums.reduce((x, y) => +x + +y);
	return result;
}

/**
 * Get a random integer between `min` and `max`.
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {int} a random integer
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
