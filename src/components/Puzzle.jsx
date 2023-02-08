import { useState } from "react";

export default function Puzzle(props) {
	const [structure, setStructure] = useState({
		rowCount: 12,
		colCount: 12,
		blocked: [2, 14, 25, 46, 55, 79, 109],
		marked: [12, 24, 35, 66, 75, 90, 99, 119],
	});

	let index = 1;

	const getIndex = (i,j) => i * structure.colCount + j;

    const getCell = (i, j)=>{
		return <div className={`cell${structure.blocked.includes(getIndex(i,j)) ? " blockedCell" : ""}`}>
			<strong>
				{structure.marked.includes(getIndex(i,j)) ? index++ : ""}
			</strong>
		</div>
	}

    return (
	<table>
		<tbody>
			{
				[...Array(structure.rowCount).keys()].map((i)=>{
					return <tr>
						{
							[...Array(structure.colCount).keys()].map((j)=>{
								return <td>
									{getCell(i,j)}
								</td>
							})
						}
					</tr>
				})
			}
		</tbody>
	</table>
    )
}