import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog }) => {
    const {cover, title, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className="mb-8">
            <img className='w-full' src={cover} alt={`Cover picture of the title${title}`} />
            <div className='flex justify-between items-center mt-8'>
                <div className='flex items-center gap-6'>
                <img className='w-16' src={author_img} alt="" />
                <div>
                <h3 className='text-2xl font-bold'>{author}</h3>
                <p className='text-[#11111199]'>{posted_date}</p>
                </div>
                </div>
                <div className='flex items-center gap-3'>
                <p className='text-xl text-[#11111199] '>{reading_time} min read</p>
                <button className='text-2xl text-gray-400 text-[#11111199]'><CiBookmark /></button>
                </div>
            </div>
            <h1 className='text-[40px] mt-4'>{title}</h1>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a className='text-xl text-[#11111199]' href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    Blog: PropTypes.object.isRequired
}
export default Blog;