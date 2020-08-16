function evenify(num){
    if (num % 2 == 0) {
        console.log(num, ': is even number');
    }
    else{
        console.log(num*2, ': is odd number');
    }
}

function evenify_all(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        evenify(num);
        
    }
}

nums = [5, 12, 67, 47, 20, 10, 15];
evenify_all(nums);

// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     evenify(num);
    
// }

friends_age = [13, 24, 17, 19, 18];
evenify_all(friends_age);

// for (let i = 0; i < friends_age.length; i++) {
//     const age = friends_age[i];
//     evenify(age);
// }