```javascript
// Correct use of $inc operator with a numeric field
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { myField: 1 } });

// Alternative: Use $set if you want to modify non-numeric values.
db.collection('myCollection').updateOne({ _id: 1 }, { $set: { myField: 'new value' } });
```