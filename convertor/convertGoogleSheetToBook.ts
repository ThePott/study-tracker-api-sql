import fs from 'fs';
import path from "path";
import { book, PrismaClient, question_group, step, topic } from '../generated/prisma';

const filePath = path.join(process.cwd(), 'convertor', 'synergy-progress.txt');
const rawData = fs.readFileSync(filePath, 'utf8');
const rowArray: string[] = rawData.split("\n");

interface Atom {
  topicTitle: string
  stepTitle: string
  questionGroupDescription: string
}

const operation = {
  topicTitle: null as string | null,
  stepTitle: null as string | null,
  atomArray: [] as Atom[],

  updateAtomArray(splitArray: string[]) {
    const [questionGroupDescription, topicTitle, stepTitle, memo] = splitArray
    if (topicTitle) { this.topicTitle = topicTitle }
    if (stepTitle) { this.stepTitle = stepTitle }

    if (!this.topicTitle || !this.stepTitle) { throw new Error("---- WHY NULL TITLE?") }

    const atom: Atom = { topicTitle: this.topicTitle, stepTitle: this.stepTitle, questionGroupDescription }

    this.atomArray.push(atom)
  }
}

const convertGoogleSheetToAtomArray = (bookTitle: string) => {
  rowArray.forEach((row) => {
    const splitArray = row.split("\t")
    if (splitArray.length !== 4) { return }
    operation.updateAtomArray(splitArray)
  })

  const atomArray = [...operation.atomArray]
  return atomArray
};

// convertGoogleSheetToAtomArray("마플 시너지 수학(상)")


const prisma = new PrismaClient()

const pushGoogleSheetToNeon = async (bookTitle: string) => {
  const atomArray = convertGoogleSheetToAtomArray(bookTitle)

  // const book = { title: bookTitle } as book
  // const bookResult = await prisma.book.create({ data: book })
  // console.log(bookResult)

  // const book = await prisma.book.findFirst({ where: { title: bookTitle } })
  // const book_id = book?.id
  // console.log({book_id})
  // const topicTitleArray = Object.keys(Object.groupBy(atomArray, (atom) => atom.topicTitle))
  // topicTitleArray.forEach(async (topicTitle) => {
  //   const topic = { book_id, title: topicTitle } as topic
  //   const result = await prisma.topic.create({ data: topic })
  //   console.log({result})
  // })

  // const topicDict = Object.groupBy(atomArray, (atom) => atom.topicTitle)
  // const topicEntryArray = Object.entries(topicDict)
  // topicEntryArray.forEach(async (entry) => {
  //   const topicTitle = entry[0]
  //   const topic = await prisma.topic.findFirst({ where: { title: topicTitle } })
  //   if (!topic) { throw new Error("---- WHY NO TOPIC ????") }
  //   const topic_id = topic.id

  //   const atomArrayForTopic = entry[1]
  //   if (!atomArrayForTopic) { throw new Error("---- WHY NO atomArrayForTopic ????") }
  //   const stepTitleArray = Object.keys(Object.groupBy(atomArrayForTopic, (atom) => atom.stepTitle))

  //   stepTitleArray.forEach(async (stepTitle) => {
  //     const step = { title: stepTitle, topic_id } as step
  //     const result = await prisma.step.create({ data: step })
  //     console.log({ result })
  //   })
  // })

  // atomArray.forEach(async (atom) => {
  //   const step = await prisma.step.findFirst({
  //     where: {
  //       title: atom.stepTitle,
  //       topic: {
  //         title: atom.topicTitle,
  //         book: { title: bookTitle }
  //       }
  //     },
  //     include: {
  //       topic: { include: { book: true } }
  //     }
  //   });
  //   if (!step) { throw new Error("---- WHY NO ERROR ????") }

  //   const step_id = step.id
  //   const questionGroup = { step_id, description: atom.questionGroupDescription } as question_group
  //   const result = await prisma.question_group.create({data: questionGroup})
  //   console.log({result})
  // })

  // const stepTitleArray = Object.keys(Object.groupBy(atomArray, (atom) => atom.stepTitle))
  // console.table(stepTitleArray)


}

pushGoogleSheetToNeon("마플 시너지 수학(상)")
/**
npx ts-node convertor/convertGoogleSheetToBook.ts
 */
