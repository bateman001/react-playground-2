import React from 'react';

class Accordian extends React.Component{

    static defaultProps = [
            {
                title: '',
                content: ''
            }
        ];

        state = {
            currentButton: 0,
            isOpen: new Array(this.props.sections.length).fill(false)
        }

    toggleButton(index){

        const { isOpen } = this.state;

        isOpen[index] = !isOpen[index];

        this.setState({ isOpen });
    }


    renderButtonList(){
        return this.props.sections.map((val, index) => (
        <li key={index}> 
            <button onClick={() => this.toggleButton(index)}>{val.title}</button>
            {this.state.isOpen[index] && <div>{val.content}</div>}
        </li>
        ));
     }

    render(){
        return(
            <div>
                <ul>
                    {this.renderButtonList()}

                </ul>

            </div>
        )
    }
}

export default Accordian;