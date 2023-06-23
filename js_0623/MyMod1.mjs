// 외부에서 사용할 수 있도록 export로 지정

export const name = '동글이';
export const gender = '수컷';
export const job = '고양이';

export const getInfo = () => console.log(`이름 : ${name}, 직업 : ${job}, 성별 : ${gender}`);