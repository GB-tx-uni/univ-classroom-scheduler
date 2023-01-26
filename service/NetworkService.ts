import Auth from '@aws-amplify/auth';
import Lambda from 'aws-sdk/clients/lambda'; // npm install aws-sdk
var AWS = require('aws-sdk');
import { awsRegion, identityPoolId, lambdaEndPoint, identityPoolARN } from "../AppConfig"

class NetworkService {
    makeRequest = async (lambdaFunctionName: any, body: any, response: any) => {
        try {
            AWS.config.region = awsRegion;
            const user = await Auth.currentAuthenticatedUser();
            const login = { 'arn:aws:cognito-identity:us-east-2:124017527459:identitypool/us-east-2:b65b6456-be80-4c00-9e8f-c46bb0c44188': user.signInUserSession.idToken.jwtToken }
            console.log(login)
            //login[identityPoolARN ] = user.signInUserSession.idToken.jwtToken
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: identityPoolId,
                Logins: login
            })
            console.log('aws reg ' + awsRegion)
            const lambda = new Lambda({
                apiVersion: '2015-03-31',
                endpoint: lambdaEndPoint,
                sslEnabled: false,
                region: awsRegion
            });
            lambda.invoke({
                FunctionName: lambdaFunctionName,
                Payload: JSON.stringify(body)
            }, (err, res) => {
                console.log(err)
                if (res?.Payload !== 'null') {
                    console.log(res)
                    // const responseData = JSON.parse(res?.Payload?.toString())
                    // if ('errorMessage' in responseData) {
                    //     response(null, responseData["errorMessage"])
                    // }
                    // if (responseData['success']) {
                    //     response(responseData['responseData'], null)
                    // }
                    // else if (responseData['success'] == false) {
                    //     response(null, responseData["message"])
                    // }

                }
                else {
                    response(null, "Something went wrong")
                }

            });
        }
        catch (error) {
            console.log(error)
        }
    }
}

export default NetworkService