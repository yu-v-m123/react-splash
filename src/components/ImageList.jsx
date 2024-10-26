import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const imageList = (props) => {
    const handleScroll = (event) => {
        const { scrollHeight, scrollTop, clientHeight } = event.target;

        if (scrollHeight - scrollTop === clientHeight) {
            console.log('reach end');
            const newPage = props.page + 1;
            props.setPage(newPage);
            props.onSearchSubmit(props.term, newPage);
        }
    };

    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
    });

    return (
        <div
            onScroll={handleScroll}
            className="image-list"
            style={{ height: '1000px', overflow: 'scroll' }}>
            {images}
        </div>
    );
};

export default imageList;
