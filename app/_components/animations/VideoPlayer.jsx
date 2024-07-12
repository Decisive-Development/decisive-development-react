"use client";
import React from 'react';
class VideoPlayer extends React.Component {
    videoRef = React.createRef();

    handleMouseEnter = () => {
        this.videoRef.current.play();
    }

    handleMouseLeave = () => {
        this.videoRef.current.pause();
    }

    render() {
        return (
            <video 
                ref={this.videoRef} 
                onMouseEnter={this.handleMouseEnter} 
                onMouseLeave={this.handleMouseLeave}
                muted
            >
                <source src="video/sunsetbike.mp4" type="video/mp4"/>
            </video>
        );
    }
}
export default VideoPlayer;