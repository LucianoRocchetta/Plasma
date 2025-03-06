import { FormData } from "@/types";

export async function sendEmail(data: FormData): Promise<{ success: boolean; message: string }> {
    const apiEmailEndpoint = '/api/email';

    try {
        const response = await fetch(apiEmailEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.message || 'Error al enviar el correo');
        }

        return { success: true, message: result.message };
    } catch (error:any) {
        return { success: false, message: error.message || 'Ocurrió un error' };
    }
}
