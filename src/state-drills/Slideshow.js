import React from 'react';

class Slideshow extends React.Component{

    state = {
        currentImg: 0
    }

    displayNextPicture(){

        let nextImg;

        if(this.state.currentImg === this.props.pictures.length){
            nextImg = 0;
        }else{
             nextImg = this.state.currentImg + 1;
        }
        console.log(nextImg, " next image");

        this.setState({
            currentImg: nextImg,
        })

    }

    displayPrevPicture(){

        let prevImg;

        if(this.state.currentImg === 0){
            prevImg = this.props.pictures.length;
        }else{
            prevImg = this.state.currentImg - 1;
        }

        console.log(prevImg, " previous image");

        this.setState({
            currentImg: prevImg
        })

    }

    renderPictures(){
        return this.props.pictures.filter((img, i) => this.state.currentImg === i).map((img, i) => (
        <div>
                <img key={img.id} src={img.src} alt={img.title} />
                <p>{img.title}</p>
            </div>
        )
        )

    }


    render(){
        return (
        <div>
            {this.renderPictures()}
            <div>
                <button className="next-button" onClick={() => this.displayNextPicture()}>next</button>
                <button className="prev-button" onClick={() => this.displayPrevPicture()}>previous</button>
            </div>
     
        </div>
        )
    }

}

export default Slideshow;