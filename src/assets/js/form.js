function sendForm() {
    let form = document.querySelector('.form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let body = new Object();
        body.name = document.querySelector('.form__input--name').value;
        body.city = document.querySelector('.form__input--city').value;
        body.address = document.querySelector('.form__input--address').value;
        body.phone = document.querySelector('.form__input--phone').value;

        fetch('/send',
            {
                method: "POST",
                body: body
            })
            .then(function (res) {
                return res.text();
            })
            .then(function (data) {
                alert(data)
            })
    });
}
sendForm();