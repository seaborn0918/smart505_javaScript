// 외부의 라이브러리를 사용할 파일

import { name, job, gender, getInfo } from "./MyMod1.mjs";
import { num1, num2, sum } from "./MyMOd2.mjs";
import sub from "./MyMOd2.mjs";

// node.js가 ES6 버전이 나오기 전부터 모듈화 시스템을 사용하고 있었음
// node.js가 기본적으로 사용하는 방식이 CommonJS 방식의 모듈 시스템을 사용하고 있었음
// ES6가 발표되면서 import/export가 지원하게 되었음
// 기본방식은 CommonJS 방식으로 설정되어 있기 때문에 JS의 확장자를 mjs로 변경하여 사용해야 함
// 아니면 package.json 파일에 type:module을 추가 설정해야 함

console.log(name);
console.log(job);
console.log(gender);
console.log(getInfo());

console.log(`첫번째 숫자 : ${num1} + 두번째 숫자 : ${num2}의 값 : ${sum()}`);
console.log(`export default로 지정된 sub()실행 : ${sub()}`)
