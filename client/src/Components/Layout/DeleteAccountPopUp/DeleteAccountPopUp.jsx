import "./DeleteAccountPopUp.scss"

function DeleteAccountPopUp({onClose}) {

    function deleteAccount() {
        console.log("delete account - homepage");
        const user = JSON.parse(localStorage.getItem("user"));           // get current logged in user
        const cart = JSON.parse(localStorage.getItem("cart")) || [];    // get current cart

        const updateUser = cart.filter(item => item.username !== user);
        localStorage.setItem("users", JSON.stringify(updateUser));

    }

    function close() {
        onClose();
    }

    //function to close

    return(
        <div className="delete-account-container">
            <h1>Are you sure?</h1>
            <h3>Pressing &apos;Yes&apos; will permanently delete your account</h3>
            <div className="delete-account-btns">
                <button onClick={close}>No</button>
                <button onClick={deleteAccount}>Yes</button>
            </div>
        </div>
    );
}

export default DeleteAccountPopUp