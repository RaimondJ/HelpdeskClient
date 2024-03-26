
function Post() {
    return (
        <>
            <div class="container-sm ">
                <form>
                    <p className="fs-1">Lisa uus pöördumine</p>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Teema</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Lisa teema" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Pöördumise kirjeldus</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Lisa kirjeldus"></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="datePicker" class="form-label">Lahendamise tähtaeg</label><br></br>
                        <input type="date" id="datePicker" name="birthday" />
                    </div>
                    <button type="submit" class="btn btn-primary">Postita</button>
                </form>
            </div>
        </>
    )
}

export default Post