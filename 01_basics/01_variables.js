const accountId = "test"
let accountEmail = "xya@gmail.com"
let accountPassowrd = "12345"
accountCity = "Jaipur"


/* 
We should not use var in java script because of block scope and functional scope

const value can't overwrite

Lecture  # 1:
Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])

*/

console.table([accountId, accountEmail, accountPassowrd, accountCity])