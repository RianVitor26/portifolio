
export const Skeleton = () => {
    return (
        <div className="w-full max-w-[26rem]">
            <div className="animate-pulse flex space-x-4 p-4">
                <div className="flex-1 space-y-4 py-1">
                    <div className="h-40 bg-slate-500 rounded"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-slate-500 rounded"></div>
                        <div className="h-4 bg-slate-500 rounded w-5/6"></div>
                        <div className="h-4 bg-slate-500 rounded w-4/6"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
