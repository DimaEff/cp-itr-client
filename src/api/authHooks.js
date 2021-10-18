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

export const useVkAuthentication = () => {

    const handleVkSuccess = async (token) => {
        if (!token) return false;

        const res = await auth.vkAuth(token);
        return res;
    }

    return {handleVkSuccess};
}
