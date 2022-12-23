export function equalArrays<T>(a1: T[], a2: T[], predicate: (e1: T, e2: T) => boolean) {
    if(a1 == a2)
        return true;
    if(a1.length != a2.length)
        return false;
    for(let i=0; i<a1.length; i++) {
        if(!predicate(a1[i], a2[i]))
            return false;
    }
    return true;

}

export function equalObjects<T>(a1: T, a2: T, predicate: (e1: T, e2: T) => boolean) {
    if(a1 == a2)
        return true;
    else if(!a1 || !a2)
        return false;
    else
        return predicate(a1, a2);
}
