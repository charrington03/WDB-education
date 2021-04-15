import os
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = 'AC772f3865de74cf225c9d324036edeea9' #os.environ['TWILIO_ACCOUNT_SID']
auth_token = 'b843c98383316c127639029533bfc645' #os.environ['TWILIO_AUTH_TOKEN']
client = Client(account_sid, auth_token)

message = client.messages \
                .create(
                     body="Testing...",
                     from_='+19197596036',
                     to='5033743014'
                 )

print(message.sid)