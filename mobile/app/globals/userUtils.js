import AsyncStorage from '@react-native-async-storage/async-storage';

const getUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('user')
    const user =  jsonValue != null ? JSON.parse(jsonValue) : null;

    return user
  } catch(e) {
    
  }
}

const getTrainee = async () => {
  const user = await getUser()
  console.log('GETTING TRAINEEE ', user)
  try {
    let url = `https://fetch-your-body.herokuapp.com/public/trainee/${user?.id | 1}`;
    const response = await fetch(url, {
        headers: {
        "Content-Type": "application/json",
        },
    });
    const {trainee} = await response.json()

    console.log('GETTING TRAINEEE 22 ', user)
    return trainee

  } catch(e) {
    console.log('DAMN')
  }
}

const logout = async() => {
  try {
    await AsyncStorage.setItem('user', null)
  } catch (e) {
  }
}


export {
  getUser, logout, getTrainee
}
