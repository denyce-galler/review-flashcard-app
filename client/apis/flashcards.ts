import request from 'superagent'
import { FlashCards } from '../../models/flashcards'

// const rootUrl = '/api/v1'

export function getAllFlashCards(): Promise<string[]> {
  return request.get('/flashcard').then((res) => {
    return res.body
  })
}

// export function getCityById(id: string): Promise<Cities> {
//   return request.get(`/api/v1/city/${id}`).then((res) => {
//     return res.body
//   })
// }

// export function getCities() {
//   return request.get('/api/v1/city').then((res) => {
//     return res.body
//   })
// }
