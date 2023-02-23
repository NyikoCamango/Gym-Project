import React, {useEffect} from "react"
import { Text } from "react-native"
import GoogleFit, { Scopes, BucketUnit, MealType, Nutrient } from 'react-native-google-fit'


const UserStats = () => {

    useEffect(()=> {
        const options = {
            scopes: [
              Scopes.FITNESS_ACTIVITY_READ,
              Scopes.FITNESS_ACTIVITY_WRITE,
              Scopes.FITNESS_BODY_READ,
              Scopes.FITNESS_BODY_WRITE,
              Scopes.FITNESS_NUTRITION_WRITE,
              Scopes.FITNESS_SLEEP_READ,
              Scopes.FITNESS_SLEEP_WRITE
            ],
          }
          GoogleFit.authorize(options)
            .then(authResult => {
              if (authResult.success) {
                  console.log('yebo')
                // dispatch("AUTH_SUCCESS");
              } else {
                // dispatch("AUTH_DENIED", authResult.message);
              }
            })
            .catch(() => {
            //   dispatch("AUTH_ERROR");
            })
    },[])
    const opt = {
        startDate: "2022-05-05T00:00:17.971Z", // required ISO8601Timestamp
        endDate: new Date().toISOString(), // required ISO8601Timestamp
        bucketUnit: BucketUnit.DAY, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
        bucketInterval: 1, // optional - default 1. 
      }

   const test = async () => {
    // await GoogleFit.checkIsAuthorized();
    // console.log('>> ', GoogleFit.isAuthorized);

    // const res = await GoogleFit.getDailyStepCountSamples(opt)
    // console.log('Daily steps >>> ', res)

   }

   const getStuff = async () => {
    let opt = {
        startDate: "2022-01-01T00:00:17.971Z", // required
        endDate: new Date().toISOString(), // required
        bucketUnit: BucketUnit.DAY, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
        bucketInterval: 1, // optional - default 1. 
    };

      const res = await GoogleFit?.getActivitySamples(opt)
        console.log('act ', res);
   }

   test()

   getStuff()
    
    return (
        <Text>Helo</Text>
    )
}

export default UserStats