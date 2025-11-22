import crypto from 'crypto'

interface EmailPayload {
  recipient: string
  recipientName: string
  subject: string
  htmlBody: string
}

export async function sendEmail(payload: EmailPayload) {
  const { recipient, recipientName, subject, htmlBody } = payload

  const emailHash = crypto
    .createHash('sha256')
    .update(`${subject}||${recipient}||${recipientName}||${htmlBody}`)
    .digest('hex')

  const formData = new URLSearchParams()
  formData.append('recipient', recipient)
  formData.append('recipient_name', recipientName)
  formData.append('subject', subject)
  formData.append('htmlbody', htmlBody)
  formData.append('email_hash', emailHash)

  const response = await fetch(process.env.NEXT_PUBLIC_TRIDENT_SES ?? "https://api.trident.ac.in/email/amazses", {
    method: 'POST',
    body: formData.toString(),
  })

  return response
}
