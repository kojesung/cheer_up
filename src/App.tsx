import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div>
            <div className="flex justify-between items-center bg-white p-4 shadow-md">
                <div className="flex w-1/2">
                    <div className="flex items-center">
                        <img src="ㅇㅇㅇ" alt="앱 로고" className="w-10 h-10 mr-2" />
                    </div>
                    {/* Search Bar */}
                    <div className="flex items-center w-1/2 bg-gray-100 rounded-md p-1 ml-4">
                        <div>🔍</div>
                        <input
                            type="text"
                            placeholder="검색어를 입력해주세요."
                            className="bg-transparent p-2 w-full text-sm focus:outline-none"
                        />
                    </div>
                </div>

                {/* Login/Signup Button */}
                <button className="ml-4 bg-customOrange text-white text-sm font-semibold py-2 px-4 rounded-full">
                    로그인 / 회원가입
                </button>
            </div>

            {/* 메인 컨텐츠 부분 */}
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <h1 className="text-4xl font-bold text-blue-500">안녕하소</h1>
            </div>
        </div>
    );
}

export default App;
