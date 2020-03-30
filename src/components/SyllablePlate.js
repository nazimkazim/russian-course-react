import React from 'react';
import Speech from 'react-speech';



/* function SyllablePlate(props) {
    console.log(props.syllables);
    const createTable = () => {
        let table = [];

        // Outer loop to create parent
        for (let i = 0; i < 3; i++) {
            let children = [];
            //Inner loop to create children
            for (let j = 0; j < 5; j++) {
                children.push(<td>{ `Column ${j + 1}` }</td>);
            }
            //Create the parent and add the children
            table.push(<tr>{ children }</tr>);
        }
        return table;
    };
    return (
        <table>
            <tbody>
                {this.createTable()}
            </tbody>
        </table>
    );
}


export default SyllablePlate; */

class SyllablePlate extends React.Component {

    createTable = () => {
        let table = [];
        // Outer loop to create parent
        for (let i = 0; i < this.props.syllables.length; i++) {
            let children = [];
            //Inner loop to create children
            for (let j = 0; j < 6; j++) {
                children.push(<td> - {this.props.syllables[i][j]}</td>);
            }
            //Create the parent and add the children
            table.push(<tr>{ children }</tr>);
        }
        return table;
    };


    render() {
        return (
            <table className="table is-bordered is-striped is-hoverable">
                { this.createTable() }
            </table>
        );
    }

}

export default SyllablePlate;