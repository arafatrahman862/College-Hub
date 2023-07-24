import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSIgnIn = () => {

  

        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                
               
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
        
        <p className='text-center'>
            <button onClick={handleGoogleSIgnIn} className='btn btn-outline rounded-full'>Google</button>
            
        </p>
    </div>
    );
};

export default SocialLogin;