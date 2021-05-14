const delButtonHandler = async (event) => {
    event.preventDefault();
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

document.querySelector('.clothes-container').addEventListener('click', delButtonHandler);