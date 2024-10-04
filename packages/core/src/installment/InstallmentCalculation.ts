import { MAX_INSTALLMENTS, MONTH_INTEREST_RATE } from "../constants";
import Installment from "./Installment";

export default class InstallmentCalculation {
    execute(value: number, installmentQuantity: number = MAX_INSTALLMENTS,
        interestRate: number = MONTH_INTEREST_RATE
    ): Installment {
        if (installmentQuantity < 2 || installmentQuantity > MAX_INSTALLMENTS) {
            throw new Error(`Number of installments cannot be greater than ${installmentQuantity}`)
        }

        const totalWithFees = this.calculateValueWithFees(value, interestRate, installmentQuantity);

        return {
            installmentValue: this.valueWithTwoScale(totalWithFees / installmentQuantity),
            totalValue: this.valueWithTwoScale(totalWithFees),
            installmentQuantity,
            interestRate
        }
    }

    private calculateValueWithFees(totalValue: number, monthFees: number, installmentQuantity: number): number {
        return totalValue * Math.pow(1 + monthFees, installmentQuantity);
    }

    private valueWithTwoScale(value: number): number {
        return Math.round(value * 100) / 100
    }
}