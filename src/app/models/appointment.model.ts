export interface Appointment {
    id: string
    description: string
    dateTime: Date
    doctor: string
    patient: string
}

export interface NewAppointment {
    description: string
    dateTime: Date
    doctor: string
    patient: string
}