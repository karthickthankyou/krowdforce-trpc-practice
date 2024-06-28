import { WebhookEvent } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const payload: WebhookEvent = await request.json()

  if (payload.type === 'user.created') {
    const { id, first_name, last_name, image_url } = payload.data

    console.log(
      'id, first_name, last_name, image_url',
      id,
      first_name,
      last_name,
      image_url,
    )
    return NextResponse.json({ status: 'unsupported' })
  } else {
    return NextResponse.json({ status: 'unsupported' })
  }
}
