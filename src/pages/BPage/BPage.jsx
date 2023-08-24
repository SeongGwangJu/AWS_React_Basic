import React, { useRef, useState } from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';

function BPage({ setHeader }) {
    const menus = [
        {
            id: 1,
            name: "내 계정 정보"
        },
        {
            id: 2,
            name: "비밀번호 변경"
        },
        {
            id: 3,
            name: "이메일 인증 또는 변경"
        },
        {
            id: 4,
            name: "계정 업그레이드"
        },
    ];

    const [ content, setContent ] = useState("기본값");

    let inputText = "";

    const handleInputChange = (e) => {
        inputText = e.target.value;
    }

    const handleOkClick = () => {
        setHeader(inputText);
        // 아래 두 consol.log 동일한 기능을함
        // console.log(document.querySelector("input").value);
        // console.log(inputRef.current.value);
    }

    return (
        <MainLayout Title={"B페이지"} menus={menus}>
            <div>
                <h1>{ content }</h1>
                <input type="text" onChange={handleInputChange} />
                <button onClick={handleOkClick}>확인</button>
            </div>
        </MainLayout>
    );
}

export default BPage;