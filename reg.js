const sentence = "siska";
const re = new RegExp(/^[a-z0-9]{3,10}$/);

console.log(re.test(sentence));
