import jwt from "jsonwebtoken";

const token = jwt.sign({ myPayloadData: 1234 }, "mysecretkey");
console.log(token);

// jwt 복호화
const decodedValue = jwt.decode(token);
console.log(decodedValue);

// jwt 변조 검증
const decodedValueByVerify = jwt.verify(token, "dqwe");
console.log(decodedValueByVerify);
