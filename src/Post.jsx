import { useState, useEffect } from 'react'
import axios from 'axios';

function Post() {
    const url = "https://localhost:7256/api/";
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date())
    const [info, setInfo] = useState("");
    const [info2, setInfo2] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const handleNewPost = async (event) => {
        setIsLoading(true);
        setInfo("");
        setInfo2("");
        event.preventDefault();
        const data = {
            subject: subject,
            description: description,
            endDate: date
        };
        console.log(data);
        await axios.post(url + "helpdesk/post", data)
            .then(res => {
                if (res.data.success) {
                    setInfo(res.data.message);
                } else {
                    setInfo2(res.data.message);
                }
            })
            .catch(error => {

            })
        setIsLoading(false);
    }

    return (
        <>

            <div className="container-sm ">
                <form onSubmit={handleNewPost}>
                    <p className="fs-1">Lisa uus pöördumine</p>
                    <div className="mb-3">
                        <label htmlFor="subjectText" className="form-label">Teema</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            id="subjectText"
                            placeholder="Lisa teema"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descriptionText" className="form-label">Pöördumise kirjeldus</label>
                        <textarea
                            className="form-control"
                            id="descriptionText"
                            rows="3"
                            placeholder="Lisa kirjeldus"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}>
                        </textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="datePicker" className="form-label">Lahendamise tähtaeg</label><br></br>
                        <input
                            type="datetime-local"
                            id="datePicker"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Postita</button>
                </form>
                <div className={`spinner-border m-5 ${!isLoading ? 'collapse' : 'show'}`} id="loading" role="status"></div>
                <br></br>
                <div className={`alert alert-success ${info == "" ? 'collapse' : 'show'}`} role="alert" style={{maxWidth:'500px'}}>
                    {info}
                </div>
                <div className={`alert alert-danger ${info2 == "" ? 'collapse' : 'show'}`} role="alert" style={{maxWidth:'500px'}}>
                    {info2}
                </div>
            </div>
        </>
    )
}

export default Post