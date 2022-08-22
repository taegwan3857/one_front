// 주의할 점 !!
// 1. 컴포넌트 = 하나의 함수 = 컴포넌트 함수 
// -> 파일명은 X, 함수명의 첫 글자는 대문자

export default function Hello(props){
    return <h1> Hello!!{props.name}의 나이는 {props.age}살이야.</h1>
}