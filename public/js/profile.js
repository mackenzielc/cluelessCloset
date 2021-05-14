console.log("connected")
const newFormHandler = async (event) => {
    event.preventDefault();

    const type = document.querySelector('#type').value;
    const brand = document.querySelector('#brand').value.trim();
    const date_purchased = document.querySelector('#date-purchased').value.trim();
    const description = document.querySelector('#description').value;
    const filename = document.querySelector('#filename').value.trim();
    console.log("clicked",date_purchased, description, filename)

    if (type && brand && date_purchased && description && filename) {
        const response = await fetch(`/api/clothes`, {
            method: 'POST',
            body: JSON.stringify({ type, brand, date_purchased, description, filename }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log(response)

        if(response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create new clothing item')
        }
    }

}

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/clothes/${id}`, {
            method: 'DELETE',
        });

        if(response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete clothing item');
        }
    }
};

document.querySelector('.new-clothes-form').addEventListener('submit', newFormHandler);
document.querySelector('.clothes-container').addEventListener('click', delButtonHandler);