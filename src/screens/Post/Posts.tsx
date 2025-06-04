import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Posts = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await res.json();
      setPost(data);
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  if (loading) return <div className="p-5 text-center">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto mt-10 px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Main content */}
      <div className="md:col-span-2">
        <div className="text-sm text-gray-500 mb-2">Travel</div>
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <div className="text-sm text-gray-600 mb-4">
          <span className="font-medium text-[#444]">Jenny Kia</span> | 05 December 2022
        </div>

        <div className="w-full h-64 bg-gray-300 rounded mb-6" />

        <p className="text-gray-700 leading-relaxed mb-6">
          Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard.
        </p>

        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-700 leading-relaxed">
          {post.body} We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Could someone survive inside a transporter buffer for 75 years? Jean’s fate. It’s possible, kids, children, and shields.
        </p>

        {/* Example table section */}
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full bg-white border">
            <thead className="bg-[#E8F3F3]">
              <tr>
                <th className="text-left px-4 py-2 border">First</th>
                <th className="text-left px-4 py-2 border">Last</th>
                <th className="text-left px-4 py-2 border">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Row1 Cell1</td>
                <td className="border px-4 py-2">Row1 Cell2</td>
                <td className="border px-4 py-2">Row1 Cell3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row2 Cell1</td>
                <td className="border px-4 py-2">Row2 Cell2</td>
                <td className="border px-4 py-2">Row2 Cell3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-[#00AAA1] mb-2">Top Authors</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-3 items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300" />
                <div>
                  <p className="font-medium text-sm">Jenny Kia</p>
                  <p className="text-xs text-gray-500">Fashion Blogger, Activist</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#00AAA1] text-white p-4 rounded shadow">
          <h4 className="font-bold text-md mb-1">Want To Travel Sikkim By Car?</h4>
          <p className="text-sm mb-3">
            Did you come here for something in particular or just general Riker-bashing?
          </p>
          <button className="bg-white text-[#00AAA1] font-semibold py-1 px-3 rounded">Visit Us</button>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#00AAA1] mb-2">Categories</h3>
          <ul className="text-sm space-y-1">
            <li className="flex justify-between border-b pb-1"><span>Lifestyle</span><span>09</span></li>
            <li className="flex justify-between border-b pb-1"><span>Travel</span><span>05</span></li>
            <li className="flex justify-between border-b pb-1"><span>Food</span><span>09</span></li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Posts;
