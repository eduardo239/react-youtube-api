import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div class='ui' style={{ paddingTop: '220px' }}>
        <div class='ui active loader'>
          <p></p>
        </div>
        <p></p>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className='ui embed'>
        <iframe src={videoSrc} title='video title'></iframe>
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p className='ui'>{video.snippet.description}</p>
        <p className='ui'>{video.snippet.publishedAt}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
