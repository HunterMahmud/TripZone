import * as React from 'react';

interface TitleHeaderProps {
    subHeading: string;
    title: string;
    subHeadingClassName?: string; // Optional: Custom styles for subHeading
    titleClassName?: string; // Optional: Custom styles for title
    firstWordColor?: string; // Color for the first word of the title
    secondPartColor?: string; // Color for the remaining title
}

const TitleHeader: React.FC<TitleHeaderProps> = ({
    subHeading,
    title,
    subHeadingClassName,
    titleClassName,
    firstWordColor,
    secondPartColor,
}) => {
    // Split the title into two parts
    const [firstWord, ...remainingWords] = title.split(' ');
    const secondPart = remainingWords.join(' ');

    return (
        <div>
            <p className={`text-base font-barlow uppercase tracking-[5px] text-white font-normal ${subHeadingClassName}`}>{subHeading}</p>
            <h3 className={`text-[48px] uppercase font-bold font-popins text-white ${titleClassName}`}>
                <span className={`${firstWordColor} text-white`}>{firstWord}</span>{' '}
                <span className={`${secondPartColor} text-secondary`}>{secondPart}</span>
            </h3>
        </div>
    );
};

export default TitleHeader;