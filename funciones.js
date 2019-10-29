function sec(a){
	var i = 0;
	var j = 0;
	var x = 0;
	var y = 0;
	var m = 0;
	while(j<a.length-1){
		if(a[j]>a[j+1]){
			n = j-i+1; 
			if(n>m){
				m = n;
				x = i;
				y = j;
			}
			i = j + 1;
		}
		j = j + 1;
	}
	if(j-i+1 > m){
		x = i;
		y = j;
	}
	return a.slice(x,y+1)
}
	
function del_dup(a) {
	var a1 = [a[0]];
	var i = 0;
	for (var j = 0; j < a.length; j++) {
		if(a[j] != a1[i]){
			a1.push(a[j]);
			i = i + 1;
		}
	}
	return a1;
}
	
function sumas(n,m){
	var s1 = (n*(n+1))/2;
	var s2 = (m*(m+1))/2;
	return s2 - s1;
}

function rev(s){
	var r = "";
	for (var i = 0; i < s.length; i++) {
		r = s[i]+r; 
	}
	return r;
}
		

