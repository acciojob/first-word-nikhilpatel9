function firstWord(s) {
  // your code here

	let ans="";
	for(let i=0;i<s.length;i++){
		if(s[i]==" "){
			if(ans.length>0) return ans;
		}else{
			ans+=s[i];
		}
	}
	return ans;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
