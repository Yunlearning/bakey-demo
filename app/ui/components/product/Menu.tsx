"use client";

export default function Menu() {
    return (
        <div className="bg-white">
            <ul className="flex flex-row w-full justify-between p-2 rounded">
                <li>
                    <ul className="flex flex-col gap-2 justify-center items-center">
                        <li className="pb-2">日</li>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
                </li>
                <li>
                    <ul className="flex flex-col gap-2 justify-center items-center">
                        <li className="pb-2">一</li>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
                </li>
                <li>
                    <ul className="flex flex-col gap-2 justify-center items-center">
                        <li className="pb-2">二</li>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
                </li>
                <li>
                    <ul className="flex flex-col gap-2 justify-center items-center">
                        <li className="pb-2">三</li>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
                </li>
                <li>
                    <ul className="flex flex-col gap-2 justify-center items-center">
                        <li className="pb-2">四</li>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
                </li>
                <li>
                    <ul className="flex flex-col gap-2 justify-center items-center">
                        <li className="pb-2">五</li>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
                </li>
                <li>
                    <ul className="flex flex-col gap-2 justify-center items-center">
                        <li className="pb-2">六</li>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
                </li>
            </ul>
            <div className="w-full">
                <table className="table-auto">
                    <thead>
                        <tr className="text-start">
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td>Malcolm Lockyer</td>
                            <td>1961</td>
                        </tr>
                        <tr>
                            <td>Witchy Woman</td>
                            <td>The Eagles</td>
                            <td>1972</td>
                        </tr>
                        <tr>
                            <td>Shining Star</td>
                            <td>Earth, Wind, and Fire</td>
                            <td>1975</td>
                        </tr>
                    </tbody>
                </table>
                {/* <table className="w-full table-auto">
                    <thead>
                        <tr>
                            <th className="bg-amber-500">日</th>
                            <th>一</th>
                            <th className="bg-amber-500">二</th>
                            <th>三</th>
                            <th className="bg-amber-500">四</th>
                            <th>五</th>
                            <th className="bg-amber-500">六</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="bg-violet-500">商品1</td>
                            <td>100</td>
                            <td>2</td>
                            <td>200</td>
                            <td>100</td>
                            <td>2</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td>商品2</td>
                            <td>200</td>
                            <td>3</td>
                            <td>600</td>
                            <td>200</td>
                            <td>3</td>
                            <td>600</td>
                        </tr>
                        <tr>
                            <td>商品3</td>
                            <td>300</td>
                            <td>4</td>
                            <td>1200</td>
                            <td>300</td>
                            <td>4</td>
                            <td>1200</td>
                        </tr>
                    </tbody>
                </table> */}
            </div>
        </div>
    )
}