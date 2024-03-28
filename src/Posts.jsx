import { useState, useEffect } from 'react'
import axios from 'axios';
import { Modal } from 'bootstrap'

function Posts() {

    const url = "https://localhost:7256/api/";
    const [posts, setPosts] = useState([]);
    const [message, setMessage] = useState("");
    const handleDeletePost = async (id) => {
        axios.delete(url + "helpdesk/post/" + id)
            .then(res => {
                setMessage(res.data.message);
                const updatedPosts = posts.filter(post => post.id !== id);
                setPosts(updatedPosts);
                document.getElementById("alertBox").classList.remove("d-none");
                setTimeout(() => {
                    document.getElementById("alertBox").classList.add("d-none");
                }, 4000);
            })
            .catch(error => {

            });
    };

    useEffect(() => {
        axios.get(url + "helpdesk/posts")
            .then(res => {
                document.getElementById("loading").remove();
                if (res.data.length != 0) {
                    setPosts(res.data);
                } else {
                    document.getElementById("extText").classList.remove("d-none");
                }
            })
    }, []);

    return (
        <>
            <div className="container text-center">
                <p className="p-3 fs-2">Pöördumiste nimekiri</p>
                <div className="spinner-border m-5" id="loading" role="status"></div>
                <div className="container px-4 overflow-hidden text-center">
                    <div id="alertBox" className='d-none'>
                        <div className="alert alert-success" role="alert">
                            {message}
                        </div>
                    </div>

                    <div className="row gy-5">
                        <div className="d-none" id="extText">
                            <p className='fs-3'>Hetkel pole ühtegi aktiivset pöördumist.</p>
                        </div>
                        {posts.map(post => (
                            <div className="col-6" key={post.id}>
                                <div className={`p-3 border ${post.isExpiring ? 'bg-danger' : 'bg-light'}`}>
                                    <p className={`fs-3 ${post.isExpiring ? 'text-white' : ''}`}>{post.subject}</p>
                                    <p className={`fs-5 ${post.isExpiring ? 'text-white' : ''}`}>{post.description}</p>
                                    <hr></hr>
                                    <p className={`fs-5 ${post.isExpiring ? 'text-white' : ''}`}>Loodud {post.beginDate}</p>
                                    <p className={`fs-5 ${post.isExpiring ? 'text-white' : ''}`}>Tähtaeg {post.endDate}</p>
                                    <p className={`fs-5 ${post.isExpiring ? 'text-white' : ''}`}>{post.timeLeft}</p>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#post_${post.id}`}>
                                        Märgi lahendatuks
                                    </button>
                                    <div className="modal fade" id={`post_${post.id}`} tabIndex="-1" aria-labelledby={`postLabel_${post.id}`} aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id={`postLabel_${post.id}`}>Pöördumise lahendatuks märkimine</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    Kas oled kindel, et soovid pöördumise pealkirjaga <strong>{post.subject}</strong> lahendatuks märkida?
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Ei</button>
                                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleDeletePost(post.id)}>Märgi lahendatuks</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Posts