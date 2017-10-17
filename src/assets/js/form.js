function sendForm() {
    let form = document.querySelector('.form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let data = {};
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        data.name = document.querySelector('.form__input--name').value;
        data.city = document.querySelector('.form__input--city').value;
        data.address = document.querySelector('.form__input--address').value;
        data.phone = document.querySelector('.form__input--phone').value;
        data.a5 = document.querySelector('.calc__input--a5').value;
        data.a4 = document.querySelector('.calc__input--a4').value;
        data.a3 = document.querySelector('.calc__input--a3').value;
        data.a3plus = document.querySelector('.calc__input--a3plus').value;
        data.a2 = document.querySelector('.calc__input--a2').value;
        data.bill = document.querySelector('.computation__bill').value;


        fetch('/send', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: myHeaders,
                mode: 'cors',
                cache: 'default'
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