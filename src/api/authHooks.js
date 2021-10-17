import {auth} from './index';


export const useGoogleAuthentication = () => {
    const handleGoogleSuccess = async (response) => {
        if ('accessToken' in response) {
            const accessToken = response.accessToken;
            const responseToken = await auth.googleAuth(accessToken);

            return responseToken.accessToken;
        }
    }

    return {handleGoogleSuccess};
}
