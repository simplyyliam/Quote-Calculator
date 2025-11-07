

export default function PageView({params}: {params: {serviceId: string}}) {
    return(
        <div className="flex w-full h-full">
            {params.serviceId}
        </div>
    )
}