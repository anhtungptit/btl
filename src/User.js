import React from 'react'
import {useState, useEffect} from "react"

function User() {

    useEffect(() => {
        fetch("")
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    const [data, setData] = useState([]);
    const [id, setId] = useState("");
    const [cmt, setCmt] = useState("");
    const [diaChi, setDiaChi] = useState("");
    const [maKh, setMaKh] = useState("");
    const [ngaySinh, setNgaySinh] = useState("");
    const [ten, setTen] = useState("");

    const handleDel = e => {
        setData(data.filter(item => item.id !== e.target.dataset.row));
    }

    const handleSubmit = e => {
        e.preventDefault();
        setData([...data, {
            id: id,
            cmt: cmt,
            diaChi: diaChi,
            maKh: maKh,
            ngaySinh: ngaySinh,
            ten: ten
        }])
    }

    return (
        <div>
            <form>
                <div className="divide_input">
                    <div className="divide_input1">
                        <div className="details">
                            <h4>Id</h4>
                            <input className="inputCss" onChange={(e) => setId(e.target.value)}></input>
                        </div>
                        
                        <div className="details">
                            <h4>Chung minh thu</h4>
                            <input className="inputCss" onChange={(e) => setCmt(e.target.value)}></input>
                        </div>

                        <div className="details">
                            <h4>Dia chi</h4>
                            <input className="inputCss" onChange={(e) => setDiaChi(e.target.value)}></input>
                        </div>         
                        
                    </div>
                    <div className="divide_input2">
                        <div className="details">
                            <h4>Ma khach hang</h4>
                            <input className="inputCss" onChange={(e) => setMaKh(e.target.value)}></input>
                        </div>
                        <div className="details">
                            <h4>Ngay sinh</h4>
                            <input className="inputCss" onChange={(e) => setNgaySinh(e.target.value)}></input>
                        </div>
                        <div className="details">
                            <h4>Ten</h4>
                            <input className="inputCss" onChange={(e) => setTen(e.target.value)}></input>
                        </div>  
                    </div>
                </div>
                <button className="btnAdd" onClick={handleSubmit}>Them</button>
            </form>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Chung minh thu</th>
                    <th>Dia chi</th>
                    <th>Ma khach hang</th>
                    <th>Ngay sinh</th>
                    <th>Ten</th>
                    <th>Chuc nang</th>
                </tr>
                {data.map(item => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.cmt}</td>
                        <td>{item.diaChi}</td>
                        <td>{item.maKh}</td>
                        <td>{item.ngaySinh}</td>
                        <td>{item.ten}</td>
                        <td>
                            <button data-row={item.id}>Sua</button>
                            <button onClick={handleDel} data-row={item.id}>Xoa</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default User
