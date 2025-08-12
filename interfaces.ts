import { progress_completed, progress_in_progress_status } from "./generated/prisma"

export interface Progress {
    id: number
    bookTitle: string
    topicTitle: string
    stepTitle: string
    questionGroupDescription: string
    completed: progress_completed
    inProgressStatus: progress_in_progress_status
    doNeedToAsk: boolean
}