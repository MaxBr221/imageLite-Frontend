'use client'
import { Template, ImageCard, Button, useNotification } from '@/component'
import { Image } from '@/resources/image/image.resource';
import { useImageService } from '@/resources/image/imagee.service';
import {  useState } from 'react'//react hulk -> uma função que executa algo
import Link from 'next/link';
import { InputText  } from '@/component';


export default function GaleriaPage(){
    const useService = useImageService();
    const notification = useNotification();
    const [images, setImages] = useState<Image[]>([]);
    const [query, setQuery] = useState<string>('');
    const [extension, setExtension] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);


    async  function searchImages(){
        setLoading(true);
        const result = await useService.buscar(query, extension);
        setImages(result);
        setLoading(false);

        if(!result.length){
            notification.notify('Nenhum resultado encontrado', 'warning');
        }

    }
    function renderImageCard(image: Image){
        return(
            <ImageCard key={image.url} nome={image.name} src={image.url} tamanho={image.size} extension={image.extension} dataUpload={image.uploadDate}/>
        )   
    }
    function renderImageCards(){
        return images.map(renderImageCard);
    }

    return ( 
        <Template loading={loading}>  

            <section className='flex flex-col items-center justify-center my-5'>
                <div className='flex space-x-4'>
                    <InputText placeholder='Digite Nome o Tags'
                            onChange={event => setQuery(event.target.value)} />

                    <select onChange={event => setExtension(event.target.value)} className='border px-4 py-2 rouded-lg text-gray-900'>
                        <option value="">All Formats</option>
                        <option value="PNG">PNG</option>
                        <option value="JPEG">JPEG </option>
                        <option value="GIF">GIF</option>

                    </select>
                    <Button style='bg-blue-500 hover:blue-bg-300' label='Search' onClick={searchImages}/>
                    <Link href="/formulario">
                        <Button style='bg-yellow-500 hover:yellow-bg-300' label='Add New'/>  
                    </Link>

                </div>
                
            </section>
            <section className="grid grid-cols-3 gap-8">
                {
                    renderImageCards()
                }
            </section>
        </Template>

    )
}