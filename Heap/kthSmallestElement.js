

/**
 *  Brute Force
*/

function kthSmallest(arr, N, K) {
    arr.sort((a, b) => a - b);
    return arr[K - 1];
}

// const arr = [12, 3, 5, 7, 19];
// const N = arr.length, K = 2;
console.log("K'th smallest element is " + kthSmallest(arr, N, K));



/**
 *   BY PRIORITY QUEUE
 */

// Function to find the kth smallest array element
function kthSmallest(arr, K) {
    // Create a max heap (priority queue)
    let pq = new MaxHeap();

    // Iterate through the array elements
    for (let i = 0; i < arr.length; i++) {
        // Push the current element onto the max heap
        pq.push(arr[i]);

        // If the size of the max heap exceeds K, remove the largest element
        if (pq.size() > K)
            pq.pop();
    }

    // Return the Kth smallest element (top of the max heap)
    return pq.top();
}

// MaxHeap class definition
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);

        return root;
    }

    top() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    heapifyUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) {
                break;
            }
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    heapifyDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let largestIndex = index;

        if (
            leftChildIndex < this.heap.length &&
            this.heap[leftChildIndex] > this.heap[largestIndex]
        ) {
            largestIndex = leftChildIndex;
        }

        if (
            rightChildIndex < this.heap.length &&
            this.heap[rightChildIndex] > this.heap[largestIndex]
        ) {
            largestIndex = rightChildIndex;
        }

        if (index !== largestIndex) {
            this.swap(index, largestIndex);
            this.heapifyDown(largestIndex);
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}



const arr = [12, 3, 5, 7, 19];
const N = arr.length, K = 2;

console.log("Kth Smallest Element is: " + kthSmallest(arr, K));
