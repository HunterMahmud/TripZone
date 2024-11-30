import * as React from 'react';
import BlogBanner from './BlogBanner';
import BlogCard from './BlogCard';

interface Author {
    name: string;
    image: string;
}

interface Blog {
    id: number;
    author: Author;
    category: string;
    title: string;
    published_date: string;
    thumbnail_image: string;
    description: string;
}

const BlogLayout: React.FC = () => {
    const [blogs, setBlogs] = React.useState<Blog[]>([]);

    React.useEffect(() => {
        fetch('/blogsDatas.json')
            .then((response) => response.json())
            .then((data) => setBlogs(data))
            .catch((error) => console.error('Error fetching blogs:', error));
    }, []);

    console.log(blogs);


    return (
        <div>
            {/* Banner */}
            <BlogBanner />
            {/* Card */}
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-32 gap-6 px-4'>
                {blogs.map(item => <BlogCard key={item.id} item={item}/>)}
            </div>
        </div>
    );
};

export default BlogLayout;