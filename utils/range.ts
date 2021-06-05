/**
 * Adapted from https://dev.to/ycmjason/how-to-create-range-in-javascript-539i
 */
export default function range(start: number, end: number): Array<number> {
    if (start <= end) {
        return Array.from({ length: end - start + 1 }, (_, i) => start + i)
    } else {
        return Array.from({ length: start - end + 1 }, (_, i) => start - i)
    }
}
