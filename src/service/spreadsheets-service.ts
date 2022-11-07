import { google, sheets_v4 } from 'googleapis'
import { HttpResponse } from './api-service'

export class SpreadSheetService {
  private sheets: sheets_v4.Sheets

  constructor () {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      undefined,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target
    )

    this.sheets = google.sheets({
      version: 'v4',
      auth: jwt
    })
  }


  async request<T = any> (folder: string): Promise<HttpResponse<T>> {
    let response

    try {
      const sheetsData = await this.sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: folder
      })
  
      response = {
        status: 200,
        data: sheetsData.data.values as any
      }
    } catch (err) {
      response = {
        status: 500,
        data: {
          message: (err as any)?.message || 'error on connect to spreadsheet'
        }
      }
    }

    return {
      statusCode: response.status,
      body: response.data
    }
  }

}
