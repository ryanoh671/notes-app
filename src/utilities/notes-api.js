import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function createNote(note) {
  console.log(note, 'note in notes-api')
  return sendRequest(`${BASE_URL}`, 'POST', note);
}