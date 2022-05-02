import schedule, { Job } from 'node-schedule'

export function CronJob () {
  const crons = new Map<string, Job>()

  function create (time: string, calback: () => void) {
    if (!time) {
      throw new Error('time is required')
    }

    const job = schedule.scheduleJob(time, calback)
    return job
  }

  function add (name: string, time: string, calback: any) {
    const job = create(time, calback)
    crons.set(name, job)
  }

  function stop (name: string) {
    const job = crons.get(name)
    if (job) {
      job.cancel()
    }
  }

  return {
    add,
    stop
  }
}