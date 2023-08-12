import faqs from "@/data/faqs";
import { Faq } from "@/interface/faqs";
import { NextApiRequest, NextApiResponse } from "next";

type Data = Faq | { message: string }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query

    const faq = faqs.find(faq => faq.id == Number(id))
    if (!faq) return res.status(404).json({ message: `No existe Faq con el id ${id}` })

    if (req.method == 'GET') {
        return res.status(200).json(faq)
    }

    if (req.method == 'PUT') {
        const { question, answer } = req.body
        if (!question || !answer) return res.status(400).json({ message: 'Faltan datos para crear FAQ' })

        faq.question = question
        faq.answer = answer
        return res.status(200).json(faq)
    }

    if (req.method == 'DELETE') {
        const faqDeleted = faqs.findIndex((faq) => faq.id === Number(id))

        faqs.splice(faqDeleted, 1)
        return res.status(200).json({ message: `Se ha eliminado el faq con el id ${id}` })
    }
}