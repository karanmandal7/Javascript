const hello = () => { // 2nd and latest type of function declaration
    console.log("Hey how are you. I am toh fine yaar")
    return "hi"
  }
  let v = hello();
  console.log(v)
  
  function onePlusAvg(x, y) { // 1st type of function declaration
    return 1 + (x + y) / 2
  }
  
  const sum = (p, q) => {
    return p + q
  }
  console.log(sum(9, 7))
  
  let a = 1;
  let b = 2;
  let c = 3;
  console.log("One plus Average of a and b is ", onePlusAvg(a, b))
  console.log("One plus Average of b and c is ", onePlusAvg(b, c))
  console.log("One plus Average of a and c is ", onePlusAvg(a, c))
  // this is without function declaration