import type { Slide } from '@/types/slides'
import standPage from './basicInfo'
import medicalPage from './medicInfo'
import clinicalPage from './clinicalInfo'
import gapPage from './gapInfo'
import boltonPage from './boltonInfo'
import panoPage from './panoInfo'
import treatmentPage from './treatmentInfo'
import frontPage from './frontInfo'
import rightPage from './rightInfo'
import mouthPage from './mouthInfo'
import modelPage from './modelInfo'
import introPage from './introInfo'
import homePage from './homeInfo'
import testTable from './testTable'
import laterPage from './lateralInfo'
import bonePage from './boneInfo'
import conclusionPage from './conclusionInfo'
// standPage, medicalPage, clinicalPage
export const slides: Slide[] = [
  homePage, introPage, standPage, medicalPage, clinicalPage, gapPage, boltonPage, laterPage, bonePage, panoPage, conclusionPage, treatmentPage, frontPage, rightPage, modelPage, mouthPage, 
]