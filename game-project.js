function foo() {
    let x = function () { return "foo!" };
    return x();
  }
  /* anything here has no idea that x exists */
  alert(foo());