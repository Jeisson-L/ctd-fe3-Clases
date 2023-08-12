import faqs from "@/data/faqs";
import { Faq } from "@/interface/faqs";
import { NextApiRequest, NextApiResponse } from "next";

type Data = Faq[] | { message: string }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    //Consultar el método de la petición
    if (req.method == 'GET') {
        res.status(200).json(faqs)
    } else {
        return res.status(405).json({ message: "Método no autorizado" })
    }
}