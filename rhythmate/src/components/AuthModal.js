const AuthModal = ({setShowModal}) => {

    console.log('AuthModal component rendered');

    const handleClick = () => {
        console.log('Clicked');
        setShowModal(false);
    }

    return (
        <div className= "absolute w-20 left-0 right-0 top-175 mx-auto max-w-360 bg-white rounded-lg m-20 h-600 p-40">        <div className='' onClick={handleClick}>X</div>
        AUTH MODAL
      </div>
    )
  }
  
  export default AuthModal