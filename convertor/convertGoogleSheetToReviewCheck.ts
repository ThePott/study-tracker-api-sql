import fs from 'fs';
import path from "path";
import { book, PrismaClient, question_group, step, topic, review_check } from '../generated/prisma';

const filePath = path.join(process.cwd(), 'convertor', 'synergy-review-check.txt');
const rawData = fs.readFileSync(filePath, 'utf8');
const rowArray: string[] = rawData.split("\n");

