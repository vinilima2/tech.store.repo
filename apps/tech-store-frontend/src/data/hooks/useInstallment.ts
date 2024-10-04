import { InstallmentCalculation } from "@tstore/core";

export default function useInstallment(value: number, quantity: number = 12) {
    const installment = new InstallmentCalculation().execute(value, quantity)
    return installment
}