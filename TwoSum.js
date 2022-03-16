const TwoSum = (nums, target) => {

    nums.forEach((num, i) => {
        for(let j = i + 1; j < nums.length; j++){
            if(num + nums[j] == target) return console.log([i, j])
        }
    })
}

const nums = [2,6,7,15];
const target = 9;

TwoSum(nums, target);