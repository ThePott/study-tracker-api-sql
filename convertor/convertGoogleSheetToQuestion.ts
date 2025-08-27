import fs from "fs"
import path from "path"
import { book, PrismaClient, question_group, step, topic, question } from "../generated/prisma"

const convert = async () => {
    // const prisma = new PrismaClient()

    // const filePath = path.join(process.cwd(), "convertor", "synergy-review-check.txt")
    // const rawData = fs.readFileSync(filePath, "utf8")
    // const rowArray: string[] = rawData.split("\n")

    // const splitArray = rowArray.reduce((acc: any[], row) => {
    //     const array = row.split("\t")
    //     if (array.length === 0) {
    //         return acc
    //     }
    //     return [...acc, array]
    // }, [])
    // const groupedByStep = Object.groupBy(splitArray, ([bookTitle, topicTitle, stepTitle]) => `${bookTitle}__${topicTitle}__${stepTitle}`)
    // const keyToStepId = {} as Record<string, number>
    // const entryArray = Object.entries(groupedByStep)

    // for (const entry of entryArray) {
    //     const [bookTitle, topicTitle, stepTitle] = (entry[1] as any[])[0]
    //     const result = await prisma.step.findFirst({ where: { title: stepTitle, topic: { title: topicTitle, book: { title: bookTitle } } } })
    //     if (!result) {
    //         console.log({ result })
    //         return
    //     }
    //     keyToStepId[entry[0]] = result.id
    // }

    // const questionArray = []
    // for (const entry of entryArray) {
    //     const step_id = keyToStepId[entry[0]]
    //     for (const row of entry[1] as any[]) {
    //         const [, , , questionPageImString, question_label, solutionPageImString] = row
    //         const question = {
    //             question_page: Number(questionPageImString),
    //             question_label,
    //             solution_page: Number(solutionPageImString),
    //             step_id
    //         } as question

    //         questionArray.push(question)
    //     }
    // }

    // console.log({questionArray})

    // const result = await prisma.question.createMany({data: questionArray})
}

convert()

/**
npx ts-node convertor/convertGoogleSheetToQuestion.ts
 */
