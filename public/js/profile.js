const newFormHandler = async (event) => {
    event.preventDefault();

    const type = document.querySelector('#type').value;
    const brand = document.querySelector('#brand').value.trim();
    const date_purchased = document.querySelector('#date-purchased').value.trim();
    const description = document.querySelector('#description').value;
    const filename = document.querySelector('#filename').value.trim();

    if (type && brand && date_purchased && description && filename) {
        const response = await fetch(`/api/clothes`, {
            method: 'POST',
            body: JSON.stringify({ type, brand, date_purchased, description, filename }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create new clothing item')
        }
    }

}

document.querySelector('.new-clothes-form').addEventListener('submit', newFormHandler);