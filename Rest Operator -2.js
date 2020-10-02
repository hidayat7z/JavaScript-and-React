function sum(...args) {
	
	let total =0;
    
    for(const num of args){
    	total += num;
	}
	
	return total;
}

sum(4, 5, 7, 8, 12)

