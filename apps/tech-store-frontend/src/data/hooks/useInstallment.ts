import {InstallmentCalculation} from "@tstore/core";

export default function useInstallment(value: number, quantity: number = 12) {
    return new InstallmentCalculation().execute(value, quantity)
}