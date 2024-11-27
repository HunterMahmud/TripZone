import * as React from 'react';

interface TitleHeaderProps {
    subHeading: string;
    title: string;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({ subHeading, title }) => {
    // Split the title into two words
    const [firstWord, ...remainingWords] = title.split(' ');
    const secondPart = remainingWords.join(' ');

    return (
        <div>
            <p className='text-base font-barlow uppercase tracking-[5px] text-white font-normal'>{subHeading}</p>
            <h3 className='text-[48px] uppercase font-bold font-popins text-white'>
                <span>{firstWord}</span>{' '}
                <span className='text-secondary'>{secondPart}</span>
            </h3>
        </div>
    );
};

export default TitleHeader;