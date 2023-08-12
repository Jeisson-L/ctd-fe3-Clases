import { Layout } from "@/components/layouts"
import { Faq } from "@/interface/faqs"
import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react'

const FaqPage = () => {

    const [faqs, setfaq] = useState({} as Faq)
    const { query } = useRouter()

    const id = query.id
    const getFaq = async () => {
        if (id) {
            const response = await fetch(`/api/faqs/${id}`)
            const data = await response.json()
            setfaq(data)
        }
    }
    useEffect(() => {
        getFaq();
    }, [id]);

    return (
        <Layout title="Preguntas Frecuentes" description="Preguntas frecuentes">
            <h1>{faqs.question}</h1>
            <p>{faqs.answer}</p>
        </Layout>
    );
}

export default FaqPage