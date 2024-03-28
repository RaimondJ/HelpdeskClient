import { useState, useEffect } from 'react'
import axios from 'axios';
import { Modal } from 'bootstrap'

function Posts() {

    const url = "https://localhost:7256/api/";
    const [posts, setPosts] = useState([]);

    const handleDeletePost = (id) => {
        axios.delete(url + "helpdesk/post/" + id)
            .then(res => {
                
            })
            .catch(error => {

            });
        const modalId = `#post_${id}`;
        const truck_modal = document.querySelector(modalId);
        truck_modal.remove();
       /* truck_modal.addEventListener('hidden.bs.modal', function (event) {
            truck_modal.remove();
        });
        const modal = Modal.getInstance(truck_modal);
        modal.hide();*/

    };

    useEffect(() => {
        axios.get(url + "helpdesk/posts")
            .then(res => {
                setPosts(res.data);
            })
    }, []);

    return (
        <>
            <div className="container text-center">
                <p className="p-3 fs-2">Pöördumiste nimekiri</p>
                <div class="container px-4 overflow-hidden text-center">
                    <div class="row gy-5">
                        {posts.map(post => (
                            <div class="col-6">
                                <div className={`p-3 border ${post.isExpiring ? 'bg-danger' : 'bg-light'}`}>
                                    <p className={`fs-3 ${post.isExpiring ? 'text-white' : ''}`}>{post.subject}</p>
                                    <p className={`fs-5 ${post.isExpiring ? 'text-white' : ''}`}>{post.description}</p>
                                    <hr></hr>
                                    <p className={`fs-5 ${post.isExpiring ? 'text-white' : ''}`}>Loodud {post.beginDate}</p>
                                    <p className={`fs-5 ${post.isExpiring ? 'text-white' : ''}`}>Tähtaeg {post.endDate}</p>
                                    <p className={`fs-5 ${post.isExpiring ? 'text-white' : ''}`}>{post.timeLeft}</p>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#post_${post.id}`}>
                                        Märgi lahendatuks
                                    </button>
                                    <div class="modal fade" id={`post_${post.id}`} tabindex="-1" aria-labelledby={`postLabel_${post.id}`} aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id={`postLabel_${post.id}`}>Pöördumise lahendatuks märkimine</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    Kas oled kindel, et soovid pöördumise pealkirjaga <strong>{post.subject}</strong> lahendatuks märkida?
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Ei</button>
                                                    <button type="button" class="btn btn-primary" onClick={() => handleDeletePost(post.id)}>Märgi lahendatuks</button>
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