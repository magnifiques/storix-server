import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getExpenseByCategory = async (req: Request, res: Response) => {
  try {
    const getExpenseByCategorySummaryRow =
      await prisma.expenseByCategory.findMany({
        orderBy: {
          date: "desc",
        },
      });

    const expenseByCategorySummary = getExpenseByCategorySummaryRow.map(
      (item) => ({
        ...item,
        amount: item.amount.toString(),
      })
    );

    res.json(expenseByCategorySummary);
  } catch (error) {
    res.status(500).json({ message: "Error Retrieving Expense by Category" });
  }
};
