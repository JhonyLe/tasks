Array.prototype.bubbleSort = function() {
   for (let i = 0; i < this.length; i++) {
       for (let j = this.length - 1; j > i; j--) {
           if (this[j] < this[j-1]) {
                const buffer = this[j];
       		this[j] = this[j - 1];
		this[j - 1] = buffer;
           }
       }
   } 
}

const arr = [10, 7, 8, 9, 3, 5, 1, 13, 6];
arr.bubbleSort();
console.log(arr);
