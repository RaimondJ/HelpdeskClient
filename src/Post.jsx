import { useState, useEffect } from 'react'
import axios from 'axios';

function Post() {

    const url = "https://localhost:7256/api/";
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date())

    const handleNewPost = async (event) => {
        event.preventDefault();
        const data = {
            subject: subject,
            description: description,
            endDate: date
        };
        console.log(data);
        axios.post(url + "helpdesk/post", data)
            .then(res => {
                if (res.data.success) {

                } else {

                }
            })
            .catch(error => {

            })
    }

    return (
        <>
            <div class="container-sm ">
                <form onSubmit={handleNewPost}>
                    <p className="fs-1">Lisa uus pöördumine</p>
                    <div class="mb-3">
                        <label for="subjectText" class="form-label">Teema</label>
                        <input
                            required
                            type="text"
                            class="form-control"
                            id="subjectText"
                            placeholder="Lisa teema"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="descriptionText" class="form-label">Pöördumise kirjeldus</label>
                        <textarea
                            class="form-control"
                            id="descriptionText"
                            rows="3"
                            placeholder="Lisa kirjeldus"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}>
                        </textarea>
                    </div>
                    <div className="mb-3">
                        <label for="datePicker" class="form-label">Lahendamise tähtaeg</label><br></br>
                        <input
                            type="date"
                            id="datePicker"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">Postita</button>
                </form>
            </div>
        </>
    )
}

export default Post