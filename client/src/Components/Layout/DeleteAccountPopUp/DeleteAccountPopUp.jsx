import "./DeleteAccountPopUp.scss"

function DeleteAccountPopUp({onClose}) {

    function deleteAccount() {
        console.log("delete account - homepage")
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