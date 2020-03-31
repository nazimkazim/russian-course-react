import React from 'react';



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
                let audio = new Audio(this.props.syllables[i][j].audio);
                children.push(
                    <td onClick={ () => { audio.play(); } } key={ j }>{ this.props.syllables[i][j].text }
                    </td>
                );
            }
            //Create the parent and add the children
            table.push(<tr key={ i }>{ children }</tr>);
        }
        return table;
    };


    render() {
        return (
            <table className="table is-bordered is-striped is-hoverable">
                <tbody>
                    { this.createTable() }
                </tbody>
            </table>
        );
    }

}

export default SyllablePlate;