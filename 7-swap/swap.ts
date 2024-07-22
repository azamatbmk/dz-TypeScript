const obj: Record<string, number> = {
    A: 1,
    B: 2
}

function objReverse (obj: Record<string, number>): Record<number, string> {
    const reverObj = Object.entries(obj).map(([key, value]) => [value,key])
    return reverObj
}

