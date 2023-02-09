export default function Puzzle(props) {
    const structure = props.structure;
    const setStructure = props.setStructure;

    const flip = (index) => {
        if (structure.blocked.includes(index)) {
            setStructure({
                ...structure,
                blocked: structure.blocked.filter((ele) => ele != index),
                marked: [...structure.marked, index],
            })
        }
        else if (structure.marked.includes(index)) {
            setStructure({
                ...structure,
                marked: structure.marked.filter((ele) => ele != index),
            })
        }
        else {
            setStructure({
                ...structure,
                blocked: [...structure.blocked, index],
            })
        }
    }

    let countIndex = 1

    const getIndex = (i, j) => i * structure.colCount + j

    const getCell = (i, j) => {
        return (
            <div
                className={
                    [
                        'cell',
                        ...(structure.blocked.includes(getIndex(i, j)) ? ['blockedCell'] : [])
                    ].join(' ')
                }
                onClick={
                    props.editMode
                        ? () => flip(getIndex(i, j))
                        : () => { }
                }
            >
                <strong>
                    {structure.marked.includes(getIndex(i, j))
                        ? (
                            props.editMode ? '*' : countIndex++
                        )
                        : ''}
                </strong>
            </div>
        )
    }

    return (
        <div>
            <table className={`${props.editMode ? 'edit' : 'view'}Table`}>
                <tbody>
                    {[...Array(structure.rowCount).keys()].map(i => {
                        return (
                            <tr key={i}>
                                {[...Array(structure.colCount).keys()].map(j => {
                                    return <td key={j}>{getCell(i, j)}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
