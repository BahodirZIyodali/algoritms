function swap(nums) {
    var temp = nums[0];
    nums[0] = nums[nums.length - 1];
    nums[nums.length - 1] = temp;
    return nums;
}
console.log(swap([1, 2, 10]));
function command(a, b) {
    if (a[0] == b[0] || a[a.length - 1] == b[b.length - 1]) {
        return true;
    }
    return false;
}
console.log(command([1,], [2, 2]));
function has23(nums) {
    if (nums.includes(2) || nums.includes(3)) {
        return true;
    }
    return false;
}
console.log(has23([1, 3]));
function no23(nums) {
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums.includes(2) || nums.includes(3)) {
            count++;
        }
    }
    return count > 0 ? false : true;
}
console.log(no23([2, 11]));
function midThree(nums) {
    var middle = Math.floor(nums.length / 2);
    return [nums[middle - 1], nums[middle], nums[middle + 1]];
}
console.log(midThree([1, 2, 3, 4, 5]));
function sumArr(nums) {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}
console.log(sumArr([1, 2, 3, 4, 5]));
function makeEnd(nums) {
    var numLastEl = nums[nums.length - 1];
    nums.length = nums.length * 2;
    nums = nums.fill(0, 0);
    nums[nums.length - 1] = numLastEl;
    return nums;
}
console.log(makeEnd([1, 2, 3, 4, 5]));
function maxTriple(nums) {
    var first = nums[0];
    var middle = nums[Math.floor(nums.length / 2)];
    var last = nums[nums.length - 1];
    var max = Math.max(first, middle, last);
    return max;
}
console.log(maxTriple([1, 2, 3]));
console.log(maxTriple([1, 2, 29]));
console.log(maxTriple([6, 7, 8, 19, 90]));
function roteteLeft3(nums) {
    return [nums[1], nums[2], nums[0]];
}
console.log(roteteLeft3([1, 2, 3]));
function double23(nums) {
    var count = 0;
    var count2 = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == 2) {
            count++;
        }
        if (nums[i] == 3) {
            count2++;
        }
    }
    if (count == 2 || count2 == 2) {
        return true;
    }
    return false;
}
console.log(double23([2, 3]));
console.log(double23([2, 2]));
console.log(double23([3, 3]));
function fix23(nums) {
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] == 2 && nums[i + 1] == 3) {
            nums[i + 1] = 0;
        }
    }
    return nums;
}
console.log(fix23([1, 2, 3])); // [1, 2, 0]
function maxEnd3(nums) {
    var max = Math.max(nums[0], nums[2]);
    return [max, max, max];
}
function start1(a, b) {
    var count = 0;
    if (a[0] == 1) {
        count++;
    }
    if (b[0] == 1) {
        count++;
    }
    return count;
}
console.log(maxEnd3([11, 99, 10]));
console.log(start1([1, 2], [1, 2, 3]));
console.log(start1([9, 2], [1, 2, 3]));
