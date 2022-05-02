import { CronJob } from './cronJob'
import { HandleUser } from './user'

const cronJobs = CronJob()

cronJobs.add('test', '1 * * * * *', HandleUser)