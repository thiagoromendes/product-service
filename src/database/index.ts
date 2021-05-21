import {connect} from 'mongoose'

const conection = async () => {
    await connect(process.env.MONGO_URL || '',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

export {conection}
