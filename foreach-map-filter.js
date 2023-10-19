console.log('Testing')

//forEach
function doubleValues(arr){
    let double = [];
    arr.forEach(function(val){
        double.push(val * 2)
    })
    console.log(double);

}

function onlyEvenValues(arr){
    let evenNum = [];
arr.forEach(function(val){
    if (val % 2 ===0 ){
        evenNum.push(val);
        };
        console.log(evenNum);
});
};

function showFirstAndLast(arr){
    let firstLast = [];
    arr.forEach(function(val){
        firstLast.push(val.charAt(0));
        firstLast.push(val.charAt((val.length)-1))
    })
    console.log(firstLast);
};

//Could not figure this one out without looking at solution
function addKeyAndValue(arr,key,val){
    arr.forEach(function(res){
        res[key] = val;
    })
    return arr;

}

function vowelCount(str) {
    let vowels = 'aeiou';
    let results = {};

    str.toLowerCase().split('').forEach(function(char) {
        if (vowels.indexOf(char) !== -1) {
            if (!results[char]) {
                results[char] = 1;
            } else {
                results[char]++;
            }
        }
    });
    return results;
}

//Map

function doubleValuesWithMap(arr){
      return arr.map(function(val){
        return val*2;
      })
}

function valTimesIndex(arr){
    return arr.map(function(val, index){
        return val * index;
    })
}

function extractKey(arr){
    return arr.map(function(obj){
        return obj['name'];
    })
}

function extractFullName(arr){
    return arr.map(function(val){
        return `${val["first"]} ${val["last"]}` ;
    })
}

function filterByValue(arr){
    arr.filter(function(obj){

       
    });
};

function find (arr,val){
    return arr.filter(function(value){
        return value === val;
    }) [0];
};

function findInObj(arr,key,search){
    return arr.find(function(obj){
        return obj[key] == search;
    });

}

function removeVowels(str) {
    const removedVowels = 'aeiou';
    return str.split('').filter(function(val) {
        return !removedVowels.includes(val.toLowerCase());
    }).join('');
}

function doubleOddNumbers(arr) {
    return arr.filter(function (num) {
      if (num % 2 !== 0) {
        return true; 
      }
      return false; 
    }).map(function (oddNum) {
      return oddNum * 2; 
    });
  }
  