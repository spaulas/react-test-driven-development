export type Props = {
    appointments: Array<{startsAt: number, 
        customer: {
            firstName: string
        }}>;
}