# MongoDB $inc Operator Error with Non-Numeric Field
This repository demonstrates an example of a common error encountered when using the `$inc` operator in MongoDB update operations. The `$inc` operator is used to increment or decrement numeric fields. However, if you attempt to use it with a non-numeric field, it results in an error.

## Bug Description
The bug occurs when using the `$inc` operator with a field that does not have a numeric value.  This usually leads to a data type error.

## Solution
The solution involves ensuring that the field you're incrementing is actually a number.  This might involve verifying your data types, or using other update operators for non-numeric fields.  If you need to modify the value, you can use the `$set` operator.