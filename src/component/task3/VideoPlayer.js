import React from "react";

export default class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.video = React.createRef();
        this.volume = React.createRef();
        this.playBtn = React.createRef();
        this.fullBtn = React.createRef();
        this.state = {
            volume: 100,
            value: 0,
            duration: null,
            play: false,
            timeLeft: 0
        }
    }

    upd = () => {
        this.setState({value: this.video.current.currentTime});
    };


    fullScreen = (e) =>{
        e.preventDefault();
        this.video.current.requestFullscreen()
    };

    togglePlay = (e) => {
        if (this.state.play === false) {
            this.play(e)
            this.setState({play: true})
        } else {
            this.pause(e)
            this.setState({play: false})
        }
    }

    play = (e) => {
        e.preventDefault();
        this.setState({duration: this.video.current.duration});
        this.video.current.play();
        setInterval(this.upd, 1000);
        this.changeStyle('pause');
    };

    pause = (e) => {
        e.preventDefault();
        this.video.current.pause();
        clearInterval(this.upd)
        this.changeStyle('play');
    };

    componentDidUpdate() {
        this.setTimeLeft()
    }

    setTimeLeft() {
        let time = Math.floor(this.video.current.duration) - Math.floor(this.video.current.currentTime);
        let hours = Math.floor(time / 60 / 60);
        let minutes = Math.floor(time / 60) - (hours * 60);
        let seconds = time % 60;
        document.getElementById("time-left").innerText = `${hours} : ${minutes} : ${seconds}`
    }

    changeValue = (e) => {
        e.preventDefault();
        this.setState({value: e.target.value});
        this.video.current.currentTime = e.target.value
        if (e.target.value == 0) {
            this.video.current.currentTime = 0
        }
    };

    changeVolume = (e) => {
        e.preventDefault();
        this.setState({volume: e.target.value});
        this.video.current.volume = e.target.value/100
    };

    changeStyle(style) {
        if (style === 'pause') {
            document.getElementById('play-btn').innerText = '| |';
        } else {
            document.getElementById('play-btn').innerText = '▶';
        }
    }

    render() {
        return <div>
            <video
                className='video'
                src="http://images-assets.nasa.gov/video/jsc2023m000112_Down_to_Earth_The_Ballad_of_the_Overview_Effect_SOCIAL/jsc2023m000112_Down_to_Earth_The_Ballad_of_the_Overview_Effect_SOCIAL~orig.mp4"
                type="video/mp4"
                ref={this.video}
                loop="loop"
            />
            <div className="controls">
                <button id="play-btn" onClick={this.togglePlay} ref={this.playBtn}>▶</button>
                <input className='range' type="range" min='0' max={this.state.duration} value={this.state.value} onChange={this.changeValue}/>
                <input  className='volume' type="range" min='0' max='100' value={this.state.volume} onChange={this.changeVolume}/>
                <button className="fullscreen-btn" onClick={this.fullScreen} ref={this.fullBtn}>🖥️</button>
            </div>
            <div className="text-container">
                <p id="time-left">00:00:00</p>
            </div>
            
        </div>
    }
};