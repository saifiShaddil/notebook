import { useSelector } from "react-redux"
import type { StoreState } from "../../store/store";
import { Link } from "react-router-dom";

export const HomePage = () => {
    const posts = useSelector<StoreState>(state => state.posts.posts);
  
    return (
        <main className='bg-[#F2F8F7] h-[91vh]' >
            <section className="w-[80%] mx-auto flex flex-col">
                {/* left section  */}
                <div className=" flex flex-1">
                    <div className="flex-col flex gap-5">
                        <h3 className="bg-[#00AAA1] text-2xl font-bold text-white">Featured <span className="text-xl font-semibold">This Month</span></h3>
                        {/* card */}
                        <div className="flex flex-col gap-2">
                            <h5 className="text-[#DFF1F0]">Travel</h5>
                            <h2 className="font-semibold cursor-pointer"> <Link to={'/post'}>Set Video Playback speed with Javascript</Link></h2>
                            <div className="image h-[16vh]">
                                <img src="" alt="post-image" />
                            </div>
                            <div className="card-bottom">
                                <div className="flex justify-around">
                                    <div> <span className="h-4 w-4 rounded-full bg-gray-300"></span> Jenny kiaa</div>
                                    <div>Jenny kiaa</div>
                                    <div>3 min. to read</div>
                                </div>
                                <p>
                                    Did you come here for something in particular or just general Riker-bashing? And blowing into
                                </p>
                            </div>
                        </div>
                        {/* card */}
                        <div className="flex flex-col gap-2">
                            <h5 className="text-[#00AAA1]">Travel</h5>
                            <h2 className="font-semibold cursor-pointer"> <Link to={'/post'}>Set Video Playback speed with Javascript</Link></h2>
                            <div className="image h-[16vh]">
                                <img src="" alt="post-image" />
                            </div>
                            <div className="card-bottom">
                                <div className="flex justify-around">
                                    <div> <span className="h-4 w-4 rounded-full bg-gray-300"></span> Jenny kiaa</div>
                                    <div>Jenny kiaa</div>
                                    <div>3 min. to read</div>
                                </div>
                                <p>
                                    Did you come here for something in particular or just general Riker-bashing? And blowing into
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* divider here */}
                {/* right section  */}
                <div className="flex-1 flex flex-col gap-5">
                     <h3 className="bg-[#00AAA1] text-2xl font-bold text-white">Polular <span className="text-xl font-semibold">Posted</span></h3>
                    <div>

                    </div>


                </div>
            </section>
        </main>
    )
}

