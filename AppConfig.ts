let awsRegion = 'us-east-2'
let identityPoolId = 'us-east-2:b65b6456-be80-4c00-9e8f-c46bb0c44188'
let identityPoolARN = 'cognito-idp.us-east-2.amazonaws.com/us-east-2_RLYP0TBYB'
let lambdaEndPoint = 'https://lambda.us-east-2.amazonaws.com'

console.log(process.env.ENV + "abc")
if (process.env.ENV == "prod") {
    awsRegion = 'us-east-1'
    identityPoolId = 'us-east-1:dce2ec1d-44f6-4619-b20f-68cdc50dcf6d'
    identityPoolARN = 'cognito-idp.us-east-1.amazonaws.com/us-east-1_dQgIq9LGk'
    lambdaEndPoint = 'https://lambda.us-east-1.amazonaws.com'
}

console.log(lambdaEndPoint)

export {
    identityPoolId,
    awsRegion,
    identityPoolARN,
    lambdaEndPoint,
}

