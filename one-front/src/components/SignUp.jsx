import { useState } from "react"
import { useInput } from "../util/common";
export default function SignUp(){
    const email=useInput("")
    const pw=useInput("")
    const pw_chk=useInput("")
    const name=useInput("")
    const text=()=>{
        if(!(email.value && pw.value && pw_chk.value && name.value)){
            return alert("Error !");
        }else if(pw.value != pw_chk.value){
            return alert("비밀번호를 확인해주세요.");
        }else{
            return alert("회원가입 성공!");
        }
    } 
    return(
        <div>
            <h2>회원가입 페이지</h2>
         
            <input type="text" name="email" placeholder="이메일"  {...email}/> 
            <br/>
            <input type="text" name="pw" placeholder="비밀번호"  {...pw}/>
            <br/>
            <input type="text" name="pw_chk" placeholder="비밀번호 확인"  {...pw_chk}/>
            <br/>
            <input type="text" name="name" placeholder="이름" {...name}/>
            <br/>
            <input type="button" onClick={text} placeholder="회원가입 완료"/>
        </div>
        )
}