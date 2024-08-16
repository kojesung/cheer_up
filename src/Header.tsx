import logo from './assets/Main/Group 17.svg';
import searchIcon from './assets/Main/Group 23.svg';

function Header() {
    return (
        <div className=" flex justify-between items-center bg-white p-4 shadow-md fixed w-full top-0">
            <div className="flex w-1/2">
                <div className="flex items-center">
                    <img src={logo} alt="앱 로고" className="w-10 h-10 mr-2" />
                </div>
                {/* Search Bar */}
                <div className="flex items-center w-1/2 bg-gray-100 rounded-md p-1 ml-4">
                    <img src={searchIcon} alt="돋보기 로고" className="w-5 mx-2" />
                    <input
                        type="text"
                        placeholder="검색어를 입력해주세요."
                        className="bg-transparent p-2 w-full text-sm focus:outline-none"
                    />
                </div>
            </div>
            {/* Login/Signup Button */}
            <button className="ml-4 bg-customHeavyOrange text-white text-sm font-semibold py-2 px-4 rounded-full">
                로그인 / 회원가입
            </button>
        </div>
    );
}

export default Header;
