import React from 'react'
import {useState, useEffect} from "react"

function Employee() {

    useEffect(() => {
        fetch("")
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    const [data, setData] = useState([]);
    const [id, setId] = useState("");
    const [cmt, setCmt] = useState("");
    const [bacNghe, setBacNghe] = useState("");
    const [diaChi, setDiaChi] = useState("");
    const [maNv, setMaNv] = useState("");
    const [ngaySinh, setNgaySinh] = useState("");
    const [ten, setTen] = useState("");
    const [thamNien, setThamNien] = useState("");
    const [viTriCongViec, setViTriCongViec] = useState("");

    const handleDel = e => {
        setData(data.filter(item => item.id !== e.target.dataset.row));
    }

    const handleSubmit = e => {
        e.preventDefault();
        setData([...data, {
            id: id,
            cmt: cmt,
            bacNghe: bacNghe,
            diaChi: diaChi,
            maNv: maNv,
            ngaySinh: ngaySinh,
            ten: ten,
            thamNien: thamNien,
            viTriCongViec: viTriCongViec
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
                            <h4>Bac nghe</h4>
                            <input className="inputCss" onChange={(e) => setBacNghe(e.target.value)}></input>
                        </div>
                        <div className="details">
                            <h4>Dia chi</h4>
                            <input className="inputCss" onChange={(e) => setDiaChi(e.target.value)}></input>
                        </div>
                        <div className="details">
                            <h4>Ma nhan vien</h4>
                            <input className="inputCss" onChange={(e) => setMaNv(e.target.value)}></input>
                        </div>
                        
                    </div>
                    <div className="divide_input2">
                        <div className="details">
                            <h4>Ngay sinh</h4>
                            <input className="inputCss" onChange={(e) => setNgaySinh(e.target.value)}></input>
                        </div>
                        <div className="details">
                            <h4>Ten</h4>
                            <input className="inputCss" onChange={(e) => setTen(e.target.value)}></input>
                        </div>
                        <div className="details">
                            <h4>Tham nien</h4>
                            <input className="inputCss" onChange={(e) => setThamNien(e.target.value)}></input>
                        </div>
                        <div className="details">
                            <h4>Vi tri cong viec</h4>
                            <input className="inputCss" onChange={(e) => setViTriCongViec(e.target.value)}></input>
                        </div>
                        
                    </div>
                </div>
                <button className="btnAdd" onClick={handleSubmit}>Them</button>
            </form>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Chung minh thu</th>
                    <th>Bac nghe</th>
                    <th>Dia chi</th>
                    <th>Ma nhan vien</th>
                    <th>Ngay sinh</th>
                    <th>Ten</th>
                    <th>Tham nien</th>
                    <th>Vi tri cong viec</th>
                    <th>Chuc nang</th>
                </tr>
                {data.map(item => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.cmt}</td>
                        <td>{item.bacNghe}</td>
                        <td>{item.diaChi}</td>
                        <td>{item.maNv}</td>
                        <td>{item.ngaySinh}</td>
                        <td>{item.ten}</td>
                        <td>{item.thamNien}</td>
                        <td>{item.viTriCongViec}</td>
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

export default Employee
