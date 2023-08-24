import React, { useRef } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRecoilState } from 'recoil';
import { principalState } from '../../../../../store/principalStore';

const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: #fff;
`;

function P3({ num, setNum }) {

    const [ principal, setPrincipal ] = useRecoilState(principalState);

    // setNum이 실행되면 얘떄문에 0으로 바뀌면서 입력값이 그대로면 증가가 안된다
    // let inputValue = 0;

    const inputRef = useRef();

    const handleInputChange = (e) => {
        //[^0-9]/g : 정규식, 0~9만 허용
        // 0~9가 아니면 ""으로 바꿔라. (보여지는것만)
        // '/ /'정규표현식 시작,끝
        // [...]는 문자 클래스(character class)
        // ^ 기호는 해당 문자 클래스에 나열된 문자들을 제외한 모든 문자를 의미
        const value = e.target.value.replace(/[^0-9]/g, "")
        
        console.log("e.target.value1 : " + e.target.value)
        //실제 입력값도 보여지는 것과 똑같이 함
        e.target.value =value;
        console.log("e.target.value2 : " + e.target.value)
        // if(!!value) {
        //     inputValue = parseInt(value);
        // }
    }

    const handleButtonClick = (e) => {
        const { name } = e.target;
        console.log("num : " + num);
        // console.log("inputValue : " + inputValue);
        // if(name ==="plus") {
        //     setNum(num + inputValue);
        // } else {
        //     setNum(num - inputValue);
        // }
        if(name ==="plus") {
            setNum(num + parseInt(inputRef.current.value));
        } else {
            setNum(num - parseInt(inputRef.current.value));
        }
        console.log("밑에 num :" + num)
    }
    return (
        <div css={SContainer}>
            <div>userId : {principal.userId}</div>
            <div>username : {principal.username}</div>
            <div>name : {principal.name}</div>
            <div>email : {principal.email}</div>
            <div>phone : {principal.phone}</div>
            <div></div>
            <input type="text" onChange={handleInputChange} ref={inputRef}/>
            <button name='plus' onClick={handleButtonClick}>증가</button>
            <button name='minus' onClick={handleButtonClick}>감소</button>
        </div>
    );
}

export default P3;