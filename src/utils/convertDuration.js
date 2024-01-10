export default function convertDuration(durationInMinutes) {
    const hours = Math.floor(durationInMinutes / 60)
    const minutes = durationInMinutes - (60 * hours)

    if (hours) {

        if (minutes) {
            return `${hours}ч ${minutes}м`
        }

        return `${hours}ч`
    }

    return `${minutes}м`
}