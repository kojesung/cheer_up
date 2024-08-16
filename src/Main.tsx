import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Header';
import add from './assets/Main/Rectangle 23.svg';
import mock from './data/cheerLogMock.json';
import commentIcon from './assets/Main/ContentItem/Group 45.svg';
import likeIcon from './assets/Main/ContentItem/Group 47.svg';
import fixIcon from './assets/Main/ContentItem/Group 57.svg';

function Main() {
    return (
        <div>
            <Header />
            <div className="flex h-full w-full bg-gray-100 pt-20">
                <div className="flex w-full h-full p-5 ">
                    <div className="flex flex-col w-4/5">
                        <img src={add} alt="광고 배너" />
                        <div className="flex">
                            <div className="border border-black flex-[2]">메뉴칸</div>
                            <div className="flex-[9] p-4">
                                <div className="flex justify-end bg-transparent">
                                    {/* 디테일 추후 수정 예정 */}
                                    <div className=" bg-customHeavyOrange px-1 rounded text-white">추천순</div>
                                    <div className=" bg-white px-1 rounded">인기순</div>
                                    <div className=" bg-white px-1 rounded">최신순</div>
                                </div>
                                <div className="">
                                    {mock.map((post) => (
                                        <div>
                                            <div className="flex">
                                                <div>
                                                    <img
                                                        width="24"
                                                        height="24"
                                                        src="https://img.icons8.com/plumpy/24/user-male-circle.png"
                                                        alt="user-male-circle"
                                                    />
                                                </div>
                                                <div className="font-bold">{post.userName}</div>
                                                <div>{post.tag}</div>
                                            </div>
                                            <div className="bg-white rounded-lg my-2 p-4">
                                                <div className="font-bold">{post.title}</div>
                                                <hr className="my-4" />
                                                <div className="my-4">{post.content}</div>
                                                <div className="flex items-center">
                                                    <img src={commentIcon} className="w-7" />
                                                    <div className="align-middle ml-2">{post.comment.length}</div>
                                                    <img src={likeIcon} className="w-7 m-2" />
                                                    <div className="">{post.recommend}</div>
                                                    <img src={fixIcon} className="w-7 m-2" />
                                                    <div>{post.fix}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/5 border border-black">프로필 칸</div>
                </div>
            </div>
        </div>
    );
}

export default Main;
