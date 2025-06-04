import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { StoreState } from "../../store/store";
import RecentlyPosted from "../../components/RecentPost/RecentPost";

export const HomePage = () => {
    const posts = useSelector<StoreState>(state => state.posts.posts);

    return (
        <main className='bg-[#F2F8F7] py-10 min-h-[91vh] overflow-x-hidden'>
            <section className="w-[90%] mx-auto flex gap-8 overflow-x-hidden">
                {/* Left Section */}
                <div className="flex-[2] flex flex-col gap-6 p-8 overflow-x-hidden">
                    <h3 className="text-2xl font-bold text-gray-800">
                        <span className="bg-[#00AAA1] text-white px-3 py-1 rounded-md">Featured</span> This Month
                    </h3>

                    {/* Cards displayed side by side */}
                    <div className="flex gap-6 overflow-x-hidden">
                        {[0, 1].map((_, i) => (
                            <div key={i} className=" p-5 rounded-lg flex flex-col gap-4 w-1/2">
                                <span className="text-sm font-semibold">Travel</span>
                                <h2 className="text-lg font-bold text-gray-900 hover:underline">
                                    <Link to="/post">Set Video Playback Speed With Javascript</Link>
                                </h2>
                                <div className="bg-gray-200 h-40 rounded-md" />

                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <span className="h-6 w-6 rounded-full bg-gray-400" />
                                        Jenny Kiaa
                                    </div>
                                    <span>· 02 December 2022</span>
                                    <span>· 3 Min. To Read</span>
                                </div>

                                <p className="text-sm text-gray-600">
                                    Did you come here for something in particular or just general Riker-bashing? And blowing into
                                    maximum warp.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex-1 flex flex-col gap-6 p-8 overflow-x-hidden">
                    <h3 className="text-2xl font-bold text-gray-800">
                        <span className="bg-[#00AAA1] text-white px-3 py-1 rounded-md">Popular</span> Posted
                    </h3>

                    <div className="border-l-4 border-[#00AAA1] pl-4 flex flex-col gap-6 overflow-x-hidden">
                        {[0, 1].map((_, i) => (
                            <div key={i} className="flex flex-col gap-1">
                                <span className="text-sm text-[#00AAA1] font-semibold">Travel</span>
                                <h4 className="text-md font-bold text-gray-800 hover:underline">
                                    <Link to="/post">Design Is The Mix Of Emotions</Link>
                                </h4>
                                <div className="text-sm text-gray-500">
                                    <span className="mr-2">Jenny Kiaa</span>
                                    · 02 December 2022
                                    · 3 Min. To Read
                                </div>
                                <p className="text-sm text-gray-600 line-clamp-2">
                                    Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
                {/* recent Post */}
                <RecentlyPosted />
        </main>
    );
};
