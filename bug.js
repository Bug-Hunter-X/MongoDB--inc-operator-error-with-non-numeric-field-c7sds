```javascript
// Incorrect use of $inc operator with a non-numeric field
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { myField: '1' } });
```