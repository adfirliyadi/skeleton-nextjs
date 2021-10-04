import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

export default function Custom404(){
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000);
    }, []);

    return (
        <div className='title-not-found'>
            <h1>404 Ooops....</h1>
            <h1>Halaman yang anda cari tidak ada</h1>
        </div>
    )
}