import { PrismaClient, app_user, progress } from "../generated/prisma"
import { Progress } from "../interfaces"

const prisma = new PrismaClient()

export const prismaUserFindMany = async () => prisma.app_user.findMany()

export const prismaUserCreate = async (user: app_user) => prisma.app_user.create({ data: user })

export const prismaAssignProgressFromBook = async (studentId: number, bookTitle: string) => {
    const student = await prisma.app_user.findUnique({ where: { id: studentId } })
    if (!student) { throw new Error("NotFoundError") }

    const resultFindMany = await prisma.question_group.findMany({
        where: { step: { topic: { book: { title: bookTitle } } } },
        select: {
            // id: true, step: { select: { topic: { select: { book: { select: { title: true } } } } } }
            id: true
        }
    });

    const progressArray = resultFindMany.reduce((acc: progress[], questionGroup) => {
        const progress = {} as progress
        progress.app_user_id = studentId
        progress.question_group_id = questionGroup.id
        progress.completed = "NOT_STARTED"
        progress.in_progress_status = "TODAY_WORK"
        progress.do_need_to_ask = false
        acc.push(progress)
        return acc
    }, [])

    const resultCreateMany = await prisma.progress.createMany({ data: progressArray })
    console.log({ resultCreateMany })
    // const book = await 
    return resultCreateMany
}

export const prismaGetAllProgress = async (studentId: number) => {
    const result = await prisma.progress.findMany({
        where: { app_user_id: studentId },
        select: {
            id: true,
            completed: true,
            in_progress_status: true,
            do_need_to_ask: true,
            question_group: {
                select: {
                    description: true,
                    step: {
                        select: {
                            title: true,
                            topic: {
                                select: {
                                    title: true,
                                    book: { select: { title: true } }
                                }
                            }
                        }
                    }
                },

            }
        }
    })

    const progressArray = result.map((el) => {
        const progress: Progress = {
            id: el.id, 
            bookTitle: el.question_group.step.topic.book.title,
            topicTitle: el.question_group.step.topic.title,
            stepTitle: el.question_group.step.title,
            questionGroupDescription: el.question_group.description,
            completed: el.completed,
            inProgressStatus: el.in_progress_status,
            doNeedToAsk: el.do_need_to_ask
        }
        return progress
    })

    const groupedProgressArray = Object.groupBy(progressArray, (progress) => progress.bookTitle)
    return groupedProgressArray
}
