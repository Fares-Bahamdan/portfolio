'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [sending, setSending] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(),
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      alert('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Email sending error:', error)
      alert('Failed to send message. Please try again later.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-md border border-muted-foreground/30 bg-white dark:bg-zinc-800 dark:border-muted-foreground/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-md border border-muted-foreground/30 bg-white dark:bg-zinc-800 dark:border-muted-foreground/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          required
          className="w-full p-3 rounded-md border border-muted-foreground/30 bg-white dark:bg-zinc-800 dark:border-muted-foreground/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={sending}
          className="self-center mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition disabled:opacity-50"
        >
          {sending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  )
}
