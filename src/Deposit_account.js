import React from 'react'
import {useState, useEffect} from "react"

function Deposit_account() {

    useEffect(() => {
        fetch("")
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    const [data, setData] = useState([]);
    const [id, setId] = useState("");
    const [loaiTk, setLoaiTk] = useState("");
    const [maTk, setMaTk] = useState("");
    const [soDu, setSoDu] = useState("");
    const [userId, setUserId] = useState("");
    const [laiSuatHangThang, setLaiSuatHangThang] = useState("");
    const [soDuToiThieu, setSoDuToiThieu] = useState("");
    
    const handleDel = e => {
        setData(data.filter(item => item.id !== e.target.dataset.row));
    }

    const handleSubmit = e => {
        e.preventDefault();
        setData([...data, {
            id: id,
            loaiTk: loaiTk,
            maTk: maTk,
            soDu: soDu,
            userId: userId,
            laiSuatHangThang: laiSuatHangThang,
            soDuToiThieu: soDuToiThieu
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
                            <h4>Loai tai khoan</h4>
                            <input className="inputCss" onChange={(e) => setLoaiTk(e.target.value)}></input>
                        </div>
                        <div className="details">
                            <h4>Ma tai khoan</h4>
                            <input className="inputCss" onChange={(e) => setMaTk(e.target.value)}></input>
                        </div>
                        <div className="details">
                            <h4>So du</h4>
                            <input className="inputCss" onChange={(e) => setSoDu(e.target.value)}></input>
                        </div>     
                        
                    </div>
                    <div className="divide_input2">
                        <div className="details">
                            <h4>User id</h4>
                            <input className="inputCss" onChange={(e) => setUserId(e.target.value)}></input>
                        </div>
                        <div className="details">
                            <h4>Lai suat hang thang</h4>
                            <input className="inputCss" onChange={(e) => setLaiSuatHangThang(e.target.value)}></input>
                        </div>
                        <div className="details">
                            <h4>So du toi thieu</h4>
                            <input className="inputCss" onChange={(e) => setSoDuToiThieu(e.target.value)}></input>
                        </div>        
                    </div>                   
                </div>
                <button className="btnAdd" onClick={handleSubmit}>Them</button>
            </form>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Loai tai khoan</th>
                    <th>Ma tai khoan</th>
                    <th>So du</th>
                    <th>User id</th>
                    <th>Lai suat hang thang</th>
                    <th>So du toi thieu</th>
                    <th>Chuc nang</th>
                </tr>
                {data.map(item => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.loaiTk}</td>
                        <td>{item.maTk}</td>
                        <td>{item.soDu}</td>
                        <td>{item.userId}</td>
                        <td>{item.laiSuatHangThang}</td>
                        <td>{item.soDuToiThieu}</td>
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

export default Deposit_account
