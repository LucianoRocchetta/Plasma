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
        <section className="max-w-screen-2xl m-auto p-10 my-10" id="contact">

            <SectionHeader badge="Contacto" title="No dudes en contactarnos"></SectionHeader>

            <div className="lg:grid grid-cols-[2fr,1fr] gap-5 h-[600px]">
                <form className="h-full flex flex-col justify-between" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-10">
                        <div>
                            <p>Nombre | Compañia</p>
                            <input type="text" className="p-2 border-b-2 border-gray-200 outline-none" 
                            {...register('name', {required: true})} required maxLength={30}></input>
                        </div>
                        <div className="flex flex-col lg:grid grid-cols-[1fr,1fr] gap-10">
                            <div>
                                <p>Email</p>
                                <input type="email" className="p-2 border-b-2 border-gray-200 outline-none w-full" {...register('email', {required: true} )} required maxLength={30}></input>
                            </div>
                            <div>
                                <p>Telefono</p>
                                <input type="tel" className="p-2 border-b-2 border-gray-200 outline-none w-full" {...register('number', {required: true})} required maxLength={11}></input>
                            </div>
                        </div>
                        <div>
                            <p>Mensaje</p>
                            <textarea className="p-2 border-b-2 border-gray-200 outline-none w-full resize-none" {...register('message', {required: true})} required maxLength={255}/>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-end bg-gray-100 p-5 rounded-full">
                        <Button type="secondary">Consultar</Button>
                    </div>
                </form>
                
                <div className="hidden lg:block relative h-full">
                    <Image alt="doctor" className="rounded-xl" src={"https://images.unsplash.com/photo-1616422403639-282145aa3e73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} fill/>
                </div>
            </div>
        </section>
    )
}