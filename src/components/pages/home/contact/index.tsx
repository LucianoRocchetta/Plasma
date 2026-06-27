"use client"

import { SectionHeader } from "@/components/shared"
import { Button } from "@/components/ui"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { FormData } from "@/types"
import { sendEmail } from "@/services/send-email"
import { toast } from "sonner"

export const Contact = () => {
    const { register, handleSubmit} = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        const result = await sendEmail(data);

        if (result.success) {
            toast.success("Correo enviado exitosamente.")
        } else {
            toast.error(`Error: ${result.message}`)
        }
    }

    return (
        <section className="max-w-7xl m-auto p-10 my-10" id="contact">

            <SectionHeader badge="Contacto" title="No dudes en contactarnos"></SectionHeader>

            <div className="lg:grid grid-cols-[2fr,1fr] gap-10 h-[600px]">
                <form className="h-full flex flex-col justify-between" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-8">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Nombre | Compañia</label>
                            <input type="text" className="w-full p-3 border-b-2 border-gray-200 outline-none focus:border-gray-800 transition-colors duration-200 bg-transparent" 
                            {...register('name', {required: true})} required maxLength={30}></input>
                        </div>
                        <div className="flex flex-col lg:grid grid-cols-[1fr,1fr] gap-8">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input type="email" className="w-full p-3 border-b-2 border-gray-200 outline-none focus:border-gray-800 transition-colors duration-200 bg-transparent" {...register('email', {required: true} )} required maxLength={30}></input>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Telefono</label>
                                <input type="tel" className="w-full p-3 border-b-2 border-gray-200 outline-none focus:border-gray-800 transition-colors duration-200 bg-transparent" {...register('number', {required: true})} required maxLength={11}></input>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                            <textarea className="w-full p-3 border-b-2 border-gray-200 outline-none focus:border-gray-800 transition-colors duration-200 bg-transparent resize-none" {...register('message', {required: true})} required maxLength={255}/>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-end bg-gray-50 p-5 rounded-2xl border border-gray-100">
                        <Button type="secondary">Consultar</Button>
                    </div>
                </form>
                
                <div className="hidden lg:block relative h-full rounded-2xl overflow-hidden shadow-lg">
                    <Image alt="doctor" className="object-cover" src={"https://images.unsplash.com/photo-1616422403639-282145aa3e73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} fill/>
                </div>
            </div>
        </section>
    )
}