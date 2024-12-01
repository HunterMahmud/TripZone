import * as React from 'react';

interface Author {
    name: string;
    image: string;
}

interface ItemProps {
    id: number;
    author: Author;
    category: string;
    title: string;
    published_date: string;
    thumbnail_image: string;
    description: string;
}

const BlogCard: React.FC<{ item: ItemProps }> = ({ item }) => {
    return (
        <div
            className="relative bg-center bg-cover h-[500px] group bg-no-repeat transition-all duration-500 ease-in-out flex justify-center rounded-sm cursor-pointer"
            style={{
                backgroundImage: `url(${item.thumbnail_image})`,
                transition: '100% 0.5s ease-in-out',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 transition-all duration-300 group-hover:bg-primary group-hover:bg-opacity-35 rounded-sm"></div>

            <h3 className="absolute top-3 right-3 text-white font-popins text-lg bg-secondary flex justify-center items-center flex-col p-2 rounded-sm">
                <span className='text-xs'>{item.published_date.slice(2, 6)}</span>
                <span>{item.published_date.slice(0, 2)}</span>
            </h3>

            <div className='z-10 absolute p-3 bottom-0'>
                <div className='bg-white p-4 group-hover:-translate-y-44  transition-all duration-500 ease-in-out rounded-sm'>
                    <div>
                        <h3 className="text-base font-barlow uppercase tracking-[5px] text-secondary font-normal">{item.category}</h3>
                        <h3 className="font-medium font-popins text-2xl text-primary">{item.title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
