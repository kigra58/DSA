
	function findMin(root) {
        let x=Number.MAX_SAFE_INTEGER
		if (root == null) {
            // return 2147483647
            return x;
        };

		let res = root.data;
		let LH = findMin(root.left);
		let RH = findMin(root.right);

		if (LH < res) res = LH;
		if (RH < res) res = RH;
		return res;
	}
	

